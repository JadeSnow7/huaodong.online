import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const ROLES = ["all", "ai", "client", "fullstack", "server", "system", "frontend"];
const PROJECTS = ["story", "teaching", "swiftsweep", "riscv", "ns3"];
const LANGS = ["zh", "en"];
const GENERATED_BANNER = `<!DOCTYPE html>
<!-- ============================================== -->
<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT.      -->
<!-- Edit files in resume/data instead and rebuild. -->
<!-- ============================================== -->`;
const GENERATED_BANNER_PATTERN = /^<!DOCTYPE html>(?:\n<!-- ============================================== -->\n<!-- THIS FILE IS AUTO-GENERATED\. DO NOT EDIT\.      -->\n<!-- Edit files in resume\/data instead and rebuild\. -->\n<!-- ============================================== -->)?/;

const indentBlock = (content, level) => {
    const indent = "\t".repeat(level);
    return content
        .trim()
        .split("\n")
        .map((line) => `${indent}${line}`)
        .join("\n");
};

const replaceOrThrow = (source, searchValue, replacement, label) => {
    if (typeof searchValue === "string") {
        if (!source.includes(searchValue)) {
            throw new Error(`[Build] Missing placeholder for ${label}`);
        }
        return source.replace(searchValue, replacement);
    }

    if (!searchValue.test(source)) {
        throw new Error(`[Build] Missing pattern for ${label}`);
    }

    return source.replace(searchValue, replacement);
};

async function loadData() {
    const commonPath = path.join(__dirname, "data", "common.js");
    const common = (await import(commonPath)).default;

    const projectsData = {};
    for (const projectId of PROJECTS) {
        const projectPath = path.join(__dirname, "data", "projects", `${projectId}.js`);
        projectsData[projectId] = (await import(projectPath)).default;
    }

    const rolesData = {};
    for (const roleId of ROLES) {
        const rolePath = path.join(__dirname, "data", "roles", `${roleId}.js`);
        rolesData[roleId] = (await import(rolePath)).default;
    }

    return { common, projectsData, rolesData };
}

function buildProfileAndSkills(rolesData, translations) {
    const summaryBlocks = [];
    const tagBlocks = [];
    const skillCards = [];

    for (const roleId of ROLES) {
        const roleData = rolesData[roleId];
        const suffix = roleId === "all" ? "" : `_${roleId}`;
        const displayClass = `show-${roleId}`;

        translations.zh.core[`role_btn${suffix}`] = roleData.label.zh;
        translations.en.core[`role_btn${suffix}`] = roleData.label.en;

        for (const lang of LANGS) {
            const localizedRole = roleData[lang] || {};
            translations[lang].core[`summary${suffix}`] = localizedRole.summary || "";
            translations[lang].core[`tags${suffix}`] = localizedRole.tags || "";

            if (localizedRole.skills) {
                for (const [skillKey, skillValue] of Object.entries(localizedRole.skills)) {
                    translations[lang].skills[`${roleId}_${skillKey}`] = skillValue;
                }
            }
        }

        summaryBlocks.push(`
<div class="profile-summary role-item ${displayClass}">
	<p data-i18n-html="core.summary${suffix}"></p>
</div>`.trim());

        tagBlocks.push(`
<div class="core-tags role-item ${displayClass}" data-i18n-html="core.tags${suffix}"></div>`.trim());

        if (roleData.zh?.skills) {
            for (const skillKey of Object.keys(roleData.zh.skills)) {
                skillCards.push(`
<div class="skill-card role-item-grid ${displayClass}">
	<div class="label" data-i18n="skills.${roleId}_${skillKey}.label"></div>
	<div class="value" data-i18n-html="skills.${roleId}_${skillKey}.value"></div>
</div>`.trim());
            }
        }
    }

    return { summaryBlocks, tagBlocks, skillCards };
}

function buildProjects(projectsData, translations) {
    const projectBlocks = [];

    for (const roleId of ROLES) {
        const displayClass = `show-${roleId}`;

        for (const projectId of PROJECTS) {
            const project = projectsData[projectId];
            if (!project.showIn.includes(roleId) && !project.showIn.includes("all")) {
                continue;
            }

            const variantZh = project.descriptions[roleId]?.zh || project.descriptions.default.zh;
            const variantEn = project.descriptions[roleId]?.en || project.descriptions.default.en;
            const titleZh = project.descriptions[roleId]?.zh?.titleOverride || project.title.zh;
            const titleEn = project.descriptions[roleId]?.en?.titleOverride || project.title.en;
            const translationKey = `${projectId}_${roleId}`;
            const tagStyle = project.tagStyle || "fullstack";
            const featuredClass = project.featured ? " featured" : "";
            const titleMarkup = project.link
                ? `<a href="${project.link}" target="_blank" rel="noopener"><span data-i18n="projects.${translationKey}.title"></span> <span style="font-size: 10pt; color: #86868b; font-weight: 400;">↗</span></a>`
                : `<span data-i18n="projects.${translationKey}.title"></span>`;

            translations.zh.projects[translationKey] = {
                title: titleZh,
                meta: variantZh.meta,
                points: variantZh.points,
            };
            translations.en.projects[translationKey] = {
                title: titleEn,
                meta: variantEn.meta,
                points: variantEn.points,
            };

            projectBlocks.push(`
<div class="project ${projectId} role-item ${displayClass}${featuredClass}">
	<div class="project-header">
		<div class="project-title">
			${titleMarkup}
			<span class="tag ${tagStyle}" data-i18n="tag.${tagStyle}"></span>
		</div>
		<div class="project-meta" data-i18n-html="projects.${translationKey}.meta"></div>
	</div>
	<ul data-i18n-html="projects.${translationKey}.points"></ul>
</div>`.trim());
        }
    }

    return projectBlocks;
}

async function build() {
    console.log("[Build] Starting resume build...");

    const { common, projectsData, rolesData } = await loadData();
    const translations = { zh: {}, en: {} };

    for (const lang of LANGS) {
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

    const { summaryBlocks, tagBlocks, skillCards } = buildProfileAndSkills(rolesData, translations);
    const projectBlocks = buildProjects(projectsData, translations);

    const templatePath = path.join(__dirname, "template.html");
    let html = await fs.readFile(templatePath, "utf-8");

    html = replaceOrThrow(html, GENERATED_BANNER_PATTERN, GENERATED_BANNER, "generated banner");
    html = replaceOrThrow(
        html,
        /^\s*<div class="section section-core">[\s\S]*?^\s*<div class="section section-education">/m,
        [
            '\t\t\t\t<div class="section section-core">',
            '\t\t\t\t\t<div class="section-title" data-i18n="section.core">核心竞争力</div>',
            indentBlock(summaryBlocks.join("\n"), 5),
            indentBlock(tagBlocks.join("\n"), 5),
            '\t\t\t\t</div>',
            "",
            '\t\t\t\t<div class="section section-education">',
        ].join("\n"),
        "core section"
    );
    html = replaceOrThrow(
        html,
        /^\s*<div class="section section-skills">[\s\S]*?^\s*<div class="section section-projects">/m,
        [
            '\t\t\t\t<div class="section section-skills">',
            '\t\t\t\t\t<div class="section-title" data-i18n="section.skills">专业技能</div>',
            '\t\t\t\t\t<div class="skills-grid">',
            indentBlock(skillCards.join("\n"), 6),
            '\t\t\t\t\t</div>',
            '\t\t\t\t</div>',
            "",
            '\t\t\t\t<div class="section section-projects">',
        ].join("\n"),
        "skills section"
    );
    html = replaceOrThrow(
        html,
        /^\s*<div class="section section-projects">[\s\S]*?^\s*<div class="section section-campus">/m,
        [
            '\t\t\t\t<div class="section section-projects">',
            '\t\t\t\t\t<div class="section-title" data-i18n="section.projects">项目经历</div>',
            indentBlock(projectBlocks.join("\n"), 5),
            '\t\t\t\t</div>',
            "",
            '\t\t\t\t<div class="section section-campus">',
        ].join("\n"),
        "projects section"
    );
    html = replaceOrThrow(
        html,
        /const translations = [\s\S]*?;\s*\n\s*const getNested =/,
        `const translations = ${JSON.stringify(translations, null, 4)};\n\n\t\t\t\tconst getNested =`,
        "translations block"
    );

    const targetPath = path.join(ROOT, "resume.html");
    await fs.writeFile(targetPath, html, "utf-8");
    console.log(`[Build] Successfully generated resume.html at ${targetPath}`);
}

build().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
