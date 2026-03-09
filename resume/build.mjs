import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const ROLES = ["all", "ai", "client", "fullstack", "server", "system", "frontend"];
const PROJECTS = ["story", "teaching", "swiftsweep", "riscv", "ns3"];

// Render project points from string to li elements
function renderPoints(pointsHtml) {
    if (!pointsHtml) return "";
    return pointsHtml;
}

async function build() {
    console.log("[Build] Starting resume build...");

    // 1. Load data
    const commonPath = path.join(__dirname, "data", "common.js");
    const common = (await import(commonPath)).default;

    const projectsData = {};
    for (const p of PROJECTS) {
        const pPath = path.join(__dirname, "data", "projects", `${p}.js`);
        projectsData[p] = (await import(pPath)).default;
    }

    const rolesData = {};
    for (const r of ROLES) {
        const rPath = path.join(__dirname, "data", "roles", `${r}.js`);
        rolesData[r] = (await import(rPath)).default;
    }

    // 2. Generate HTML Blocks
    let generatedProfileSummaries = "";
    let generatedProfileTags = "";
    let generatedSkills = "";
    let generatedProjects = "";
    const translations = { zh: {}, en: {} };

    // Common setup
    for (const lang of ["zh", "en"]) {
        translations[lang].meta = common.meta[lang];
        translations[lang].nav = common.nav[lang];
        translations[lang].header = common.header[lang];
        translations[lang].section = common.section[lang];
        translations[lang].download = common.download[lang];
        translations[lang].tag = common.tag[lang];
        translations[lang].education = common.education[lang];
        translations[lang].campus = { list: common.campus[lang] };
        translations[lang].core = {};
        translations[lang].skills = {};
        translations[lang].projects = {};
    }

    // --- Profiles (Summary & Tags) & Skills ---
    for (const roleId of ROLES) {
        const roleData = rolesData[roleId];
        const suffix = roleId === "all" ? "" : `_${roleId}`;
        const displayClass = `show-${roleId}`;

        // Buttons
        translations["zh"].core[`role_btn${suffix}`] = roleData.label.zh;
        translations["en"].core[`role_btn${suffix}`] = roleData.label.en;

        for (const lang of ["zh", "en"]) {
            const rLang = roleData[lang] || {};
            // Summary text
            translations[lang].core[`summary${suffix}`] = rLang.summary || "";
            // Tags text
            translations[lang].core[`tags${suffix}`] = rLang.tags || "";

            // Collect skills for JSON
            if (rLang.skills) {
                for (const [skKey, skObj] of Object.entries(rLang.skills)) {
                    translations[lang].skills[`${roleId}_${skKey}`] = skObj;
                }
            }
        }

        // HTML for Summary
        generatedProfileSummaries += `
					<div class="profile-summary role-item ${displayClass}">
						<p data-i18n-html="core.summary${suffix}"></p>
					</div>\n`;

        // HTML for Tags
        generatedProfileTags += `
					<div class="core-tags role-item ${displayClass}" data-i18n-html="core.tags${suffix}"></div>\n`;

        // HTML for Skills
        // We look at the 'zh' properties to dictate the structure (assume en is parallel)
        if (roleData.zh && roleData.zh.skills) {
            for (const skKey of Object.keys(roleData.zh.skills)) {
                generatedSkills += `
						<div class="skill-card role-item-grid ${displayClass}">
							<div class="label" data-i18n="skills.${roleId}_${skKey}.label"></div>
							<div class="value" data-i18n-html="skills.${roleId}_${skKey}.value"></div>
						</div>\n`;
            }
        }
    }

    // --- Projects ---
    for (const roleId of ROLES) {
        const displayClass = `show-${roleId}`;

        for (const pid of PROJECTS) {
            const project = projectsData[pid];

            // Should this project be shown for this role?
            if (!project.showIn.includes(roleId) && !project.showIn.includes("all")) {
                continue;
            }

            // Figure out description variant
            const variantZ = project.descriptions[roleId]?.zh || project.descriptions.default.zh;
            const variantE = project.descriptions[roleId]?.en || project.descriptions.default.en;

            const trKey = `${pid}_${roleId}`;

            // Add title override if exists
            const titleZ = project.descriptions[roleId]?.zh?.titleOverride || project.title.zh;
            const titleE = project.descriptions[roleId]?.en?.titleOverride || project.title.en;

            for (const lang of ["zh", "en"]) {
                const varObj = lang === "zh" ? variantZ : variantE;
                const tit = lang === "zh" ? titleZ : titleE;
                translations[lang].projects[trKey] = {
                    title: tit,
                    meta: varObj.meta,
                    points: varObj.points
                };
            }

            const headerExtra = project.link
                ? `<a href="${project.link}" target="_blank" rel="noopener"><span data-i18n="projects.${trKey}.title"></span> <span style="font-size: 10pt; color: #86868b; font-weight: 400;">↗</span></a>`
                : `<span data-i18n="projects.${trKey}.title"></span>`;

            const featuredClass = project.featured ? " featured" : "";

            generatedProjects += `
					<div class="project ${pid} role-item ${displayClass}${featuredClass}">
						<div class="project-header">
							<div class="project-title">
								${headerExtra}
								<span class="tag ${project.tagStyle}" data-i18n="tag.${project.tagStyle || 'fullstack'}"></span>
							</div>
							<div class="project-meta" data-i18n-html="projects.${trKey}.meta"></div>
						</div>
						<ul data-i18n-html="projects.${trKey}.points"></ul>
					</div>\n`;
        }
    }


    // 3. Read template and inject
    const templatePath = path.join(__dirname, "template.html");
    let html = await fs.readFile(templatePath, "utf-8");

    html = html.replace("<!-- GENERATED_PROFILE_SUMMARIES -->", generatedProfileSummaries.trim());
    html = html.replace("<!-- GENERATED_PROFILE_TAGS -->", "\t\t\t\t\t" + generatedProfileTags.trim());
    html = html.replace("<!-- GENERATED_SKILLS -->", generatedSkills.trim());
    html = html.replace("<!-- GENERATED_PROJECTS -->", generatedProjects.trim());

    // Inject Translations JSON
    const translationsJsonStr = JSON.stringify(translations, null, 4);
    html = html.replace("/* GENERATED_TRANSLATIONS_JSON */ {}", translationsJsonStr);

    // Update Role Switcher logic in HTML
    html = html.replace(
        'const SUPPORTED_ROLES = new Set(["all", "ai", "client", "fullstack", "server"]);',
        'const SUPPORTED_ROLES = new Set(["all", "ai", "client", "fullstack", "server", "system", "frontend"]);'
    );
    html = html.replace(
        'document.body.classList.remove("role-all", "role-ai", "role-client", "role-fullstack", "role-server");',
        'document.body.classList.remove("role-all", "role-ai", "role-client", "role-fullstack", "role-server", "role-system", "role-frontend");'
    );

    // For CSS: Add new roles to print / display
    html = html.replace(
        'body.role-server .role-item.show-server {',
        'body.role-server .role-item.show-server,\\n\\t\\tbody.role-system .role-item.show-system,\\n\\t\\tbody.role-frontend .role-item.show-frontend {'
    );
    html = html.replace(
        'body.role-server .role-item-grid.show-server {',
        'body.role-server .role-item-grid.show-server,\\n\\t\\tbody.role-system .role-item-grid.show-system,\\n\\t\\tbody.role-frontend .role-item-grid.show-frontend {'
    );

    // Update switcher buttons block
    const switcherRegex = /<div class="role-switcher">.*?<\/div>/s;
    const btnsHtml = `
			<div class="role-switcher">
				<button class="role-btn active" data-role-btn="all" data-i18n="core.role_btn"></button>
				<button class="role-btn" data-role-btn="ai" data-i18n="core.role_btn_ai"></button>
				<button class="role-btn" data-role-btn="client" data-i18n="core.role_btn_client"></button>
				<button class="role-btn" data-role-btn="fullstack" data-i18n="core.role_btn_fullstack"></button>
				<button class="role-btn" data-role-btn="server" data-i18n="core.role_btn_server"></button>
				<button class="role-btn" data-role-btn="system" data-i18n="core.role_btn_system"></button>
				<button class="role-btn" data-role-btn="frontend" data-i18n="core.role_btn_frontend"></button>
			</div>`;
    html = html.replace(switcherRegex, btnsHtml.trim());

    // Update PDF renaming
    html = html.replace(
        /else if \(currentRole === "server"\) filename = "resume-server\.pdf";/s,
        `else if (currentRole === "server") filename = "resume-server.pdf";
				else if (currentRole === "system") filename = "resume-system.pdf";
				else if (currentRole === "frontend") filename = "resume-frontend.pdf";`
    );


    // Add auto-generated comment at top
    html = html.replace("<!DOCTYPE html>", "<!DOCTYPE html>\n<!-- ============================================== -->\n<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT.      -->\n<!-- Edit files in resume/data instead and rebuild. -->\n<!-- ============================================== -->");

    // Output
    const targetPath = path.join(ROOT, "resume.html");
    await fs.writeFile(targetPath, html, "utf-8");
    console.log(`[Build] Successfully generated resume.html at ${targetPath}`);
}

build().catch(err => {
    console.error(err);
    process.exitCode = 1;
});
