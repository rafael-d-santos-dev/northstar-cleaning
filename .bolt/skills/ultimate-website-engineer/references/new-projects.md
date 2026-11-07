# New projects: create a website from scratch

Use this when the user asks for a new site or application. The aim is a working, honest, maintainable result, not a pile of decorative controls.

## 1. Understand the project

Identify purpose and audience, site type, the main business or user goal, required pages and sections, essential functionality, design direction, technical constraints and where it will be deployed.

Ask a question only when the missing answer would materially change the build. For minor unknowns, make a reasonable assumption and list it in the delivery. Never invent real business facts: names, addresses, prices, testimonials, ratings, client counts, years of experience, credentials, guarantees or statistics.

Use safe placeholders: one consistent visible marker in the page itself (for example `[PREENCHER: telefone]`), inert until replaced (a contact link with no real number stays disabled or empty, and never uses a real-looking number), and gathered in a single config block at the top of the file so the user can find them on a small screen. Prefer leaving out a section that would need invented data (testimonials, price table) over filling it. End the delivery with the pre-publication checklist from SKILL.md.

## 2. Architecture

Choose the simplest stack that fits (preferences are in SKILL.md section 4):

- Single `index.html` with inline CSS and JS: simple pages, static landing pages, anything edited on a phone.
- React + Vite: intermediate projects with components and richer interaction.
- Next.js: only when SSR, SSG or advanced routing earn their keep.

Define the file structure, component breakdown (when relevant), page and navigation structure, state and data needs, the responsive strategy, and design tokens (colors, type scale, spacing). Do not add a backend or dependencies the project does not need.

## 3. Design and experience

Bring in specialists at the stage where they add value, in the same conversation, one after another:

- `ui-ux-enhancer`: visual identity, hierarchy, typography, spacing, responsive layouts.
- `website-conversion-optimizer`: value proposition, CTA placement and wording, form length, honest trust signals. Only when the site has a commercial goal.
- `seo-accessibility`: semantic structure, metadata, headings, labels, contrast, focus, keyboard, from the start rather than as a retrofit.
- `motion-3d-experience-designer`: only when motion or 3D serves the project. Respect reduced-motion and weak mobile devices.

Keep one design system across the whole site.

## 4. Build

- Reusable components, clear naming, maintainable styling, semantic and accessible markup, responsive layouts.
- Real loading, error, empty and success states where the interface needs them.
- Everything that looks interactive must work. A WhatsApp button must open a real `wa.me` link built from the number the user gave. A form needs a real submission path or must be openly labelled as a prototype.
- No fake payment flows, fake success messages, invented reviews or counters that pretend to be live data.
- If a feature needs a backend or an external service that is not available, build an honest frontend version and state exactly what is still required.

For a single-file site, keep CSS in a `<style>` block and JS in a `<script>` block inside `index.html`, with a short comment header marking the editable sections (colors, texts, contact data) so the user can find them quickly on a small screen.

## 5. Quality check

Load `frontend-qa-tester` (or apply its checklist yourself if unavailable) and verify navigation, buttons and links, forms and validation, key user flows, responsive behaviour, error and empty states, accessibility basics, and build or type checks where a build exists. Read `quality-standards.md` for the checklist. Report each check with a status label.

## 6. Deliver

Provide: the project structure and main features, the technologies and why, what is implemented, verification results with statuses, known limitations and placeholders to replace, and how to run and deploy it. Keep it short for small projects.
