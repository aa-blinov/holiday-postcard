# AGENTS.md — agent context for `holiday-postcard`

A static, bilingual postcard studio whose preview canvas is also the PNG export.

## Run / build / test

```bash
python3 -m http.server 8765        # serve at http://127.0.0.1:8765/index.html
node --check app.js                # JavaScript syntax
node tools/verify-contrast.mjs     # label contrast, exit 1 below 4.5:1
```

There is no install, build or bundler step. The house-style checker is not vendored; CI runs it through the pinned action in `.github/workflows/house-style.yml`.

## Where things live

| Path | What it is |
| --- | --- |
| `index.html` | Form controls, language switch, stage and canvas element. |
| `styles.css` | Palette tokens, responsive grid, focus and motion states. |
| `app.js` | All drawing, localization, scene rotation and PNG export. |
| `assets/favicon.svg` | Authored vector icon. |
| `tools/verify-contrast.mjs` | Computes every shipped label pair against 4.5:1. |
| `docs/screenshots/` | Images referenced from the README. |
| `.impeccable/` | Design sidecar, surface brief, review captures. |
| `src/`, `scripts/`, `tests/` | House-standard directories; each carries a note explaining why it is empty. |

## Traps

- **The canvas is the export.** Never re-create the card in a separate renderer for download. `canvas.toBlob()` is the only export path; any change to the card must happen in `drawCard()`.
- **Language lives in two places.** UI strings come from `STRINGS`; card text comes from the same table through `t()`. A new label needs both `en` and `ru` entries or it will render the key itself.
- **Scenes are data plus one drawer each.** The `SCENES` table holds `kind`, seed and geometry; `SCENE_DRAWERS` maps each kind to its own drawing function. Add a theme with a table entry and a drawer, not by branching inside an existing one.
- **Scenes are deterministic.** Each scene has its own seed, so the same composition redraws identically. Changing particle counts or ridge points means editing the `SCENES` entry, not the drawing loop.
- **Editing restarts the scene timer.** `refresh()` calls `scheduleScene()`. A scene change calls `drawCard()` directly so it does not reset its own timer.
- **Status is invisible.** The `#status` element is `sr-only`. Keep messages there for screen readers; do not restore a visible status pill or line without the owner asking.
- **Reduced motion still rotates scenes.** It only skips the fade. Do not disable rotation entirely under `prefers-reduced-motion`.
- **Fonts are local system stacks.** No web font or network request. A font change must keep Cyrillic glyphs; `Segoe UI` is in the stack for that reason.
- **`.impeccable/questions/` is ignored on purpose.** Its runtime JSON is local state, but the house checker still reads tracked text for newlines. Keep a trailing newline if those files exist.

## Style / safety rails

- **No emojis**, in any file. The house checker fails the build on them.
- **No dependencies.** The checker runs with Python alone; the app runs with the browser alone.
- **Comments explain why, never what.**
- **Do not break the contrast floor.** Every new label pair must clear 4.5:1 in `tools/verify-contrast.mjs`.
- **Do not remove functionality that looks intentional** — ask first.
