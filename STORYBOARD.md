# Storyboard

**Format:** 1080×1920
**Audio:** No narration; silent premium promo with implied SFX moments
**VO direction:** None. On-screen typography is the voice.
**Style basis:** [DESIGN.md](./DESIGN.md)

## Asset Audit

| Asset | Type | Assign to Beat | Role |
| --- | --- | --- | --- |
| `Logo.png` | PNG logo | 1, 7 | Brand mark hint and final closure |
| Canvas particles | Procedural | 1, 2, 3, 7 | Background texture and light drift |
| SVG chart path | Vector | 3 | Member portfolio growth draw-on |
| Feature cards | HTML/CSS | 4 | Luxury UI orbit and hover focus |
| Stat cards | HTML/CSS | 5 | Large proof numbers |
| Quote card + stars | HTML/CSS | 6 | Social proof beat |

## Beat 1 - Cold Open (0:00-0:03)

**Concept:** The video opens in darkness, with red-gold particles drifting like embers. A beam of light sweeps the frame and only hints at the brand mark through reflection and bloom.

**Visual:** Black canvas, soft fog, one sweeping beam, ghosted Ace Magnates mark, tiny cursor entering from bottom-right.

**Mood:** Cinematic, expensive, restrained.

**Assets:** `Logo.png` as a distant ghost, canvas particles, light sweep layer.

**Choreography:** Slow push-in, beam sweep reveal, cursor drift, subtle shimmer on the logo reflection.

**Transition:** Scene 2 blooms on top with a masked headline reveal.

**Depth layers:** BG particles, mid fog, ghost logo, foreground cursor.

## Beat 2 - Empire Claim (0:03-0:06)

**Concept:** The main promise lands. The headline feels carved out of darkness, backed by a floating glass card.

**Visual:** `BUILD YOUR EMPIRE` revealed with a vertical wipe, `Join the Millionaires Hub` underneath, glass panel forming behind it.

**Mood:** Confident luxury with a fintech edge.

**Assets:** Text, glass card, subtle red-gold gradient rim.

**Choreography:** Mask reveal, blur-to-sharp settle, slight letter stagger, card bloom.

**Transition:** Hard visual cover as the portfolio card takes over.

**Depth layers:** BG glow, glass card, headline, cursor.

## Beat 3 - Proof Card (0:06-0:09)

**Concept:** Portfolio growth becomes the proof moment. The card expands from a tiny spark into a premium dashboard fragment.

**Visual:** `Member Portfolio Growth`, `$845,290`, `↑ 24.5%`, line chart draws itself, numbers count up.

**Mood:** Rich data flex, but elegant.

**Assets:** SVG path chart, count-up numbers, small chart bars, cursor click.

**Choreography:** Click-expand, chart draw, number count, light trail follow-through.

**Transition:** Feature cards orbit in on depth.

**Depth layers:** BG fog, card plane, chart line, cursor highlight.

## Beat 4 - Feature Orbit (0:09-0:12)

**Concept:** Four services move through depth like premium product tiles in a cinematic showroom.

**Visual:** Elite Mentorship, Investment Signals, Business Academy, Networking Events. One card gets selected and blooms larger.

**Mood:** Motion-rich, precise, high-end interface theater.

**Assets:** Four floating cards, cursor hover state, ambient red halo.

**Choreography:** Staggered 3D entry, orbit drift, hover expansion, parallax background.

**Transition:** Cards dissolve into a clean stat grid.

**Depth layers:** BG particles, orbit ring, mid cards, foreground cursor.

## Beat 5 - Stats Flex (0:12-0:15)

**Concept:** The numbers hit as a confident proof wall, each one arriving with a masked reveal and glow pulse.

**Visual:** `12K+ Active Members`, `$50M+ Revenue Generated`, `500+ Businesses Launched`, `47+ Countries`.

**Mood:** Expansive, prestigious, unmistakably successful.

**Assets:** Four stat blocks, glow pulses, count-up motion.

**Choreography:** One-at-a-time reveal or clean 2x2 grid, synchronized pulses, gentle camera settle.

**Transition:** Proof gives way to human credibility.

**Depth layers:** BG wash, stat tiles, glow halos.

## Beat 6 - Social Proof (0:15-0:18)

**Concept:** The promo shifts from numbers to belief. The stars appear first, then the quote card lands like a confident endorsement.

**Visual:** Five-star row, `Real results. Real members.` and `From ambition to execution.` on a dark quote card.

**Mood:** Punchy, polished, trustworthy.

**Assets:** Star strip, quote card, gentle grain, subtle floating sparkles.

**Choreography:** Star pulse, quote slide-in, slight card tilt settle.

**Transition:** Everything tightens toward the final CTA.

**Depth layers:** BG haze, stars, quote card, foreground sparkle.

## Beat 7 - Final CTA (0:18-0:20)

**Concept:** All motion collapses into a central brand card and the call to action lands with a soft shockwave.

**Visual:** `READY TO BUILD YOUR EMPIRE?` and `JOIN THE HUB`. Button click emits a red-gold ring and ends on the logo.

**Mood:** Decisive, premium, final.

**Assets:** Logo, CTA button, shockwave ring, fading particles.

**Choreography:** Central collapse, cursor click, button pulse, ring expansion, logo hold.

**Transition:** Final frame hold. No further motion.

**Depth layers:** BG glow, CTA card, button, cursor, logo.

## Production Architecture

```text
project/
├── index.html
├── DESIGN.md
├── SCRIPT.md
├── STORYBOARD.md
└── Logo.png
```
