# CLAUDE.md — Safety Traffic Holland B.V. v2

## Project Info
- Framework: Next.js + TypeScript + Tailwind + shadcn
- Dev server: `npm run dev` (runs on http://localhost:3001)

## Brand

### Colors
- Primary (blue): `#1B6FBE`
- Primary dark: `#155a9c`
- Accent (yellow): `#F5A623`
- Dark: `#1A1A2E`
- Background: `#F4F6F9`
- White: `#ffffff`
- Text muted: `#6b7280`

### Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tight tracking (-0.03em)
- Body: font-normal, line-height 1.7

### Company Info
- Name: Safety Traffic Holland B.V.
- Phone: +31 6 41 03 93 93
- WhatsApp: +31 6 41 03 93 93
- Email: info@safetytrafficholland.nl
- Logo: `public/logo.jpeg`

### Pages
Home, Over ons, Diensten, Vacatures, Contact

### Style
Modern, clean, zakelijk/corporate. Mobile-first.
No team photos. Always mention VCA certification.

## Always Do First
- Read this CLAUDE.md before every task
- Check public/ folder for logo before using placeholders
- Use brand colors only — never default Tailwind palette
- Run `npm run dev` before taking screenshots

## Screenshot Workflow
- Dev server runs on: http://localhost:3001
- Puppeteer path: C:/Users/zayde/AppData/Local/Temp/puppeteer-test/
- Chrome cache: C:/Users/zayde/.cache/puppeteer/
- Always screenshot from localhost — never file:///
- Take at least 2 screenshot rounds and compare before continuing

## Anti-Generic Guardrails
- Colors: Brand palette only — never Tailwind indigo/blue defaults
- Shadows: Layered, color-tinted with low opacity
- Typography: Tight tracking on headings, generous line-height on body
- Gradients: Multiple radial gradients with subtle grain/texture
- Animations: Only animate transform and opacity — never transition-all
- Interactive states: Every button needs hover, focus-visible and active states
- Spacing: Minimum 80px section padding

## Hard Rules
- NEVER use transition-all
- NEVER use default Tailwind blue/indigo as primary
- NEVER use Lorem Ipsum
- Always mobile-first
- Always semantic HTML (nav, main, section, footer)
- Always link pages correctly to each other