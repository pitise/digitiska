---
name: Digitiska public site
description: A dark product shop where the product proves itself. Neutral near-black ground, one green accent, wide-weight Archivo headings, ruled rows instead of icon cards.
colors:
  ground: "#0c0d0f"
  raised: "#131518"
  surface: "#17191d"
  surface-2: "#1d2025"
  line: "rgba(236, 237, 238, .09)"
  line-2: "rgba(236, 237, 238, .16)"
  text: "#ecedee"
  muted: "#a3a8af"
  mint: "#6ee7a0"
  green: "#22804f"
  green-deep: "#1b6a41"
  amber: "#fbbf24"
  paper: "#f3f4f1"
  paper-ink: "#1c2230"
  paper-rule: "#d6dbd5"
typography:
  display:
    fontFamily: "\"Archivo\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.6rem + 5vw, 5.2rem)"
    fontWeight: 850
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 90"
  headline:
    fontFamily: "\"Archivo\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.6vw, 3.2rem)"
    fontWeight: 850
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 90"
  title:
    fontFamily: "\"Archivo\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 1.2rem + 1.6vw, 2.2rem)"
    fontWeight: 850
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 90"
  row-title:
    fontFamily: "\"Archivo\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    fontVariation: "\"wdth\" 90"
  lede:
    fontFamily: "\"Atkinson Hyperlegible Next\", ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "1.18rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "\"Atkinson Hyperlegible Next\", ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "\"Atkinson Hyperlegible Next\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.4
  data:
    fontFamily: "\"Azeret Mono\", ui-monospace, monospace"
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  control: "10px"
  button: "12px"
  card: "14px"
  panel: "18px"
  dialog: "20px"
  pill: "999px"
spacing:
  gutter: "18px"
  gutter-wide: "32px"
  section: "72px"
  section-wide: "96px"
  panel: "20px"
  row: "16px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.green-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0 24px"
    height: "52px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "4px 11px"
  chip-live:
    backgroundColor: "transparent"
    textColor: "{colors.mint}"
    rounded: "{rounded.pill}"
    padding: "4px 11px"
  chip-wip:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "4px 11px"
  nav-pills:
    backgroundColor: "{colors.raised}"
    rounded: "{rounded.pill}"
    padding: "4px"
  nav-pill:
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  nav-pill-active:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text}"
  filter-pill:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  filter-pill-pressed:
    backgroundColor: "{colors.text}"
    textColor: "{colors.ground}"
  field:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.text}"
    rounded: "{rounded.button}"
    padding: "10px 14px"
    height: "48px"
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel}"
  dialog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.dialog}"
    padding: "24px"
  paper-document:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.button}"
    padding: "14px 16px"
---

# Design System: Digitiska public site

<!-- Documented 29.Oct.2026 from the finished mockup in .impeccable/mocks/site/ (index, studio, about, contact; shared lab.css and lab.js) and its review screenshots. This is a separate world from the product-export system in the root DESIGN.md; neither governs the other. -->

## Overview

**Creative North Star: "The Lit Workbench"**

A dark, quiet shop counter with one working machine on it. The ground is a neutral near-black with no hue cast, the surfaces are solid slabs a few steps lighter, and every list is a hairline-ruled row. Against that restraint the product does the talking: the first screen runs the live kit from quote to invoice inside a solid panel, and a light paper document unrolls out of the dark when the demo finishes. Green is the only colour with a job, and it means "live, done, go".

Headings are Archivo at its heaviest and slightly narrowed, so short plain sentences land like signage. Reading text is Atkinson Hyperlegible Next at a generous size; Azeret Mono appears only where something is data (status words, step numbers, prices in estimates). The world keeps the owner's benchmark structure (sticky pill nav, two-column hero with a product panel, catalogue with filters, services with an estimator, final call, four-column footer) and refuses that benchmark's AI-tool costume: no purple gradients, glass, glow, gradient text, eyebrow labels, hero stat strips or icon-card grids.

This is a mockup with the proof rule relaxed by the owner for this site only. Unproven facts (prices, working titles, counts) are marked as placeholders and must be replaced before launch. Before launch also: self-host Archivo, Atkinson Hyperlegible Next and Azeret Mono (the mock loads them from Google Fonts), and write the Privacy, Terms and Service terms pages (their footer links are marked as to-do).

**Key Characteristics:**
- Neutral near-black ground with three solid surface steps and two white hairline weights.
- One accent family: mint for state and emphasis, deep green for filled buttons.
- Archivo 850 at 90 percent width for every heading; Atkinson for reading; mono only for data.
- Ruled rows for lists; panels only for working things (demo, estimator, Studio view, mailbox, dialogs).
- Amber means unfinished or stopped, never decoration.

## Colors

A neutral, almost colourless dark palette with a single green voice and an amber warning channel.

### Primary
- **Live Mint** (`mint`): the accent colour on dark. The second line of the hero headline, live status chips and their dot, check ticks, done states in the demo, step numbers in ruled lists, the active-nav underline, text links like the mailbox address, and the focus ring.
- **Workshop Green** (`green`): filled primary buttons, the logo tile, checkbox accent. White text on it.
- **Workshop Green Deep** (`green-deep`): hover state of filled buttons only.

### Tertiary
- **Placeholder Amber** (`amber`): the † mark and dashed underline on unproven placeholder values, the dashed to-do block and to-do legal links, the "Stopped" state and alert in the Studio view. Its tinted alert fill is amber at 6 percent with a 45 percent amber border.

### Neutral
- **Workbench Black** (`ground`): page background, field fill, demo console strip.
- **Raised** (`raised`): footer band, nav pill track, menu button.
- **Surface** (`surface`): panels, kit rows, estimator, dialogs.
- **Surface Two** (`surface-2`): active nav pill, active demo node, icon tiles, in-progress chip, toast.
- **Hairline** (`line`, 9 percent white): every row rule, section top border and panel border.
- **Hairline Strong** (`line-2`, 16 percent white): button outlines, chip outlines, fields, the top rule of a ruled list, dialog border.
- **Text** (`text`): headings and primary copy.
- **Muted** (`muted`): ledes, descriptions, meta, inactive nav and filters.
- **Paper** (`paper`, with `paper-ink` and `paper-rule`): only the unrolled sample document in the demo. It is the kit's output, shown in the export world's light paper, so it reads as a real file coming out of the machine.

### Named Rules
**The One Green Rule.** Green is the only accent. Mint carries state and emphasis; `green` carries filled buttons. Any second hue on a surface (other than amber's warning channel) is a defect.

**The Amber Means Unfinished Rule.** Amber marks a placeholder, a to-do or a stopped state. It is never used for emphasis or decoration, so every amber mark is something to resolve.

**The Mint Status Rule.** A green-tinted border (mint at 35 to 40 percent) marks the live or selected item: the live kit row, a done demo node, a checked estimator option. Everything else keeps the plain hairline.

## Typography

**Display Font:** Archivo (variable width, used at 90 percent), with ui-sans-serif and system-ui fallback
**Body Font:** Atkinson Hyperlegible Next, with ui-sans-serif, system-ui, -apple-system and Segoe UI fallback
**Label/Mono Font:** Azeret Mono, with ui-monospace fallback

**Character:** Heavy, slightly condensed grotesque headings that read as plain signage over a deliberately legible reading face. The mono is a data voice, not a style.

### Hierarchy
- **Display** (850, `clamp(2.6rem, 1.6rem + 5vw, 5.2rem)`, 1.05): the Home hero headline only, split in two lines with the second in mint. Inner page heroes use the same voice at `clamp(2.4rem, 1.6rem + 4vw, 4.4rem)` capped at 16ch.
- **Headline** (850, `clamp(2rem, 1.4rem + 2.6vw, 3.2rem)`, 1.05): section headings and the Studio flagship heading. The final call grows to `clamp(2rem, 1.4rem + 3vw, 3.6rem)` at 14ch.
- **Title** (850, `clamp(1.6rem, 1.2rem + 1.6vw, 2.2rem)`, 1.05): kit row names, the mailbox heading, sub-section heads. Dialog titles sit at 1.8rem.
- **Row title** (Archivo 700, about 1.15 to 1.35rem): the bold first column of ruled rows, service names, estimator and footer column heads, prices in Archivo 800.
- **Lede** (400, 1.18rem, 1.6, muted, 34 to 36em): the paragraph under a hero.
- **Body** (400, 1.0625rem, 1.6): reading text; descriptions run muted at 0.95 to 0.98rem, max 36 to 40em.
- **Label** (700, 0.95rem): buttons, nav, filters, chips (chips at 0.85rem).
- **Data** (Azeret Mono 700, 0.82 to 0.9rem): demo status words, step numbers (decimal-leading-zero), Studio-view states, estimator prices.

### Named Rules
**The Ninety-Width Rule.** Every h1, h2 and h3 is Archivo at 90 percent width with -0.02em tracking, 0.08em word spacing, 1.05 line height and balanced wrapping. Headings are weight 850; row-level Archivo labels drop to 700 or 800.

**The Mono Is Data Rule.** Azeret Mono appears only on values a machine would print: statuses, step numbers, prices in a calculator. Never on headings, buttons or prose; the demo's prompt strip deliberately stays in the body face.

## Layout

A single 1200px centred column with an 18px gutter that widens to 32px at 1000px. Mobile-first, one column until 640px; at 1000px heroes and the Studio flagship split 7:5 (or 6:5) with the product panel on the right and 56px column gaps, the services block splits 1:1, and the footer runs 4:2:2:4. Single-column tracks are always `minmax(0, 1fr)` so content can shrink.

Sections are separated by a 1px hairline and 72px of vertical padding (96px at 1000px). Home hero padding is 40/72px rising to 80/110px; inner page heroes 48/56px rising to 88/72px. Section heads cap at 40em with 30px below. Rows inside lists use 14 to 18px of vertical padding. The header is a 68px sticky bar; anchored sections reserve an 80px scroll margin so headings clear it.

Ruled lists reflow rather than stack into cards: two columns (name, then description at 1:2) from 640px; the Studio step table gains a column header row and four columns (56px number, step, what happens, what comes out) at 1000px.

### Named Rules
**The Ruled Rows Rule.** Lists of reasons, steps, services, formats and works are hairline-ruled rows under a stronger top rule, not grids of icon cards.

**The 44px Floor Rule.** Every interactive target is at least 44px tall; primary buttons are 52px, fields 48px, drawer links 52px.

## Elevation & Depth

Flat and tonal. Depth comes from stepping the surface from `ground` to `raised` to `surface` to `surface-2` and outlining with hairlines. There is no blur and no glass; the sticky header is the ground colour at 96 percent opacity with a bottom hairline. Shadows are reserved for the few objects that are meant to feel like a working thing set on the bench.

### Shadow Vocabulary
- **Bench panel** (`box-shadow: 0 24px 48px -28px rgba(0, 0, 0, .9)`): the hero demo panel and the Studio-view illustration panel only.
- **Dialog lift** (`box-shadow: 0 40px 80px -30px #000`): modal dialogs, over a 78 percent black backdrop.
- **Active underline** (`box-shadow: inset 0 -2px 0 {mint}`): active nav pill and pressed audience filter. A state mark, not elevation.

### Named Rules
**The Solid Panel Rule.** Panels are solid fills with a 1px hairline. No backdrop blur, no translucency beyond the header, no glow.

## Shapes

Soft but firm corners on a fixed ladder: 10px for small controls and icon tiles, 12px for buttons, fields, nodes, alerts and the paper document, 14px for cards and dashed empty states, 16 to 18px for panels, 20px for dialogs, full pill for nav, chips and category filters. Borders are always 1px. Dashed lines are a meaning, not a style: dashed amber for placeholders and to-dos, dashed hairline for an empty filter result.

## Components

### Buttons
Solid and plain, with a small arrow that nudges forward.
- **Shape:** gently rounded (12px), 52px tall, 24px side padding, weight 700.
- **Primary:** Workshop Green fill with white text; hover to Green Deep. Trailing arrow icon moves 3px right on hover; press scales to 0.98.
- **Ghost:** transparent with a 16 percent white outline and text colour; hover turns the outline mint.
- **Compact:** inside panels and the footer, 44 to 48px tall with 14 to 18px padding and a 10px radius.
- **Text action:** underlined bold link-buttons (mint in the works list, text colour in kit rows), still 44px tall.
- **Focus:** a 3px mint outline at 3px offset, globally.

### Chips
- **Style:** full pill, 0.85rem bold, 1px outline. Default muted on a strong hairline.
- **State:** Live is mint text, mint at 40 percent outline and a 7px mint dot; In progress is text on Surface Two; Works is muted on a plain hairline. Chips state facts about a kit; they are never section labels.

### Cards / Containers
- **Kit row:** a full-width Surface slab (18px radius, 22px padding, 30px at desktop) with the name, chips and meta, a tick list, and a 260px buy column on the right at desktop. The live kit carries the mint status border; later rows keep the hairline.
- **Panel:** Surface, 18px radius, 20px padding, hairline border; used for the demo, estimator, Studio view and mailbox (36px padding at desktop).
- **Shadow Strategy:** see Elevation; only bench panels and dialogs cast shadows.
- **Empty state:** 24px padding, dashed strong hairline, muted text.

### Inputs / Fields
- **Style:** Workbench Black fill, 1px strong hairline, 12px radius, 48px tall (textarea 110px), labels above in muted 0.92rem.
- **Focus:** the global mint focus ring. Caret is mint.
- **Option rows:** 56px estimator rows with a 22px checkbox in green; a checked row takes the mint status border. Pace toggles are paired 44px buttons that invert to text-on-ground when pressed.

### Navigation
- **Desktop (1000px and up):** a pill track on Raised with a hairline, 4px inset; links muted 0.95rem bold, hover to text on Surface Two; the current page shows Surface Two with a 2px mint inset underline. "Send a message" is a filled primary button at the right. On the Contact page it jumps to the inline form instead of opening the dialog.
- **Mobile:** a Menu button (Raised, strong hairline, 12px radius) opens a drawer of 52px Archivo rows at 1.3rem with hairline separators and a full-width primary button.
- **Footer:** Raised band, four columns, muted 44px links, an email join field, and a legal line where unwritten pages carry the dashed amber to-do underline.

### Filters
Category filters are pill buttons that invert to text-on-ground when pressed; audience filters are squarer (10px) and mark the pressed state with Surface Two and the mint underline. Both scroll sideways on narrow screens without a visible scrollbar.

### Quote-to-invoice demo (signature)
A bench panel with a header (title, kit name, Live chip), three step nodes (36px icon tile, name, detail, mono status), a console strip with a compact "Run the demo" button, and a sample-figures note. Running it lights nodes in turn (active node on Surface Two; done node mint-bordered with a mint icon and status) and unrolls a light paper invoice with tabular figures. Unroll is 0.5s with the house ease; all motion stops under reduced motion.

### Studio view (signature)
An illustration panel, labelled as such with an outline chip, showing three steps of Studio (03 to 05) as mono-numbered ruled rows: done in mint, stopped in amber, waiting in muted, followed by an amber alert explaining why the export stopped and a caption saying it is an illustration.

### Placeholder mark
Any value not yet proven gets a 1px dashed amber underline and a trailing amber †. Larger unfinished blocks use a dashed amber box. These are production debt, not ornament.

### Dialog and toast
Dialogs are Surface with a strong hairline, 20px radius, 24px padding, max 680px, a 44px round close button and a 12px rise-in. Toasts are Surface Two pills of 12px radius sliding up from the bottom centre.

## Do's and Don'ts

### Do:
- **Do** keep the ground neutral (`#0c0d0f`) and step depth through `raised`, `surface` and `surface-2` with 9 and 16 percent white hairlines.
- **Do** use mint for state, ticks, step numbers, the focus ring and one emphasised headline line; use `green` for filled buttons with white text.
- **Do** set every heading in Archivo 850 at 90 percent width, -0.02em tracking, 1.05 line height.
- **Do** write lists as hairline-ruled rows, and reserve solid panels for things that work (demo, estimator, Studio view, mailbox, dialogs).
- **Do** mark every unproven value with the dashed amber underline and †, and clear them all before launch.
- **Do** keep every target at least 44px tall and keep the 3px mint focus ring.
- **Do** honour reduced motion: no animation or transition when it is requested.

### Don't:
- **Don't** use purple gradients, glass, backdrop blur, glow or gradient text.
- **Don't** put eyebrow or kicker labels above headings, or a stat strip under the hero.
- **Don't** build icon-card grids; icons appear only as ticks, demo step tiles and inline controls.
- **Don't** introduce a second accent hue; amber is a warning channel, not decoration.
- **Don't** use Azeret Mono outside data values.
- **Don't** cast shadows on anything except bench panels and dialogs.
