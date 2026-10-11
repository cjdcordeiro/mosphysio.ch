---
name: MOS Physiothérapie
description: A physiotherapy practice in Aubonne, set as the La Côte hillside read terrace by terrace from the vines down to Lake Geneva.
colors:
  vine: "#1e3a2b"
  vine-deep: "#15291f"
  lake: "#0e3245"
  gold: "#dcad3f"
  mint: "#41e2ad"
  mint-press: "#2bcb97"
  mint-ink: "#0c2a1d"
  stone: "#e4e7de"
  chalk: "#f1f3ed"
  sage: "#cdd8c6"
  wall-light: "#b6bba9"
  wall-mid: "#8d927f"
  wall-dark: "#4e5a55"
  ink: "#16231b"
  ink-soft: "#435247"
  on-dark: "#eef2ea"
  on-dark-soft: "#b8c8bb"
  on-lake-soft: "#a9c3cf"
typography:
  display:
    fontFamily: "Familjen Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 5.1rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Familjen Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.1rem, 4.4vw, 3.6rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Familjen Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.3rem, 2vw, 1.6rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Familjen Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)"
    fontWeight: 500
    letterSpacing: "-0.01em"
  figure:
    fontFamily: "Familjen Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 5.4vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  body:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Figtree, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.01em"
rounded:
  sm: "4px"
  dialog: "6px"
  pill: "999px"
  disc: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  band-y: "clamp(64px, 9vw, 128px)"
  wall: "clamp(32px, 4vw, 52px)"
  wrap: "1160px"
components:
  button-book:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.mint-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.7em 1.25em"
    height: "48px"
  button-book-hover:
    backgroundColor: "{colors.mint-press}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.7em 1.25em"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.chalk}"
  button-small:
    backgroundColor: "{colors.vine}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.sm}"
    padding: "0.5em 1em"
    height: "40px"
  plot-sign:
    backgroundColor: "{colors.vine}"
    textColor: "{colors.on-dark}"
    rounded: "0"
    padding: "20px 24px"
  booking-card:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.ink}"
    rounded: "0"
    padding: "clamp(24px, 3vw, 40px)"
  booking-card-home:
    backgroundColor: "{colors.vine}"
    textColor: "{colors.on-dark}"
  chip-where:
    backgroundColor: "{colors.vine}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  nav-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "10px 12px"
  icon-button:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.disc}"
    size: "44px"
---

# Design System: MOS Physiothérapie

## Overview

**Creative North Star: "The La Côte Terraces"**

The page is the hillside above Aubonne, read top to bottom: vine slopes in stone and sage, a band of deep vine green, and Lake Geneva blue at the foot. Each section is a full-width terrace. Between terraces a dry-stone wall steps down: the upper ground runs on as a ledge for part of the width, a narrow stone riser drops, and the lower ground takes over. The world is cool, mineral, and outdoors. It is not a clinic interior.

Density is generous and calm, because the audience is people in pain reading on phones. Type is a firm grotesk display over a friendly humanist body. Colour comes from the landscape, laid down as solid bands. The rejected template is the mint-and-white clinic page with icon cards on white. The logo mint survives only where the visitor books.

A side altimeter ties the descent together. It reads 502 m at Aubonne and drops to 372 m at the lake as the visitor scrolls, and doubles as section navigation. On phones a live altitude readout sits in the header.

**Key Characteristics:**
- Full-width solid colour bands. Light stone terraces alternate with dark vine bands, and the lake closes the page.
- Stepped terrace walls between bands. No straight horizontal seams and no curves.
- Mint appears only on booking actions, the focus ring, and text selection.
- Chasselas gold marks prices, phone numbers, and anything on vine or lake grounds that needs to stand out.
- Lists are drawn as rows ruled by lines (vine rows, offer rules, FAQ rules), not as card grids.

## Colors

A landscape palette of cool stone grounds, deep vine and lake bands, and two strictly scoped accents.

### Primary
- **Summer Vine** (vine): the main brand ground and ink colour. Used for the vine terrace band, the plot sign, the home-visit booking card, headings on light grounds, step numerals, and chips.
- **Vine Deep** (vine-deep): the darker vine band for the price board, the mobile booking bar, and the cookie notice.

### Secondary
- **Léman Blue** (lake): the last band of the page (contact and footer), and the tint of the dialog backdrop. It belongs to the lake only.

### Tertiary
- **Chasselas Gold** (gold): prices, the big phone number, links and emphasis on vine and lake grounds, the plot sign's top edge, price-list dots, the open FAQ disc, and the focus ring on dark grounds.
- **Logo Mint** (mint, with mint-press for hover and mint-ink for text on it): booking actions only. It also serves as the focus ring and selection colour on light grounds.

### Neutral
- **Molasse Stone** (stone): the page ground, header, hero, and the in-practice booking card.
- **Sunlit Limestone** (chalk): the lighter terrace band and the dialog surface.
- **Spring Vine Leaf** (sage): the sage terrace band and icon-button hover.
- **Wall Light / Mid / Dark** (wall-light, wall-mid, wall-dark): the stone riser of each terrace wall. It darkens as the hillside descends toward vine and lake.
- **Vine Ink** (ink) and **Soft Ink** (ink-soft): text on light grounds, with soft ink for ledes, sublines, and secondary copy.
- **On-Dark** (on-dark), **On-Dark Soft** (on-dark-soft), **On-Lake Soft** (on-lake-soft): text on vine and lake bands, from primary down to secondary.

### Named Rules
**The Booking Mint Rule.** Mint fills only actions that book an appointment: the online agenda and the booking phone call. The only other uses are the focus ring and the selection highlight. Never use it as decoration, a heading colour, or a section ground.

**The Gold Harvest Rule.** Gold is for figures and for links on dark grounds: prices, phone numbers, and addresses to act on. Never use it as a band or a large fill.

**The Descent Rule.** Light terraces (stone, chalk, sage) alternate with dark vine bands (vine, vine deep) down the page. Lake is always the last band.

## Typography

**Display Font:** Familjen Grotesk (with Helvetica Neue, Arial)
**Body Font:** Figtree (with Helvetica Neue, Arial)

**Character:** A tight grotesk display with negative tracking carries headings, ledes, figures, and navigation. Figtree's open, round body keeps long French paragraphs easy for tired readers. Figtree replaced an earlier pick because phone numbers must not show a slashed zero.

### Hierarchy
- **Display** (700, clamp 2.6–5.1rem, 0.98, -0.035em, vine colour): the hero H1 only.
- **Headline** (650, clamp 2.1–3.6rem, 1.08, -0.02em): section titles. Therapist names use the same scale at -0.03em.
- **Title** (650, clamp 1.3–1.6rem): offer, speciality, and price headings, and FAQ questions at 1.1–1.35rem.
- **Lede** (display face, 500, clamp 1.15–1.4rem, soft ink): the practice's own line under a section title. It always follows the title and never sits above it.
- **Figure** (700, clamp 3–4.6rem, 0.95, -0.04em, tabular numerals, gold): prices. Phone numbers use a smaller version of the same voice (700, clamp 1.7–2.4rem).
- **Body** (400, 1.0625rem, 1.6): running text, capped at 52–64ch.
- **Label** (700, 1rem, +0.01em, sentence case): buttons and strong inline labels.

### Named Rules
**The Readable Numbers Rule.** Phone numbers, prices, and altitudes are set in the display face with tabular numerals, and they never break across lines.

**The Title-First Rule.** Every section opens with its headline. Any supporting line goes under it as a lede. Nothing small or uppercase goes above a title.

## Layout

Content sits in a 1160px wrap with a fluid gutter (clamp 16–40px). Every terrace band is full-bleed, with vertical padding of clamp 64–128px. Split layouts use 12-part ratios: 6/6 for the hero and coaching, 7/5 for booking, 5/7 alternating with 7/5 for the two therapist portraits, 8/4 for the FAQ with the Instagram card, and three equal columns for the price board.

The hero photo bleeds to the right viewport edge. The terrace wall below it is placed so its ledge runs on under the photo.

Breakpoints: at 1080px the nav tightens and social links drop. At 900px every split stacks to one column, the nav collapses into a drop panel, and the header shows the altitude readout. At 760px a fixed vine-deep booking bar appears at the bottom with two actions, and hero actions go full width. The side altimeter only appears at 1380px and up.

Tap targets are at least 44px, and primary actions are 48–56px.

## Elevation & Depth

The world is mostly flat bands. Depth is reserved for objects that stand on the terrain: the plot sign, the coaching photo, dialogs, the stuck header, and the wall's stone riser. Shadows are soft, long, and pulled in with negative spread, tinted with the deep vine-black (rgba 10/22, 25/35, 18/27), and cast downward.

### Shadow Vocabulary
- **Riser cast** (`box-shadow: 6px 4px 12px -4px rgba(10, 25, 18, .35)`): the stone riser of a terrace wall, cast toward the lower ground. Mirrored for right-hand steps.
- **Standing object** (`box-shadow: 0 18px 40px -18px rgba(10, 25, 18, .7)`): the plot sign planted on the hero photo.
- **Photo lift** (`box-shadow: 0 30px 60px -36px rgba(22, 35, 27, .6)`): framed photos on light terraces.
- **Booking glow** (`box-shadow: 0 8px 18px -10px rgba(12, 42, 29, .45)`, grows to `0 14px 24px -12px rgba(12, 42, 29, .55)` on hover): the mint booking button.
- **Stuck header** (`box-shadow: 0 6px 20px -16px rgba(22, 35, 27, .5)`), along with a hairline at 12% ink: appears only after the page scrolls.
- **Dialog** (`box-shadow: 0 40px 80px -30px rgba(10, 25, 18, .7)`) over a blurred backdrop at 62% lake.

### Named Rules
**The Planted Object Rule.** Bands never cast shadows. Only things standing on a terrace do: signs, photos, risers, overlays.

## Shapes

The geometry is the stepped terrace: rectangular ledges and vertical risers, built from solid fills. Corners are nearly square. Interactive controls use a 4px radius and dialogs use 6px. Content cards are square-cornered and carry a solid top edge, like a capstone: 6px vine on booking cards, gold on the home-visit card, and 4px gold on the plot sign.

Circles are kept for small markers: step numerals, the FAQ toggle disc, social and close buttons, and price dots. Pills are used for short location chips and consent tags.

Rules do the work of dividers. Offer and FAQ rows use 2px rules at 18–22% vine. Vine rows use a 1px wire with stake ticks every 46px. The price board's columns are separated by 1px rules at 45% gold.

## Components

### Buttons
Solid and plain, with sentence-case labels and an icon in front.
- **Shape:** gently squared (4px), with a 2px border slot.
- **Booking (primary):** mint fill with mint-ink text, 48px tall (56px large), padding 0.7em 1.25em, bold Figtree. Hover moves to mint-press, lifts 1px, and grows the glow. Active presses down 1px.
- **Line (secondary):** transparent, with a 2px border in the text colour. Hover fills with ink and turns the text chalk. On dark grounds, the border and text use on-dark.
- **Small:** 40px, a vine fill, used inside dialogs. In the cookie notice it switches to booking mint.
- **Focus:** a 3px mint outline offset 3px, switched to gold on vine and lake grounds.

### Chips
- **Location chip:** a vine pill with on-dark bold text at 0.92rem, padding 4px 12px.
- **Consent tag:** a sage pill with vine text at 0.8rem.

### Cards / Containers
- **Booking cards:** square corners with a 6px capstone top edge and padding of clamp 24–40px. The in-practice card is stone with a vine capstone. The home-visit card is vine with a gold capstone and a gold phone number.
- **Instagram card:** stone, 4px radius, 28px padding, with an avatar ringed in chalk and vine.
- **Dialogs:** a chalk surface with a 6px radius. The header and footer are separated by hairlines at 12% ink, and the close control is a 44px stone disc.

### Navigation
- **Desktop header:** sticky on stone, 76px tall, logo on the left. Links are display-face 600 at 1.02rem with padding 10px 12px. Hover is an 8% vine wash. A mint booking button sits at the end.
- **Mobile header (≤900px):** 68px tall, a 48px menu toggle, and a live altitude readout. The nav opens as a full-width stone panel of 1.25rem links separated by 8% ink hairlines.
- **Mobile booking bar (≤760px):** fixed to the bottom on vine deep, with booking mint plus a dark-line call button, both 52px.

### Terrace Wall (signature)
The divider between every pair of bands. It is clamp 32–52px tall. The upper ground continues as a ledge across a set share of the width (30–70%, varied per wall so the slope never repeats), then a 10px riser in wall stone casts the riser shadow, and the lower ground fills the rest. Walls can step from the left or the right. The riser darkens from wall-light to wall-mid to wall-dark as the page descends.

### Altimeter (signature)
Fixed at the right edge at 1380px and up. It shows a tabular altitude reading at 1.6rem, a 2px vertical scale, and tick marks per section. Section labels appear on hover or focus, and the current tick widens to 4px and turns mint (gold on dark bands). It fades out near the end of the page. On phones it becomes the header readout.

### Plot Sign (signature)
The Annonce is set as a vineyard sign planted on the hero photo. It is a square vine panel at most 340px wide with a 4px gold top edge, a gold title at 1.05rem, and the standing-object shadow. It enters with a short rise. On phones it overlaps the photo bottom by 40px.

### Rows
- **Vine rows:** two-column speciality list. Each row has a 64px icon column, on-dark headings, on-dark-soft text, and a wire-and-stakes rule beneath it. A targeted row glows gold briefly.
- **Price board:** three columns with gold figures, a unit line, and gold-dot lists.
- **FAQ:** rows separated by 2px vine rules, with vine questions. A 28px vine disc holding a plus rotates 45° and turns gold when open.

## Do's and Don'ts

### Do:
- **Do** separate bands with a stepped terrace wall, and vary the step position (30–70%) from wall to wall.
- **Do** keep mint on booking actions only, and keep at least one booking path (agenda or phone) visible in every viewport.
- **Do** set prices and phone numbers in the display face with tabular numerals, in gold on dark grounds.
- **Do** cast shadows only from objects that stand on a terrace, using the long, pulled-in vine-black shadows above.
- **Do** draw lists as ruled rows (vine wire, 2px vine rules, gold column rules) instead of card grids.
- **Do** switch the focus ring from mint to gold on vine and lake grounds.
- **Do** use the ease-out curve (cubic-bezier(.16, 1, .3, 1)) for movement, and stop every entrance animation under reduced motion.

### Don't:
- **Don't** build the mint-and-white clinic template: no grids of icon cards on white, and no mint section grounds.
- **Don't** join two bands with a straight horizontal seam, a curve, or a wave. The terrain steps.
- **Don't** put a small uppercase label above a section title. The title comes first.
- **Don't** use gold or mint as a large fill or band.
- **Don't** place the lake blue anywhere but the foot of the page and the dialog backdrop.
