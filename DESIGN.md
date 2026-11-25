---
name: Winter Dispatch / Зимняя доставка
description: A bilingual dispatch-terminal postcard studio where signal-red type addresses, stamps and exports the same canvas you preview.
colors:
  ground: "#080d12"
  panel: "#0e151d"
  raised: "#131d27"
  hairline: "#23313d"
  hairline-strong: "#334654"
  signal: "#ff6b6b"
  signal-hover: "#ff8f8f"
  signal-deep: "#c21f2e"
  signal-ink: "#1a0505"
  ink: "#ff6b6b"
  ink-secondary: "#d9e6ea"
  ink-muted: "#a8bfc7"
  ink-disabled: "#9bb2bd"
  signal-wash-05: "rgba(255, 107, 107, 0.05)"
  signal-wash-08: "rgba(255, 107, 107, 0.08)"
  signal-wash-14: "rgba(255, 107, 107, 0.14)"
  signal-wash-25: "rgba(255, 107, 107, 0.25)"
  signal-wash-30: "rgba(255, 107, 107, 0.30)"
  signal-deep-wash-10: "rgba(194, 31, 46, 0.10)"
  card-paper: "#0a1118"
  card-grid: "rgba(126, 180, 196, 0.055)"
  card-rule: "#2b3f4d"
  card-ink: "#ff6b6b"
  card-label: "#d9e6ea"
  card-muted: "#9fb4bd"
  stamp-paper: "#dbe9e6"
  stamp-ink: "#0b1a1c"
  barcode-ink: "#33505c"
typography:
  display:
    fontFamily: "\"Cascadia Mono\", \"Consolas\", \"Segoe UI\", \"Menlo\", monospace"
    fontSize: "56px"
    fontWeight: 700
    lineHeight: 1.39
    letterSpacing: "0em"
  headline:
    fontFamily: "\"Cascadia Mono\", \"Consolas\", \"Segoe UI\", \"Menlo\", monospace"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.14em"
  title:
    fontFamily: "\"Cascadia Mono\", \"Consolas\", \"Segoe UI\", \"Menlo\", monospace"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.12em"
  body:
    fontFamily: "\"Cascadia Mono\", \"Consolas\", \"Segoe UI\", \"Menlo\", monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "\"Cascadia Mono\", \"Consolas\", \"Segoe UI\", \"Menlo\", monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.12em"
  meta:
    fontFamily: "\"Cascadia Mono\", \"Consolas\", \"Segoe UI\", \"Menlo\", monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.12em"
  card-address:
    fontFamily: "\"Cascadia Mono\", \"Consolas\", \"Segoe UI\", \"Menlo\", monospace"
    fontSize: "26px"
    fontWeight: 500
    lineHeight: 1.39
    letterSpacing: "0em"
rounded:
  sm: "2px"
spacing:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "18px"
  xl: "28px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    rounded: "0px"
    padding: "13px 16px"
  button-primary-hover:
    backgroundColor: "{colors.signal-hover}"
    textColor: "{colors.signal-ink}"
    rounded: "0px"
    padding: "13px 16px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "0px"
    padding: "9px 11px"
  input-text:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.signal}"
    rounded: "{rounded.sm}"
    padding: "10px 11px"
  textarea:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.signal}"
    rounded: "{rounded.sm}"
    padding: "10px 11px"
    height: "96px"
  stamp-option:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink-secondary}"
    rounded: "0px"
    padding: "10px 3px 9px"
  stamp-option-selected:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.signal}"
    rounded: "0px"
    padding: "10px 3px 9px"
  panel:
    backgroundColor: "{colors.panel}"
    rounded: "0px"
    padding: "18px"
  lang-switch:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink-secondary}"
    rounded: "0px"
    padding: "5px 9px"
  scene-tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "0px"
    padding: "5px 9px"
  footer-greeting:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "0px"
    padding: "16px 28px 24px"
  skip-link:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    rounded: "0px"
    padding: "8px 14px"
  postcard-artifact:
    backgroundColor: "{colors.card-paper}"
    rounded: "0px"
    width: "840px"
---

# Design System: Winter Dispatch / Зимняя доставка

## Overview

**Creative North Star: "The Dispatch Terminal"**

Winter Dispatch is an operator desk for sending a winter greeting, not a scrapbook. The studio is a near-black blue-charcoal instrument panel: dense monospaced type at small sizes, hairline rules, squared corners, and one red voice. Signal red is the primary font, the accent, the selection and focus ink and the single download action; pale ice ink carries the secondary hierarchy. The header holds the vertically centred brand and an EN/RU switch; the workbench holds a card and its controls. Status messages are delivered to screen readers only, so the visible chrome stays quiet. The footer carries one centred rotating sample greeting with an authored red snowflake between its two halves instead of boilerplate notices.

The card is a separate material. It keeps its own darker paper, a 30px survey grid, a fine printed border with red corner registration brackets, and one of eight authored thematic winter compositions that rotate every seven seconds — observatory, snowstorm, city, forest, aurora, railway, celebration and lanterns. Eight authored stamp designs and an address block sit in the same monospace voice. The greeting is the one large display voice, printed in signal red; the card prints no GREETING caption of its own. The EN/RU switch translates the studio and the card's masthead, printed labels and stamp text together, and the choice survives a reload. Because the preview is drawn directly into the canvas that downloads, warmth lives in the artifact while the studio stays legible and quiet.

**Key Characteristics:**

- Near-black blue-charcoal ground, signal-red primary font and accent, ice-white secondary ink, deep-red stamp artwork, no second accent hue.
- One mono family in both English and Russian, with Segoe UI in the stack for Cyrillic; hierarchy comes from size, weight and tracking, and the chosen language survives a reload.
- Hairline rules, square corners, a 2px radius only on text fields, and a 6/8/12/18/28px spacing rhythm.
- Two-panel workbench with the 360px rail on the right, eight 60×72px stamp previews in a 4×2 grid, and a live 2× canvas preview that is exactly the PNG.
- The printed card has its own paper, grid, stamp block and red registration marks; one of eight themed scenes rotates every seven seconds and the stage bar names it. Snowstorm layers wind and snow depths, forest layers mist and pine planes, and railway layers an arriving train and station.
- The footer holds one centred 12px greeting split by an authored 12×12 red SVG snowflake; it follows the active scene and language rather than carrying notices.

## Colors

The palette is a cold charcoal stack with one loud signal red carrying the primary voice and every operative state. Ice-white is the quiet secondary ink, and deep red belongs to the printed stamp and scene artwork. The card uses its own near-black paper; its accent is the same signal red, so the artifact and the studio share one hue without sharing a surface.

### Primary

- **Signal Red** (#ff6b6b): The primary font on page, panel, raised surfaces and card paper; also selection, focus outlines, caret, the LIVE dot, registration marks, moon ticks, lit windows, garland bulbs, lanterns, the footer snowflake, the card's short underline and the full download button fill. The CSS `--ink` role deliberately carries the same value as `--signal`.
- **Signal Hover** (#ff8f8f): Hover fill for the download button, hover text for the ghost button and the language-switch buttons.
- **Deep Stamp Red** (#c21f2e): The red inside the printed stamp artwork, the translucent stamp washes, the landscape ridge and the hanging lantern bodies. This is the only deep red in the system.
- **Signal Ink** (#1a0505): Dark lettering on signal red — skip link, selection, active language segment and download button.
- **Signal Alpha Ramp:** `rgba(255, 107, 107, 0.05)` for the page radial wash and card-frame ring; `rgba(255, 107, 107, 0.08)` for the ghost-button active wash; `rgba(255, 107, 107, 0.14)` for the LIVE-dot ring; `rgba(255, 107, 107, 0.25)` for the selected-stamp inset ring; `rgba(255, 107, 107, 0.30)` as the retained upper step of that UI ramp; `rgba(194, 31, 46, 0.10)` for the deep-red wash in stamp art and scene ridges. The themed scenes draw their washes, stars and lit details with further opacities of the same two reds, not new hues.

### Secondary

- **Ice Ink** (#d9e6ea): Secondary studio text, the ghost button's resting label, the card masthead, card labels and the TO/FROM address values. It is the counterweight to the red primary voice.

### Neutral

- **Ground** (#080d12): Page background; the header uses the same colour at 0.92 alpha.
- **Panel** (#0e151d): Controls rail ground.
- **Raised** (#131d27): Stamp tiles, inputs, textarea and the language switch ground.
- **Hairline** (#23313d): Panel borders, dividers, stage bar rule and scene-tag border.
- **Hairline Strong** (#334654): Input borders, ghost button, card frame and language-switch border.
- **Muted Ink** (#a8bfc7): Field labels, hints, counters, captions, brand sub-label, scene tag and the centred footer greeting.
- **Disabled Ink** (#9bb2bd): Placeholder text in inputs and textarea.
- **Card Paper** (#0a1118): The card canvas ground, also used for stamp perforation notches.
- **Card Grid** (rgba(126, 180, 196, 0.055)): The 30px grid stroked across the card.
- **Card Rule** (#2b3f4d): The card's inset border and horizontal rules.
- **Card Muted** (#9fb4bd): Card issue line, empty-address dashes and the empty-greeting placeholder.
- **Stamp Paper** (#dbe9e6): The pale printed stamp block and the moon/candle cut-outs.
- **Stamp Ink** (#0b1a1c): Stamp outlines, printed WINTER/ЗИМА and POSTAGE PAID/ПОЧТОВЫЙ СБОР lettering, and the dark halves of the artwork.
- **Barcode Ink** (#33505c): The 26 short vertical bars beside the address block.

**The State Ink Rule.** Signal red carries the primary voice, selection, focus, caret, the LIVE marker and the single download action; deep red belongs to printed stamp and scene accents. Ice ink is a hierarchy tone, never an accent.

**The Readable Label Rule.** Every label pair clears 4.5:1; the shipped verifier reports 17/17 pairs with a 4.76:1 floor (deep stamp red on pale paper). Signal red measures 6.14–7.03:1 on the dark surfaces. Atmosphere never buys a contrast exception.

## Typography

**Display Font:** Cascadia Mono, with Consolas / Segoe UI / Menlo / monospace fallbacks (the same stack in CSS and on the canvas).
**Body Font:** The same stack.
**Label/Mono Font:** The same family — there is no second typeface; Segoe UI in the stack covers Cyrillic.

**Character:** A terse bilingual terminal voice: uppercase, tracked and small in the studio; large, tracked and red on the card. Weight and size do all the hierarchy work in both languages.

### Hierarchy

- **Display** (700, 56px at 1200×750 card units, 78px line step): The greeting, centre-left on the card; 112px in the 2400×1500 PNG. English and Russian samples share the same index and wrap to at most five lines with an ellipsis.
- **Headline** (700, 18px, 0.14em tracking): `PREVIEW / ПРЕДПРОСМОТР` and the 2400 × 1500 PNG dimension.
- **Title** (700, 15px, 0.12em tracking): Numbered panel heads `01 / STAMP`, `02 / MESSAGE`, `03 / ADDRESS` and their Russian counterparts.
- **Body** (400, 13px, 1.5 line-height): Studio copy, buttons, inputs and textarea; the textarea steps to 1.55.
- **Label** (400, 11px, 0.12em tracking, uppercase): Field names, language switch, header meta and the stage-bar scene tag.
- **Meta** (400, 12px, 0.1–0.14em tracking, uppercase): Hints, counters, stamp names and the centred rotating footer greeting. Twelve pixels is the floor for functional text here.
- **Card Address** (500, 26px, 78px below the TO/КОМУ and FROM/ОТ labels): Recipient and sender values on the printed card, set in Ice Ink.

**The One Voice Rule.** One monospace family carries display, body, labels and print in both languages; contrast comes from scale, weight and tracking, never from introducing a second typeface.

## Layout

The desktop workbench is a two-column grid: `minmax(0, 1fr) 360px`, `gap: 28px`, `max-width: 1460px`, padded `30px 28px 26px`. The stage occupies the fluid first column and the controls rail the fixed right column, as the brief specifies. A 62px topbar centres the 22px brand mark with the wordmark and subtitle on one visual axis and carries the EN/RU switch (18px gap between header meta items); the stage bar pairs the preview headline and dimension with a hairline-bordered `SCENE 01/08` / `ФОН 01/08` tag beside the LIVE dot; a hairline-ruled footer centres one 12px greeting line whose two halves are split by a 12×12 red SVG snowflake; the line follows the active scene and language. Status feedback lives in an offscreen `role="status"` live region, not in visible chrome. The preview frame is capped at 840px and holds an 8:5 canvas that scales with column width. At 1440×900 the card, all eight stamps and the download action are visible together in both languages.

The rail stacks four blocks — stamp chooser, message, address, action — separated by 1px rules. The stamp chooser is a 4×2 grid with an 8px gap and 60×72px thumbnails; fields sit 12px apart; panel padding is 18px. The language switch is a two-segment square control in the header: EN and RU, each `5px 9px`, with the active segment filled signal red.

At `max-width: 980px` the grid collapses to one column, the stage is ordered first and the controls second, with a 22px gap and 18px horizontal padding. At `max-width: 560px` the topbar drops to 56px, the brand sub-label, season marker, stage dimension and scene tag hide, the header meta gap drops to 10px, panel padding to 14px, the stamp gap to 6px and thumbnails to 52×63px. The card still leads and controls follow.

## Elevation & Depth

Depth is ambient rather than structural: wide, low-opacity diffuse shadows under the card and controls rail, a shallow one under the primary button, and a faint signal-red hairline ring around the card frame. The LIVE dot uses a 14%-opacity red ring and selected stamp tiles an inset 25%-opacity red ring. Separation comes from the surface colours, the 1px rules and these soft shadows.

### Shadow Vocabulary

- **Card frame** (`box-shadow: 10px 14px 34px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 107, 107, 0.05)`): The deepest lift, under the previewed postcard.
- **Controls rail** (`box-shadow: 8px 10px 28px rgba(0, 0, 0, 0.38)`): A softer lift under the whole composer stack.
- **Primary button** (`box-shadow: 0 3px 12px rgba(0, 0, 0, 0.4)`): A shallow lift on the single action.
- **LIVE dot / selected stamp** (`box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.14)` and `inset 0 0 0 1px rgba(255, 107, 107, 0.25)`): State rings, not elevation.

**The Soft Lift Rule.** Surfaces separate by wide, faint shadow and hairline rule; the card sits deepest, the rail next, the button shallowest.

## Shapes

Everything structural is square: header, stage, rail, panels, tiles, language switch, scene tag, fields at 2px (`--radius`), buttons at 0px. The only circle in the interface is the 6px LIVE dot; the card's geometry changes with the scene — the observatory draws two ice rings, four craters and a red ring with twelve radial ticks under two to four aurora arcs, while other scenes use skylines, rails, garlands and lanterns. The brand mark is a 22×22 red-outlined square holding three narrow red cells at varied opacity; `align-items: center`, a 10px gap and `line-height: 1` on both brand text lines keep mark, wordmark and subtitle on one centre line. The card's four corners carry 20px red registration brackets drawn with 1.5px strokes, and its address block ends in a small red diamond. Each of the eight stamps is a 190×228 pale rectangle with a scalloped perforation edge, a 1.5px dark inset frame and geometric artwork: pine, snowflake, mug, moon, eight-point star, candle, bell and mitten, accented in deep red.

**The Square Rule.** Panels, tiles, buttons, the language switch and the scene tag are square; the 2px radius belongs only to text fields and textarea, and roundness beyond the 6px LIVE dot belongs only to the printed card artwork.

## Components

### Buttons

- **Shape:** Square, 0px radius; the download button is a full-width signal-red block, the sample button a full-width outlined ghost.
- **Primary:** Signal-red fill, signal-ink lettering, `13px 16px` padding, bold 12px at 0.14em tracking, with a 16px inline SVG download arrow. Hover moves to Signal Hover; active shifts 1px down.
- **Secondary / Ghost:** Transparent ground, Hairline Strong border, Ice Ink lettering, `9px 11px` padding, 11px at 0.1em tracking. Hover takes a Signal Hover border and text; active applies the 8%-opacity red wash.
- **Focus:** Global 2px signal-red outline at 3px offset; stamp tiles use a 2px outline at 2px offset.

### Brand Row

A 22×22 red-outlined mark with three narrow red cells at varied opacity, separated from the wordmark by a 10px gap. The brand name and subtitle both set `line-height: 1`; the row uses `align-items: center`, so mark, wordmark and 11px Muted Ink subtitle share one visual centre.

### Language Switch

A two-segment square control in the header, on Raised with a Hairline Strong border and a divider between segments. Each button is 11px at 0.12em tracking; the active EN or RU segment is signal red with signal-ink lettering, the inactive one Ice Ink, and hover text is Signal Hover. Switching rewrites every `data-i18n` label, placeholder and ARIA label, updates the document language and title, redraws the printed card, and carries a matching sample greeting across by index. The choice is stored under `winter-dispatch-lang` and restored on load, translating the default greeting again; storage failures are harmless.

### Skip Link

Offscreen until focused, then a signal-red block with signal-ink bold lettering at `left: 12px; top: 12px`, `8px 14px` padding. It is the documented red surface behind the primary accent and uses no separate colour.

### Stamp Option

A compact radio tile in the 4×2 grid: 60×72px stamp thumbnail (52×63px compact) over a 12px label at 0.08em tracking, on Raised with a Hairline border and `10px 3px 9px` padding. Unselected lettering is Ice Ink; the checked tile takes a signal-red border and lettering plus the 25%-opacity inset red ring, with a 120ms ease transition on border, background and colour.

### Inputs / Fields

Raised ground, 1px Hairline Strong border, 2px radius, 10px 11px padding, signal-red text and caret. Field labels are 11px Muted Ink at 0.14em tracking; placeholders use Disabled Ink. Hover shifts the border to Muted Ink; focus replaces it with signal red and adds a 1px signal-red ring with no default outline. The textarea shares the treatment, starts at 96px, steps at 1.55 line-height, caps at 120 characters with a live counter and resizes vertically.

### Scene Tag

A tracked 11px Muted Ink tag in the stage bar, `5px 9px` inside a 1px Hairline border, reads `SCENE 01/08` or `ФОН 01/08` beside the LIVE dot. It follows the active language and scene index, is hidden below 560px, and is a visible label — unlike the screen-reader-only status live region, which is not a component of this system.

### Footer Greeting

A hairline-ruled band with `16px 28px 24px` padding centres one 12px Muted Ink line and carries no leading marker. The sample's two lines are separated by an authored 12×12 SVG snowflake built with `createElementNS`: three crossing arms and six pairs of small branches, `stroke: currentColor` in signal red, `aria-hidden="true"` and `10px` horizontal margins. The line is filled from `SAMPLES[lang][sceneIndex % 6]` by splitting on the newline, so it changes as scenes rotate and with language. The whole greeting is `aria-hidden="true"` because the same samples are already available in the message field.

### Cards / Containers

- **Control Panel:** Panel ground inside a 1px Hairline border, 18px padding, numbered head with a right-aligned hint or counter, 14px head margin and a 1px rule between panels.
- **Card Frame:** Card Paper behind the canvas, 1px Hairline Strong border, `max-width: 840px`, 8:5 aspect, overflow hidden, with the faint red hairline ring. A 2px signal-red registration sweep crosses the frame in 520ms on stamp changes, sample loads and language changes, and is suppressed under reduced motion.
- **Postcard Artifact (signature):** A 1200×750 logical canvas drawn at 2× into 2400×1500 pixel dimensions. A 30px grid, 26.5px inset rule, red corner brackets and tracked masthead and issue line frame one of eight authored thematic compositions, each with its own seed: observatory (concentric moon, radar arcs, ridges, pines, cabins), snowstorm (small moon, far dot snow, five curved wind gusts, mid diagonal streaks, brighter near streaks, distant hills, two drifts with lit cabins and bare trees with snow-flecked branch tips), city (skyline with deterministic lit windows, catenary wires, sparse snow), forest (moon halo rings, three mist bands, far pale pines, a mid plane of darker pines, a lit cabin, two ground ridges and large near pines), aurora (72 stars, four translucent curtains, mountains), railway (distant hills, moon halo, perspective rails with more sleepers, a snow bank, an approaching train with lit windows and headlight, a station with lit windows, a platform with a red edge and canopy posts, telegraph wires between poles and two signal posts), celebration (15-bulb garland above the greeting, two firework bursts, rooftops with lit windows) and lanterns (sagging wire, five hanging red lanterns below the greeting, rooftops). The red greeting sits centre-left with no printed GREETING caption — that label belongs to the studio form only. TO/КОМУ and FROM/ОТ values sit at x=64 and x=520, a barcode at x=900, a red 64×2 underline and one of eight 190×228 stamps at (930, 76). The stamp prints WINTER/ЗИМА and POSTAGE PAID/ПОЧТОВЫЙ СБОР. Scenes rotate every seven seconds; editing a field clears and restarts that timer so the card never changes mid-typing, and reduced-motion still rotates the scene but skips the 460ms refresh fade. The exported PNG is this canvas, with no re-render.

**The Localized Artifact Rule.** Switching language redraws the printed card from the same string table as the studio — masthead, issue line, TO/КОМУ and FROM/ОТ labels, message placeholder and stamp text all follow the active language. The GREETING / ПРИВЕТСТВИЕ label remains a studio form label only; the card prints no such caption, in either language.

## Do's and Don'ts

### Do:

- **Do** keep the preview and the PNG the same surface: draw once at 2× into the 2400×1500 canvas and export that canvas with `toBlob` / `toDataURL`.
- **Do** keep every label at 4.5:1 or better; the shipped floor is 4.76:1 and signal red is 6.14–7.03:1 on the dark surfaces.
- **Do** use the documented signal alpha ramp (0.05, 0.08, 0.14, 0.25, 0.30) and the deep-red 0.10 wash rather than introducing a new red.
- **Do** keep English and Russian at parity: labels, placeholders, ARIA text, card inscriptions and six index-aligned samples move together on a language switch, and the choice persists across reloads.
- **Do** keep the scene timer at seven seconds and restart it on every field edit; reduced motion still rotates the scene but skips the fade.
- **Do** use 1px structural rules, 0px corners on panels, tiles, buttons and the scene tag, the 2px `--radius` only on text fields, and the 4×2 stamp grid with 60×72px thumbnails.

### Don't:

- **Don't** screenshot the page or rebuild the card in a second renderer when downloading; the canvas is the artifact.
- **Don't** introduce a second typeface or leave printed card labels in the other language after a switch.
- **Don't** let a label drop below 4.5:1 to make the interface quieter.
- **Don't** round the panels, tiles, buttons, language switch or scene tag, or add a second accent hue; the system has one red accent only.
- **Don't** reintroduce boilerplate chrome or a text glyph in the footer; keep the single centred greeting with its authored SVG snowflake separator.
