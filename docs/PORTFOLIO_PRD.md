# Lea Michaelov — Portfolio 2026

Version 0.1 · 7 October 2026 · Initial infrastructure and content plan

## Purpose
Create an English-language portfolio that Lea can send to hiring teams, creative leads and prospective clients. Visitors should understand her range across UX/UI, brand and marketing design, then examine her contribution through clickable case studies. Radware is the lead project.

## Positioning and voice
The concept is Human × Machine: an experienced designer whose human judgment, ideas and taste lead the work, using AI as a collaborator. The user's original references are “I'm only human after all” and “מתלוצצת עם הרובוטים שלי.” Working original headline: **Still human. By design.** Supporting line: **Joking with my robots.** These English lines are proposed copy, not previously approved final wording. Tone: confident, playful, thoughtful and clear. The work remains the proof of capability.

## Sources and confidence
- Current request: plan first, write a PRD, build initial infrastructure, organize Figma projects into clickable case studies, feature Radware first, publish through Vercel.
- Retrieved October 6 conversation context: named project selections, Human × Machine concept, large end-to-end Radware scope, large Tnuva website, Yotpo onboarding as evidence of machine collaboration.
- Current “Lea Michaelov CV.pdf”: professional disciplines, education, email, Radware website/mobile description, Volcani and Hava work. Older employment dates are not repeated as current facts.
- Behance profile supplied by user: https://www.behance.net/leamichaelov
- Shared conversation: https://chatgpt.com/share/6ac61197-2ca8-83ed-bfe5-8d94311265c4. Full page could not be read; prior-context retrieval supplied the core decisions.
- Figma project files have not been inspected. Browser permission settings denied Figma access. A Hava file URL appeared in the available tab inventory, but no design inspection or import took place.
- Browser permission settings denied Vercel access. No deployment was created.

Only professional information belongs in the public portfolio. Do not import unrelated personal information. Do not invent project dates, collaborators, research, deliverables, tools, metrics, testimonials or business outcomes. The CV reports a Volcani engagement metric, but it is excluded from public copy until its basis is verified.

## Project inventory
| Project | Purpose in portfolio | Starting content | Priority |
| --- | --- | --- | --- |
| Radware | Lead proof of scale and end-to-end UX/UI ownership | Website/mobile; design language; differentiation of use cases and articles; modern product visualization | First, expanded case study |
| Yotpo Onboarding | Human × Machine work | AI-assisted onboarding project; detailed process pending | Featured |
| Adidas | Brand and campaign range | Selected Behance work; exact project assets and contribution pending | Featured |
| Tnuva | Large website design | Scope stated by Lea; detailed process pending | Featured |
| Hava Zingboim | E-commerce and art direction | Website; image-making for product sales | Featured |
| Similarweb | Marketing/web range | Existing browser title identifies Data Summit UX/UI project; detailed contribution pending | Supporting |
| Barilla | Brand and marketing design | Selected Behance work; detailed contribution pending | Supporting |
| Volcani / Kidum | Technology communication | Website rebrand, custom iconography, commercialized/non-commercialized technology differentiation | Supporting |
| ENDI’S | Graduation project | Lea is undecided | Excluded pending decision |

Eight confirmed selections. Feature five prominently and keep three supporting. This is a starting editorial structure, not a claim that every case study is complete.

## Visitor journeys
1. Open home → understand Lea's role and point of view → open Radware → examine work → contact Lea.
2. Open a direct case-study URL → understand scope/contribution → return to selected work.
3. Explore supporting work → open original Behance source where available.

## Information architecture
- `/`: introduction, Radware feature, selected work, About, contact.
- `/case-studies/radware/`: dedicated lead case study.
- `/#project-{slug}`: accessible overview sections for remaining selected projects in this first version.
- Later: individual `/case-studies/{slug}/` routes as verified visual content is added.

## Visual direction
An editorial typography-led foundation: charcoal, vivid pink and white, oversized headlines, clear project indexing and generous space. The temporary project tiles use typography rather than fabricated client imagery. Replace their presentation with genuine project covers once access is available. Subtle motion respects reduced-motion preferences. Layout must work on phones and desktop.

## Radware case study
Confirmed scope: Lea describes a large project handled end to end. CV identifies website and mobile, a design language balancing client requirements with brand visualization, distinct use-case/article presentation and more modern communication-product visualization.

Initial page uses only these facts: project introduction, role/scope, design language, content differentiation and product visualization. Its visual gallery is explicitly identified as pending. Do not present a reconstructed Radware website as Lea's original design.

Next evidence to collect:
- Exact Radware Figma file and frame links; approved representative desktop and mobile screens.
- Original brief, target audiences and constraints.
- Navigation, page families and component examples.
- Specific design decisions with before/after or annotated screens.
- Dates, team credits, responsibilities and implementation status.
- Outcomes only if documented; otherwise describe deliverables and lessons.

## Functional requirements
- Every project title/tile links to a real overview or case study.
- Radware appears first and has a direct URL.
- Real email contact and Behance links.
- Keyboard-accessible navigation, skip links, visible focus, semantic headings.
- Responsive layout, readable body copy and no horizontal clipping.
- Per-page title/description and an SVG favicon.
- Data-driven supporting project content separated from presentation.
- No forms, authentication, CMS, analytics or backend are needed initially.
- Static export compatible with Vercel; no build dependencies required.
- Figma iframe previews inside case studies, loaded on visitor request, with descriptive frame titles, responsive dimensions and an “Open in Figma” fallback. Interactive prototypes are preferred for navigable flows; design-frame links also work where Figma permits embedding. Keep the written narrative outside the iframe so visitors can understand the case study without Figma access.
- Hava's known design-frame link is wired to the embed. Radware's source URL is pending. Embed playback and public access have not been verified. No sharing permissions have been changed.

## Infrastructure
Plain HTML, CSS and JavaScript, served as static files. Shared stylesheet and project data make small iterations straightforward. Radware is server-readable HTML rather than a client-only modal. Vercel configuration sets the project as a static deployment with the project root as output and no build step. When publishing becomes available, deploy this directory through Vercel and verify the public URL from an unauthenticated browser.

## Acceptance criteria
Initial foundation: real content, working navigation, eight project entries, Radware lead page, responsive styling and Vercel configuration. Asset-backed release: locally downloaded authorized Figma visuals, faithful captions, reviewed project stories and no unsupported claims. Shareable release: public Vercel URL, direct case-study loading, verified phone/desktop rendering and no broken image or contact links.

## Iteration plan
1. Foundation: this PRD, editorial structure, static site and content model.
2. Radware: inspect source files, import authorized visuals, expand narrative and verify credits.
3. Remaining projects: prioritize Yotpo, Adidas, Tnuva and Hava, then supporting work.
4. Review: refine copy, personal identity and animation; inspect keyboard, mobile, image performance and accessibility.
5. Publish: Vercel access, public production deployment, direct-route and contact checks. Repeat publishing after agreed improvements.

## Current status and open dependencies
Built foundation does not constitute a completed visual portfolio. Original Figma assets and comprehensive project stories remain pending. Browser access to the shared chat, Figma and Vercel was denied in this session. Vercel publication is blocked, and the exact full previous conversation has not been verified. English and the proposed headline are starting assumptions that can be refined. Sources under `sources/` remain read-only.
