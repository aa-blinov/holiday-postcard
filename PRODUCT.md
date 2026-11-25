# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: static HTML/CSS/JS, no build step — inferred from the brief; the stack question went unanswered (the structured probe was dismissed), so this choice is a labelled assumption, not a confirmed answer.

## Users

[Inferred] People sending a short winter holiday greeting digitally, who want a personal, designed card rather than a generic image or a plain text message.

## Product Purpose

[Inferred] Let a visitor compose a winter postcard in the browser — choose a stamp, write a message, address it — and download the finished card as a PNG they can send anywhere.

## Positioning

[Inferred] The card is made from a small set of deliberate controls and renders live as a real postcard, so the downloaded file is the artifact itself rather than a screenshot of a web page.

## Operating Context

[Inferred] Opened in a desktop or phone browser, used in one short sitting, output saved to disk for sharing.

## Capabilities and Constraints

- Eight authored stamp designs (pine, snow, mug, moon, star, candle, bell, mitten) with enlarged chooser previews.
- Editable greeting message and recipient/sender fields.
- Russian and English interface and sample greetings via a language switch, including localized text drawn on the card; the chosen language survives a page reload.
- Four authored winter background compositions that cycle automatically every seven seconds while editing pauses the cycle; the current composition is shown in the stage bar.
- Live preview that matches the exported PNG.
- PNG download from the browser.
- [Pinned by brief] High-contrast dark, crisp terminal-inspired palette for the whole surface.
- [Pinned by brief] Every label must meet at least 4.5:1 contrast.

## Brand Commitments

[Inferred from brief, updated by user] Name: "Winter Dispatch" / "Зимняя доставка". Voice: terse, warm, operator-like. Visual commitments: dark terminal-inspired palette, high contrast, red primary font and red state accent, bilingual English and Russian presentation, no decorative emblems of war or hate.

## Evidence on Hand

No real customer content, assets, or testimonials were supplied. All sample greetings and stamp artwork are authored demonstration content and must be labelled as such where a visitor could mistake them for real correspondence.

## Product Principles

- The preview is the product: what you see is exactly what downloads.
- Controls are ordinary, recognisable web controls; the world lives in type, colour, density, and one signature move.
- The card carries the warmth; the studio carries the clarity.
- Every label stays readable without compromise.

## Accessibility & Inclusion

- Every shipped label pair clears 4.5:1 contrast, verified by `tools/verify-contrast.mjs` with a floor of 4.76:1.
- Controls are native form elements with visible focus rings; the canvas carries an `aria-label` describing the current stamp, greeting and address.
- The interface and the printed card are available in English and Russian, and the choice survives a reload.
- `prefers-reduced-motion` removes the scene-fade animation; background rotation itself continues.
