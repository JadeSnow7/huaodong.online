import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const ROOT = process.cwd();
const INPUT = path.resolve(ROOT, "resume.html");
const OUTPUT = path.resolve(ROOT, "assets", "resume.pdf");
const STABLE_PDF_DATE = "D:19700101000000+00'00'";

const normalizePdfDates = async (pdfPath) => {
  // Chromium sets CreationDate/ModDate to "now", making the PDF non-deterministic.
  // Keep whitespace intact to preserve xref offsets.
  const raw = await fs.readFile(pdfPath);
  const text = raw.toString("latin1");
  const patched = text
    .replace(/\/CreationDate(\s*)\(D:[^)]*\)/g, `/CreationDate$1(${STABLE_PDF_DATE})`)
    .replace(/\/ModDate(\s*)\(D:[^)]*\)/g, `/ModDate$1(${STABLE_PDF_DATE})`);
  if (patched !== text) {
    await fs.writeFile(pdfPath, Buffer.from(patched, "latin1"));
  }
};

const main = async () => {
  await fs.access(INPUT);
  await fs.mkdir(path.dirname(OUTPUT), { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    // Ensure stable layout across environments.
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  page.on("pageerror", (err) => {
    // Surface runtime errors (e.g. syntax issues in resume.html scripts).
    console.error("[pageerror]", err);
  });
  page.on("console", (msg) => {
    if (msg.type() === "error") console.error("[console]", msg.text());
  });

  const url = pathToFileURL(INPUT).toString();
  await page.goto(url, { waitUntil: "load", timeout: 60_000 });
  await page.waitForSelector(".resume-container", { timeout: 60_000 });

  // Fonts can load after 'load' and affect line breaks/page count.
  await page.waitForLoadState("networkidle", { timeout: 60_000 }).catch(() => {});
  await page.evaluate(async () => {
    if (document.fonts && "ready" in document.fonts) {
      await document.fonts.ready;
    }
  });

  await page.emulateMedia({ media: "print" });

  await page.pdf({
    path: OUTPUT,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();
  await normalizePdfDates(OUTPUT);
  console.log(`Wrote ${OUTPUT}`);
};

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
