# Product

<!-- impeccable:product-schema 1 -->

> Inferred from the existing site (index.html) during a redesign request. Nothing here was confirmed in an interview yet; correct anything that is wrong.

## Platform

web

## Stack

Static HTML/CSS/JS, no build step. Published by GitHub Pages (`.github/workflows/pages.yml`); every PR gets a preview under `/pr-<number>/`. Internal links must stay relative.

## Users

People in and around Aubonne (canton de Vaud, Switzerland) who are in pain, injured, recovering from surgery or pregnancy, or want to return to sport safely. Mostly French speakers; the team also speaks Portuguese and English. They usually arrive with a doctor's prescription (ordonnance) or a question about whether they need one, and they want to book quickly, on a phone.

## Product Purpose

MOS Physiothérapie is a small physiotherapy practice (cabinet) in Aubonne offering physiotherapy in the practice and at home, plus medical coaching and therapeutic Pilates. The site's job is to let a visitor understand what the practice treats, trust the two physiotherapists, and book an appointment (online agenda via tbooking.ch, or by phone).

## Positioning

A two-person practice led by Sara Mós that treats the body as a whole (muscle chains, visceral manipulation, jaw/ATM, posture and running analysis, pelvic floor), and pairs treatment with movement: medical coaching, pre/post-natal coaching, Pilates. "Apprendre à bouger, se libérer de la douleur."

## Operating Context

- Booking: online agenda (tbooking.ch embed, `https://www.tbooking.ch/fr/book/2367-2562?embedded=true`), phone/WhatsApp/SMS on (+41) 078 627 35 95, email info@mosphysiotherapie.ch.
- Address: Rue de l'hôtel de ville 2, 1170 Aubonne; entrance on the right of door n°2. Mon–Fri by appointment, 8h00–18h00.
- Home visits in Aubonne and surroundings, phone booking only, require a prescription that specifies home treatment.
- Swiss basic insurance (LaMal) reimburses physiotherapy with a prescription, according to the patient's franchise.

## Capabilities and Constraints

- Single-page site in French (`lang="fr-FR"`).
- Content: announcement, booking (cabinet / domicile), coaching offer, 13 specialities, two therapist bios, three priced special offers, FAQ (4 questions), Instagram card, contact/address/hours, social links.
- Prices shown: 120.- (visceral manipulation and belly massage, 45 min), 80.- (medical sports coaching), 120.- (posture and running analysis, 1h15), first session without prescription 80.- (45 min) then 60.- (30 min).

## Brand Commitments

- Name: MOS Physiothérapie / MosPhysiothérapie. Logo in `images/logo.webp` (stencil-cut thin capitals, "PHYSIO" P and "THÉRAPIE" in mint green, runner-with-spine mark). The logo stays.
- Social: facebook.com/mosphysiotherapie, instagram.com/mosphysiotherapie (also linked as instagram.com/mosphysio).

## Evidence on Hand

- Portraits: `images/sara-mos.webp`, `images/alana-teixeira.png`.
- Photos: `images/hero-banner.png` (patient with band on a Swiss ball, Lake Geneva and Alps behind, vineyard), `images/coaching-image.jpg` (box squats, stock-like).
- Speciality icons from Flaticon (attribution required while used), Low Pressure Fitness logo (`images/logo-lpf.png`).
- No testimonials, reviews, or patient numbers exist. Do not invent them.

## Product Principles

1. Booking is always one tap away.
2. Plain, warm French; explain techniques in patients' words, keep the practice's own sentences.
3. The whole body, not the symptom: show how the specialities connect.
4. Never claim outcomes, reviews, or credentials the practice has not stated.

## Accessibility & Inclusion

Patients in pain and older patients: large tap targets, readable type sizes, strong contrast, works without the booking iframe (phone fallback always visible).
