# Classwork AI Prompt & Audit Log

**Course:** COM-111 Web Application Development
**Student:** Zantiago Vargas Beltran
**Scope:** Individual classwork and exercises in `Classwork/`. The team project log lives in the repo root (`PROMPT_LOG.md`).

Every entry has four parts: the date, the prompt, what came out of it, and the notes on what I changed by hand afterwards.

---

## Portfolio 03 - Personal Website (CSS)

**Date:** 2026-09-03 · **Tool:** Claude (Claude Code, Opus)

### Prompt

```text
We are building "03-Personal Website (CSS)". It is the same site as
"01-Personal Website (HTML)" but styled. Start by cloning 01 exactly:
same copy, same headings, same lists, same tables, same form fields, same
images folder. Do NOT rewrite, shorten, or invent content. If the text says
"Simplicity is the soul of efficiency." - Austin Freeman, it stays word for word.
Then style it. Here is everything in spec

STRUCTURE
- Two pages: index.html and destination.html. Both link ONE external
  stylesheet at css/styles.css. No <style> blocks, no inline style attributes.
- Wrap every logical section of both pages in <div class="section">, and keep
  the <hr> elements OUTSIDE those divs, as direct children of <body>, so they
  act as separators between sections.
- index.html sections in this order: (1) hero with my name + photo/bio table
  + blockquote, (2) Background with Education list and Skills list,
  (3) Hobbies with the cuisine lists and the books/movies/TV nested lists in each other,
  (4) My Favorite Spots links, (5) My Heroes, (6) Weekly Schedule table,
  (7) Weekly Schedule Form.
- destination.html sections: Kyoto, Rome, Santorini, Interlaken, Vancouver,
  and a "Back to the homepage" link. Each one keeps its photo, paragraph,
  the province/country/population/lat-long list, and the country flag.
- The five deep links from index (destination.html#kyoto, #rome, #santorini,
  #interlaken, #vancouver) must keep working. The old <a name="kyoto"></a>
  tags are deprecated HTML4, so drop them and put id="kyoto" directly on the
  matching <div class="section"> instead. Same fragment URLs, valid HTML5.
- destination.html currently has no <h1>. Add one, "My Favorite Spots", in
  its own section at the top of the page, so the heading outline starts at h1
  on both pages and the Sacramento h1 style is visible there too.

TYPOGRAPHY (load from Google Fonts with <link>, not @import)
- Whole site: 'Merriweather', serif.
- h1: 'Sacramento', cursive, font-size 5.5rem, margin 50px.
- h2: 'Montserrat', sans-serif, font-size 2.5rem, padding-bottom 10px.
- h3: 'Montserrat', sans-serif.
- Everything on the page is center aligned (text-align: center on body).
- Keep the Merriweather/Montserrat split meaningful: serif for reading text,
  sans for headings, script only for the two h1s. Do not add a fourth family.

COLOR
Pick a palette where the required #EAF6F6 hr actually shows up. A white body
makes a near-white dotted rule invisible, so the background must be mid-tone.
Use exactly these and put them in a comment block at the top of the file:
- body background #B8D8D8
- alternate section background #EAF6F6 (same value as the hr, so the dotted
  rules read as the alternate band bleeding through)
- body text #22333B
- primary #1D4E4E  -> h1 and links
- secondary #A85C3A -> h2 (warm rust against the cool teal)
- third #3A5673 -> h3
Every one of those has to clear WCAG contrast against the background it sits
on. No pure black, no pure white text.

LAYOUT & ORGANIZATION
- Every EVEN section gets the alternate background. Careful here: the <hr>
  elements are siblings of the sections, so :nth-child(even) counts them and
  the striping silently breaks. Use :nth-of-type(even), which only counts
  div siblings.
- Replace the "My Heroes" <table> with a meet-the-team card layout in the
  style of https://www.w3schools.com/howto/howto_css_team.asp : a .row flex
  container with flex-wrap and justify-content center, .column children, and
  a .card inside each with the portrait on top and name / .title / born /
  died / famous work below. The four heroes are Ada Lovelace (Mathematician,
  Dec 10 1815 - Nov 27 1852, wrote the first computer program for the
  Analytical Engine), Alan Turing (Mathematician, Jun 23 1912 - Jun 7 1954,
  Turing machine and breaking the Enigma code), Nikola Tesla (Engineer and
  inventor, Jul 10 1856 - Jan 7 1943, alternating current system), and
  Grace Hopper (Computer scientist, Dec 9 1906 - Jan 1 1992, first compiler
  and the COBOL language). Cards get rounded corners, a soft box-shadow, a
  white background and equal heights. The portraits are only 150px wide, so
  cap .column around 200px instead of a percentage; otherwise the images get
  upscaled and go blurry. Normalize the portraits with a fixed height and
  object-fit: cover so the four cards line up.

ELEMENT LOOK & FEEL
- hr: dotted, #EAF6F6, 6px, no bottom border, width 4% of the screen,
  margin 100px left and right.
- Links: no underline, bold, and green on hover.
- Logos: max 100 x 100 px and round. The four school logos are wide and short
  (110x25, 110x35), so a plain border-radius: 50% squashes them into
  ellipses. Force a 100x100 box, use object-fit: contain and a white
  background inside the circle so the logo sits centered in a real circle.
- Form: dotted boundary all around it, its own background color, and every
  input, textarea and select rounded with a background that plays well with
  the form background. Give the labels a fixed width so the fields line up in
  a column instead of stair-stepping.
- Because the whole page is centered, the <ul> and <ol> markers get stranded
  on the far left away from their text. Fix that with
  list-style-position: inside and padding-left: 0.
- Tables are shrink-to-fit and stay left aligned even with text-align center,
  so give them margin: 0 auto. Style the schedule table's <th> row with the
  primary color and add a subtle zebra stripe so seven rows stay readable.
- Add img { max-width: 100% } so nothing can overflow horizontally.

MOUNTAIN AND CLOUDS
- Put images/mountain.png at the bottom of the hero section and keep it
  position: static (it scrolls away with the page). Cap it at 600px and
  center it; the source file is 598px wide and stretching it to 100% of the
  viewport makes it blurry.
- Put two images/cloud.png as the first two children of <body> and make them
  position: sticky with top: 0, so they pin to the top of the viewport while
  the rest of the page scrolls under them. Push them apart with margins so
  they sit on opposite sides, and give them a z-index so they float above the
  sections.

ACCESSIBILITY, NON-NEGOTIABLE
- Every <img> gets an alt attribute. Descriptive alt for content images
  (school logos, hero portraits, destination photos, country flags, the
  busy/free icons); alt="" for the purely decorative mountain and clouds.
- Keep one h1 per page and no skipped heading levels.

WHAT TO AVOID
- No Bootstrap, no Tailwind, no CSS framework, no CDN except Google Fonts.
- No JavaScript. This is a CSS exercise.
- No inline styles and no !important.
- No CSS resets or normalize.css, no preprocessors.
- Do not add sections, copy, fake stats or filler text that is not in
  exercise 01.
- Do not use ids as styling hooks; ids are only for the fragment anchors.

WHEN YOU ARE DONE
Serve the folder over localhost and screenshot both pages end to end at
1440x900. Report anything that renders wrong, any broken image and any
console error, with the real output. Do not tell me it works until you have
looked at it.
```


### Result

`css/styles.css` from scratch (210 lines, ~30 rules) plus the minimal markup edits it was allowed to make: `.section` wrappers, the card markup for the heroes section, `alt` attributes, and `id` anchors on `destination.html`.

Where the code lives: [`Classwork/Portfolio/03-Personal Website (CSS)/css/styles.css`](Portfolio/03-Personal%20Website%20(CSS)/css/styles.css) lines 1-210 (full file), with the audited fixes at lines 60-65 (list markers), 74-81 (circular logos) and 84-89 (section striping). Markup: `index.html` lines 1-348 and `destination.html` lines 1-119.

### Notes and manual changes

- **Section striping was silently dead.** The first pass used `.section:nth-child(even)`, but `nth-child` counts *every* sibling, and the `<hr>` separators and the two cloud `<img>` tags are siblings of the sections. That pushed all seven sections onto odd positions, so not a single one ever got the alternate background, and it looked "fine" because nothing errors. Changed to `:nth-of-type(even)`, which only counts `div` siblings. `css/styles.css:88`.
- **The dotted `hr` was invisible.** With `background-color: #FFFFFF` on the body, a `#EAF6F6` rule is basically white on white. Changed the body background to `#B8D8D8` so the required rule color reads. This is why the background is mid-tone and not white.
- **Circular logos came out as ellipses.** `border-radius: 50%` on the raw `<img>` bends the element box, and the school logos are 110x25 and 110x35, so they became flat ovals. Rewrote `.logo` as a fixed `100px` square with `object-fit: contain` and a white fill, so the logo is letterboxed inside an actual circle. `css/styles.css:74`.
- **List markers were stranded.** With `text-align: center` the bullets and numbers stay pinned at the far left of the list box while the text centers, leaving a column of orphan dots. Added `list-style-position: inside; padding-left: 0`. `css/styles.css:63`.
- **Broken image inherited from exercise 01.** `images/me.jpg` is referenced in the hero table but the file does not exist in exercise 01 either, so it 404s. Confirmed with the network log, not assumed. Still open, the photo needs to be added to `images/`.
- **Deprecated anchors.** Swapped the five `<a name="kyoto"></a>` style anchors for `id` attributes on the section `div`s. The `destination.html#kyoto` links behave identically, but the page now validates as HTML5 and the accessibility audit stops flagging five empty links with no accessible name.
- Verified with a headless Chrome pass over both pages: 32 images, 0 missing `alt`, 1 broken image (`me.jpg`), 1 `h1` per page, no skipped heading levels, no horizontal overflow.

---

## Portfolio 03 - Personal Website (CSS), second pass: Apple HIG restyle

**Date:** 2026-09-03 · **Tool:** Claude (Claude Code, Opus)

### Prompt

**Prompt 1 — the restyle:**

```text
Load your apple-design and HIG skills, then redesign the whole site to meet the
HIG and Apple's standard. Change the palette to Apple's: cleaner, minimalist,
white. Keep all the HTML content, but write cleaner, more minimal CSS with
generous spacing, cards with rounded corners, hero text with gradients and
transparency fades on the h2s, and impactful typography. Change the font to
Satoshi and load it from the Fontshare CDN. Then use the visual-check skill to
open Playwright, verify the look, and iterate until the look and feel matches
Apple's own web pages. All static HTML and CSS.

Specifics I care about:
- Palette: #ffffff base, #f5f5f7 for alternating sections, #1d1d1f for text,
  #0066cc for links. Put them in semantic custom properties, not raw hex at the
  call site, and add a real dark mode off prefers-color-scheme.
- Type scale: Apple tightens tracking and shortens leading as size goes up.
  Follow that. Body at 17px/1.47 with -0.022em. h1 clamped up to 96px.
- Every colour pair has to clear WCAG: 4.5:1 for body text, 3:1 for display
  text. Measure it, do not eyeball it. If one of Apple's own greys fails at the
  size I am using it, darken it and say so.
- The gradient fade on headings must not fade to fully transparent, because the
  tail of the word would drop below contrast. Stop it somewhere that still
  passes and give a flat fallback for browsers without background-clip: text
  and for prefers-contrast: more.
- Sections alternate white / #f5f5f7. The dotted hr rules from the last version
  are gone; the tonal shift between sections is the separator now. Hide them,
  do not delete the markup.
- Cards everywhere: education rows, hobby categories, the heroes, the form.
  Rounded corners, soft shadow, no heavy chrome.
- The schedule table gets no vertical rules. Hairlines only.
- Keep every alt attribute and the single h1 per page. Honour
  prefers-reduced-motion.
- Do not add a nav, do not invent copy, do not add sections. The content is
  fixed; only the styling changes.
```

**Prompt 2 — the heroes:**

```text
Change my heroes to: Elon Musk, Sam Altman, Dario Amodei, Steve Jobs. Musk for
his entrepreneurship and his vision for the internet from nothing. Sam for his
vision to take the lead in distribution of LLMs and GPTs. Dario Amodei for his
positive vision of the future with AI, having built the best AI but ethically,
unlike the competition. Jobs for his innovation, the way he led, and putting
simplicity above everything else.

I do not have photos of them. Find portraits that are actually licensed for
reuse, check the licence before you download anything, and record the
attribution somewhere in the repo, because CC BY requires it. Do not scrape a
random image off the web. Use their real birth dates; if you cannot verify one,
write only what you can verify rather than guessing a day and month.
```

**Prompt 3 — images and places:**

```text
Replace the images everywhere with related, high-quality ones. Also change my
top cuisines to Italian, French, Mexican, Spanish, Greek, in that order. And my
favorite spots are Lake Como Italy, Santorini Greece, St Moritz, St Tropez,
St Barths.

For the destinations I need the province, country, population and lat/long for
each one. Pull those from a real source, do not invent numbers. If one of them
genuinely has no population figure because it is not a town, use a different
fact rather than making one up. Update the anchor links on the homepage so the
five deep links still land on the right section. Swap the flag PNGs for SVGs.
Delete any image file that nothing references any more, and keep the total page
weight sane, so downscale anything oversized.
```

**Prompt 4 — the two polish passes:**

```text
(a) On the title, lower the font weight, and make the gradient softer - only
    for the main header with my name, not the section headings.

(b) Remove all border strokes.
```


### Result

A rewritten `css/styles.css` (~820 lines) built on semantic design tokens; new markup only for the heroes cards and the destinations; 13 CC-licensed images fetched from Wikimedia Commons with attribution recorded in `images/CREDITS.md`.

Where the code lives: [`Classwork/Portfolio/03-Personal Website (CSS)/css/styles.css`](Portfolio/03-Personal%20Website%20(CSS)/css/styles.css), 888 lines. Audited spots: the tokens and the contrast fix at 21-86 (tertiary label at line 36), the split h1/h2 gradients at 175-207, the specificity split at 281-300, the banded schedule table at 619-670, the borderless form fields at 719-745. Markup: `index.html` lines 1-347 (heroes cards at 155-201) and `destination.html` lines 1-121 (five destinations at 23-100). Attribution: `images/CREDITS.md`. Commits `fc0bf75`, `3abb558`, `c3b5e59`.

### Notes and manual changes

- **Apple's own grey failed contrast at the size I used it.** `#86868b` is the real tertiary label colour from apple.com, but measured against the `#f5f5f7` section fill it only reaches **3.33:1**, and it was carrying 12px table headers and 15px dates. Darkened to `#707075` (4.52:1 on `#f5f5f7`, 4.93:1 on white). Copying a brand's palette does not copy its context. `css/styles.css:36`.
- **A `:where()` fix broke every heading's centring.** To let the form be narrower than the 980px column I wrapped `.section > *` in `:where()`, which drops specificity to zero. That made the plain `h1 { margin: 0 0 24px }` shorthand win and reset `margin-inline` to 0, so every title silently jumped to the left gutter. Caught it by measuring, not by looking: `getBoundingClientRect()` returned `left: 22px, width: 980px` on a 1440px viewport, where a centred column starts at 230px. Fixed by splitting the rule in two, since the two halves need **opposite** specificity: centring must beat the element margins, width must lose to components. `css/styles.css:295`.
- **Removing a border is not the same as having no border.** After stripping `border: 1px solid ...` from the inputs, Chrome repainted its own dark inset border, so the form looked worse than before. Needed an explicit `border: none`. Verified afterwards by walking every element's computed style: zero elements paint a border on either page. `css/styles.css:733`.
- **Refused to remove the focus outline.** "All border strokes" would literally include the `:focus-visible` ring, but an outline is not a border and it is the only thing telling a keyboard user where they are. Kept it and flagged the decision; removing it would break WCAG 2.4.7. Same reasoning for leaving the checkbox on its native rendering, since with no border and no fill it disappears completely.
- **The table needed a replacement for its rules.** Seven rows across eight columns with no separators is unreadable, so the row hairlines became an alternating banded fill with rounded ends, which separates without a stroke.
- **Guessed Wikidata IDs and got five wrong entities.** Looked up the places by hand-written QID and got Ferrara, Mount Athos and the Acropolis back. Rewrote the lookup to resolve the Wikipedia article title to its wikibase item instead, which is unambiguous, and got the real figures.
- **Verified every image licence before downloading.** All 13 are CC0 / CC BY / CC BY-SA or public domain from Wikimedia Commons, attributed in `images/CREDITS.md` as those licences require. Recompressed the set from 10.9MB to 3.5MB and deleted 15 files nothing referenced.
- **Still open:** `images/me.jpg` is referenced by `index.html` and does not exist. It was missing in exercise 01 too. It is the only 404 left.

---

## Portfolio 05 - JS Exercises, Society parody

**Date:** 2026-09-08 · **Tool:** Claude (Claude Code, Opus)

### Prompt

```text
In js/society.js there are 4 TODOs. Fill those in and nothing else. Do not
add files, do not add functions, do not use any new fancy JS. Write it the
same old way the file is already written, with var and function. Here is
what each one has to do.

1) this.newPos(canvasWidth, canvasHeight)
   Every little person has a spot on the screen (this.x, this.y) and a
   walking speed (this.speedX, this.speedY). To make it walk, add the speed
   to the spot, once per frame:
       x = x + speedX
       y = y + speedY
   To make it bounce, think of a ball hitting a wall. The ball does not
   stop, it comes back with the same force, only the other way. So the only
   thing you change is the sign of the speed: speedX = -speedX. Do that
   when it touches the left or the right wall, and do the same with speedY
   when it touches the top or the bottom.
   Be careful about where the walls are. The x and y of a picture is its
   top left corner, not its middle. So the right wall is the width of the
   canvas minus the width of the picture, and the bottom wall is the height
   of the canvas minus the height of the picture. If you forget that, half
   the face hangs out of the screen.

2) this.moreHappy() and this.lessHappy()
   Every little person carries a number (this.happyPoints), a yes or no for
   whether it is happy right now (this.isHappy), and the face it shows,
   which is either smiley.gif or angry.gif.
   moreHappy adds 1 to the number. lessHappy takes 1 away.
   The face does not change every time the number changes. A happy person
   does not turn sad over one bad day. So:
       - a sad one turns happy only when its number goes above 1
       - a happy one turns sad only when its number goes below 0
   They start at 1 if they are happy and at -1 if they are sad, so a sad
   one needs 3 good meetings to turn around and a happy one needs 2 bad
   ones. That space in the middle is on purpose. It is what makes the
   simulation take a while instead of the faces blinking back and forth.
   When one does turn around, change its picture too: point this.image.src
   at happySrc or at sadSrc, which are already written at the top of the
   file. Do not make a new picture, reuse the one that person already has.

3) startGame()
   Right now it says "var n = 1; var m = 1;". n is how many people there
   are and m is how many of them start sad. Take those two numbers from the
   boxes on the page instead. The boxes are id="num" and id="sad" in
   society.html.
   Whatever someone types in a box arrives as text, even when it looks like
   a number, so turn it into a real number first with parseInt.
   Leave the rest of the function alone. The warning about having more sad
   people than people, and the loop that creates them, are already fine.
   One thing to cover: if someone types letters instead of a number, there
   is nothing to count, so nobody gets created, the screen stays empty, and
   the simulation announces "Absolute sadness" over an empty world. Catch
   that before it happens and show a window.alert, the same kind that is
   already in there.

Do not touch updateGameArea, checkSurroundings, the myGameArea part or the
HTML. Only write a comment where the line does not explain itself.
```


### Result

The four TODO blocks of `js/society.js` filled in, about 30 lines of JS. No new files, no new functions, no libraries.

Where the code lives: [`Classwork/Portfolio/05-JS/js/society.js`](Portfolio/05-JS/js/society.js) lines 47-73 (`newPos`, `moreHappy`, `lessHappy`) and 81-89 (`startGame` reading the form). The untouched professor code is `flatlander` at 26-46, `checkSurroundings` at 74-78 and `updateGameArea` at 105-149. Markup: `society.html`. Commit `13ed9e8`.

### Notes and manual changes

- **It added a clamp nobody asked for.** The first pass wrapped the bounce in `this.x = Math.min(Math.max(this.x, 0), canvasWidth - this.width)` to pin the flatlander back onto the edge before flipping the speed. It is not wrong, but the TODO says "bounce back" and flipping the sign already does that; the speeds here are fixed between 0 and 6, so nothing ever overshoots enough to be visible. Deleted, `js/society.js:47`. It stayed in `js/images.js` instead, because there the speed grows by 1 on every button press and the README for that exercise does demand the image never leaves the viewport.
- **The thresholds only work because the point moves first.** `this.happyPoints++` has to run before the `if`, otherwise a sad one sitting at exactly 1 never crosses "over 1" and the society freezes with nobody flipping. Checked it by running the simulation with 20 individuals and 3 sad and watching a sad face at `0` climb to `2` and turn into a smiley.
- **One-way influence, and it is the professor's loop, not ours.** `updateGameArea` pairs everyone with `for (i...)` and `for (j = i + 1...)`, but only ever calls `tmpFocus.moreHappy()`, so in a contact between `i` and `j` only `i` changes. `j` feels nothing. That is why the society drifts happy: the sad ones are created last, so they spend most of their time in the `j` position where their opinion does not count. Left as is because the exercise says not to touch that function, but it is the first thing to point at if someone asks why 3 sad people never win.
- **The picture swap is a `src` reassignment, not a new object.** Each flatlander holds one `Image` from its constructor; setting `.src` reloads that same object. The second load is instant because the GIF is already in the browser cache, so there is no flicker when a face flips.
- Verified in headless Chrome with 20 individuals and 3 sad: all 20 stay inside the 800x600 canvas after 5 seconds (~370 frames), the counters read `Happy: 18 / Sad: 2`, and a sad face did flip to happy during the run.

---

## Sync check against the professor's repo

**Date:** 2026-09-08 · **Tool:** Claude (Claude Code, Sonnet 5)

### Prompt

```text
Verifica todos los cambios que sube a Profes ur repo y hazle merge a todos mis
archivos que yo tengo en mi classwork. Se supone que mi classwork debe de
estar actualizado con lo que el profesor subió a su repo.
```

Follow-up, after being asked for the professor's repo URL:

```text
esta en el folder 2027-1
```

### Result

No merge was needed. `2027-1/` is a separate git clone of the professor's repo (`gcastillo56/com111-class`, branch `2027`), independent from this repo's own `origin`. Pulling it landed on the same commit it already had (`4e214e7`), so it was already current. Comparing `2027-1/Class` against `Classwork/Class` file by file found no new labs, no new files, and every diff turned out to be my own solved or in-progress code against the professor's blank starter template, not something to bring in.

Where the check happened: `2027-1/` (professor's clone) vs. [`Classwork/Class/`](Class/) (`async-lab`, `dom-lab`, `js-calculator`, `ux-lab`).

### Notes and manual changes

- **A diff is not automatically "something to merge."** Six files showed differences (`js-calculator/README.md`, `starter.html`, `js/calculator.js`, `dom-lab/index.html`, `css/style.css`, `js/dynamic.js`), but reading each one showed they were all my own answers to the exercises, not professor updates I was missing. Blindly overwriting them with the professor's copy would have deleted finished, already-graded work.
- **Kept the two repos separate on purpose.** The professor's repo lives in its own clone (`2027-1/`) with its own `origin`, instead of being added as a second remote inside this repo. That keeps his commit history from ever mixing into mine, and a `git pull` there can never touch my working tree.
- Verified by listing files in both trees first (structure check, no new folders or files), then running `diff` per matching file and reading the actual content of every reported difference before concluding nothing needed to change.

---
