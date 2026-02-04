import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const ROOT = process.cwd();
const INPUT = path.resolve(ROOT, "resume.html");
const STABLE_PDF_DATE = "D:19700101000000+00'00'";

const ROLES = [
  { id: "all", filename: "resume.pdf" },
  { id: "ai", filename: "resume-ai.pdf" },
  { id: "client", filename: "resume-client.pdf" },
  { id: "fullstack", filename: "resume-fullstack.pdf" },
];

const normalizePdfDates = async (pdfPath) => {
  // Chromium sets CreationDate/ModDate to "now", making the PDF non-deterministic.
  // Keep whitespace intact to preserve xref offsets.
  try {
    const raw = await fs.readFile(pdfPath);
    const text = raw.toString("latin1");
    const patched = text
      .replace(/\/CreationDate(\s*)\(D:[^)]*\)/g, `/CreationDate$1(${STABLE_PDF_DATE})`)
      .replace(/\/ModDate(\s*)\(D:[^)]*\)/g, `/ModDate$1(${STABLE_PDF_DATE})`);
    if (patched !== text) {
      await fs.writeFile(pdfPath, Buffer.from(patched, "latin1"));
    }
  } catch (e) {
    console.warn(`Warning: Could not normalize dates for ${pdfPath}`, e);
  }
};

const main = async () => {
  await fs.access(INPUT);
  const assetsDir = path.resolve(ROOT, "assets");
  await fs.mkdir(assetsDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    // Ensure stable layout across environments.
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
    acceptDownloads: true
  });


  for (const role of ROLES) {
    console.log(`Generating PDF for role: ${role.id} -> ${role.filename}`);
    const page = await context.newPage();
    const outputPath = path.resolve(assetsDir, role.filename);

    page.on("pageerror", (err) => {
      console.error(`[${role.id}] [pageerror]`, err);
    });
    page.on("console", (msg) => {
      if (msg.type() === "error") console.error(`[${role.id}] [console]`, msg.text());
    });

    const fileUrl = pathToFileURL(INPUT).toString();
    // Append query param if not default/all (though all sets role-all class anyway)
    // If id is 'all', we can pass ?role=all explicitly or leave it default.
    // Our JS logic handles ?role=all correctly.
    const targetUrl = `${fileUrl}?role=${role.id}`;

    await page.goto(targetUrl, { waitUntil: "load", timeout: 60_000 });
    await page.waitForSelector(".resume-container", { timeout: 60_000 });

    // Ensure fonts loaded
    await page.waitForLoadState("networkidle", { timeout: 60_000 }).catch(() => { });
    await page.evaluate(async () => {
      if (document.fonts && "ready" in document.fonts) {
        await document.fonts.ready;
      }
    });

    // Wait a bit for any JS transitions/rendering to settle (like hiding elements)
    // specifically the role switching logic which runs immediately but good to be safe
    await page.waitForTimeout(500);

    await page.emulateMedia({ media: "print" });

    await page.pdf({
      path: outputPath,
      format: "A4",
      preferCSSPageSize: true, // Respect @page CSS
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }, // Let CSS handle margins
      printBackground: true,
      preferCSSPageSize: true,
    });

    await page.close();
    await normalizePdfDates(outputPath);
    console.log(`Wrote ${outputPath}`);
  }

  await browser.close();
};

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
