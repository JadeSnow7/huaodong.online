---
description: Export multiple versions of the resume (AI, Client, Fullstack) to PDF
---

This workflow generates tailored PDF versions of the resume for different job roles.

# Steps

1. Run the generation script:
   ```bash
   npm run resume:pdf
   ```
   // turbo

2. Verify the output files in `assets/`:
   - `resume.pdf` (Default/Generic)
   - `resume-ai.pdf` (AI Application Engineer)
   - `resume-client.pdf` (Client Developer)
   - `resume-fullstack.pdf` (Fullstack Engineer)

# How it works

- The `resume.html` page uses `data-role` attributes to filter content based on the selected role.
- The `tools/render-resume-pdf.mjs` script launches a headless browser.
- It iterates through defined roles (`all`, `ai`, `client`, `fullstack`).
- For each role, it opens `resume.html?role=[role]`, which triggers the JavaScript to hide irrelevant sections and show role-specific summaries.
- It then prints the page to PDF.

# Adding a new role

1. Update `resume.html`:
   - Add a button in `.role-switcher`.
   - Add a new `.profile-summary` block with `role-item show-[newrole]` classes.
   - Tag relevant projects/skills with `show-[newrole]`.
   - Update `SUPPORTED_ROLES` in the `<script>` block.
   - Add translations in the `translations` object.

2. Update `tools/render-resume-pdf.mjs`:
   - Add the new role to the `ROLES` array with its output filename.
