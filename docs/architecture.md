# Architecture

How holiday-postcard is put together.

## The shape

The project is three browser files and one verifier. There is no build step and no package manifest.

| File | What it is responsible for |
| --- | --- |
| `index.html` | Standard form controls, the language switch and the canvas element. |
| `styles.css` | Colour tokens, the workbench grid, responsive reflow and motion states. |
| `app.js` | Localization strings, scene table, canvas drawing and PNG export. |
| `tools/verify-contrast.mjs` | Computes the contrast ratio of every shipped label pair. |

## The data flow

```
input / language / stamp / scene index
                  |
                  v
             drawCard()
                  |
                  v
             <canvas id="postcard">
                  |
                  +--> toBlob() --> PNG download
                  +--> aria-label describing the current card
```

`refresh()` reads the form, redraws the card, restarts the scene timer and updates the status line. A scene change calls `drawCard()` directly, so it does not reset the timer.

## Decisions worth knowing about

### The preview is the export

The card exists only as pixels on one canvas. Downloading calls `toBlob()` on that canvas, so there is no second renderer that could drift from what the visitor saw. The cost is that every visual change has to be written as canvas drawing code in `app.js`.

### Scenes are data, not branching code

The `SCENES` table holds each composition's seed, moon geometry, particle count, ridge points, pines and cabins. `drawWinterScene()` reads one entry and draws it. Adding a scene is a table entry; the drawing loop stays untouched.

### Language is stored, content is not

Only `winter-dispatch-lang` is written to `localStorage`. Greeting text, address fields and stamp choice reset on reload, which keeps the browser from holding correspondence. When a saved Russian language is restored, the default English sample is translated so the card does not open with mixed languages.

### No network, no fonts to fetch

Everything the card needs is drawn with vector paths and a local monospace stack including `Segoe UI` for Cyrillic. Nothing is uploaded, and the page works from `file://`.

## Boundaries

- `app.js` never changes the DOM outside its own controls, the status line and the canvas label.
- `styles.css` never draws the postcard; it only frames it.
- Documentation in `docs/` describes the build; it is never read by the page.
- The house checker is referenced by the CI action, not copied into this repository.
