# Slidev Presentation Project

Welcome to your Slidev presentation project! This project is set up to generate clean, modern slide presentations.

## Quick Start

To start the slide show:

- `npm install` — installs dependencies and **Playwright Chromium** (used for PDF export; first run may take a minute)
- `npm run dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

### PDF export

To export a deck to PDF (e.g. dark theme):

```bash
npx slidev export projects/generated_slides/<deck>.md --output projects/generated_slides/<deck>.pdf --dark
```

Playwright Chromium is installed automatically via the `postinstall` script so export works after `npm install`.

## Cursor Rules

This project includes the `.cursor/rules` folder that ensures all generated presentations follow a clean, modern design aesthetic. When using AI assistance to generate slides, these rules will automatically guide the style and structure.

Key guidelines include:
- Clean, professional color palettes
- Consistent typography and spacing
- Focused content (one idea per slide)
- Subtle, professional animations
- Modern layouts and visual hierarchy

## Learn More

Learn more about Slidev at the [documentation](https://sli.dev/).
