# Classwork AI Prompt & Audit Log

**Course:** COM-111 Web Application Development
**Student:** Zantiago Vargas Beltran
**Scope:** Individual classwork and exercises in `Classwork/`. The team project log lives in the repo root (`PROMPT_LOG.md`).

---

## Rules of AI Engagement (quick reference)

1. **Boilerplate is fine; architecture is yours.** AI may generate layouts, CSS/Bootstrap grids, regex, SQL/Mongoose schemas, or boilerplate fetch functions. Routing, state trees, and integration logic must be understood by us.
2. **Every prompt gets a human audit.** No blind copy-paste: review, test, refine, and document what we changed.
3. **Oral defense readiness.** Any AI-generated block can be pointed at during evaluation. We must explain how it works and how it was integrated. This log is the study guide.

---

## Week 1 Log Entry

_Exercise: Portfolio 03 - Personal Website (CSS)_

### 1. High-Level Goal

_What feature, component, or bug were you trying to solve this week?_

- Take the finished markup from `Classwork/Portfolio/01-Personal Website (HTML)/index.html` (which is a plain htmlfile) and redesign it as exercise 03 with a single external stylesheet for CSS, following the specs in`README.md`, site palette, use only three font type scale variations, centered layout, dotted `hr` dividers between sections, circular logos containers, alternating section backgrounds for each section, a "meet the team" card layout replacing the heroes table, a dotted-border form, and a static mountain with sticky clouds. Constraint: the content had to stay identical to exercise 01, so every visual decision had to happen in CSS, not by rewriting the pages HTML, simply modify the HTML.

### 2. The Interaction Log

_Document the primary prompts you used to generate the base code._

| AI Tool Used | Exact Initial Prompt | What the AI Generated (Summary/Snippet) |
| :--- | :--- | :--- |
| Claude (Claude Code, Opus) | Full prompt transcribed in the block below (too long for this cell) | `css/styles.css` from scratch (210 lines, ~30 rules) plus the minimal markup edits it was allowed to make: `.section` wrappers, the card markup for the heroes section, `alt` attributes, and `id` anchors on `destination.html`. |

**Exact prompt (verbatim):**

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

### 3. The Human Audit & Modifications

_What did the AI get wrong or omit? What manual changes did you make to integrate this code into your existing application structure? (2-3 sentences.)_

- **What we changed/added:**
  - **Section striping was silently dead.** The first pass used `.section:nth-child(even)`, but `nth-child` counts *every* sibling, and the `<hr>` separators and the two cloud `<img>` tags are siblings of the sections. That pushed all seven sections onto odd positions, so not a single one ever got the alternate background, and it looked "fine" because nothing errors. Changed to `:nth-of-type(even)`, which only counts `div` siblings. `css/styles.css:88`.
  - **The dotted `hr` was invisible.** With `background-color: #FFFFFF` on the body, a `#EAF6F6` rule is basically white on white. Changed the body background to `#B8D8D8` so the required rule color reads. This is why the background is mid-tone and not white.
  - **Circular logos came out as ellipses.** `border-radius: 50%` on the raw `<img>` bends the element box, and the school logos are 110x25 and 110x35, so they became flat ovals. Rewrote `.logo` as a fixed `100px` square with `object-fit: contain` and a white fill, so the logo is letterboxed inside an actual circle. `css/styles.css:74`.
  - **List markers were stranded.** With `text-align: center` the bullets and numbers stay pinned at the far left of the list box while the text centers, leaving a column of orphan dots. Added `list-style-position: inside; padding-left: 0`. `css/styles.css:63`.
  - **Broken image inherited from exercise 01.** `images/me.jpg` is referenced in the hero table but the file does not exist in exercise 01 either, so it 404s. Confirmed with the network log, not assumed. Still open, the photo needs to be added to `images/`.
  - **Deprecated anchors.** Swapped the five `<a name="kyoto"></a>` style anchors for `id` attributes on the section `div`s. The `destination.html#kyoto` links behave identically, but the page now validates as HTML5 and the accessibility audit stops flagging five empty links with no accessible name.
  - Verified with a headless Chrome pass over both pages: 32 images, 0 missing `alt`, 1 broken image (`me.jpg`), 1 `h1` per page, no skipped heading levels, no horizontal overflow.

### 4. Integration & Learnings

_How does this code integrate with the rest of your system? What is the core mechanism you learned?_

- **Core Mechanics:** One stylesheet drives both pages because the markup shares the same class vocabulary (`.section`, `.logo`, `.row`/`.column`/`.card`, `.mountain`, `.cloud`), so `destination.html` inherits the whole design without a single rule of its own. The two mechanisms worth defending are (a) `:nth-child` vs `:nth-of-type` -- `nth-child` matches on position among *all* siblings and only then checks the selector, while `nth-of-type` counts only siblings of the same tag, which is what "every even section" actually means when `<hr>`s are interleaved; and (b) `position: sticky`, which behaves like `static` until the element hits its offset threshold inside its containing block and then behaves like `fixed` -- the clouds pin at `top: 0` and stay pinned for the whole document because their containing block is `<body>`, while the mountain stays `static` and scrolls away normally.

- **Where the code lives:** [`Classwork/Portfolio/03-Personal Website (CSS)/css/styles.css`](Portfolio/03-Personal%20Website%20(CSS)/css/styles.css) lines 1-210 (full file), with the audited fixes at lines 60-65 (list markers), 74-81 (circular logos) and 84-89 (section striping). Markup: `index.html` lines 1-348 and `destination.html` lines 1-119.

---

## Week 2 Log Entry

_Exercise: Portfolio 03 - Personal Website (CSS), second pass: Apple HIG restyle_

### 1. High-Level Goal

_What feature, component, or bug were you trying to solve this week?_

- Throw away the visual layer from Week 1 and rebuild it against Apple's Human Interface Guidelines, without touching the exercise's content or section structure. Four rounds of direction: (a) the restyle itself, on a white minimalist palette with Satoshi and gradient display type; (b) swap the heroes for people I actually look up to; (c) replace every image with high-resolution material and change the destinations and cuisines; (d) two polish passes on the hero heading and on removing all border strokes. The interesting constraint throughout was that this is static HTML and CSS only, so every layout change had to be expressible as a selector rather than as new markup.

### 2. The Interaction Log

_Document the primary prompts you used to generate the base code._

| AI Tool Used | Exact Initial Prompt | What the AI Generated (Summary/Snippet) |
| :--- | :--- | :--- |
| Claude (Claude Code, Opus) | Four prompts, transcribed in the blocks below | A rewritten `css/styles.css` (~820 lines) built on semantic design tokens; new markup only for the heroes cards and the destinations; 13 CC-licensed images fetched from Wikimedia Commons with attribution recorded in `images/CREDITS.md`. |

**Prompt 1 — the restyle (verbatim):**

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

**Prompt 2 — the heroes (verbatim):**

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

**Prompt 3 — images and places (verbatim):**

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

**Prompt 4 — the two polish passes (verbatim):**

```text
(a) On the title, lower the font weight, and make the gradient softer - only
    for the main header with my name, not the section headings.

(b) Remove all border strokes.
```

### 3. The Human Audit & Modifications

_What did the AI get wrong or omit? What manual changes did you make to integrate this code into your existing application structure? (2-3 sentences.)_

- **What we changed/added:**
  - **Apple's own grey failed contrast at the size I used it.** `#86868b` is the real tertiary label colour from apple.com, but measured against the `#f5f5f7` section fill it only reaches **3.33:1**, and it was carrying 12px table headers and 15px dates. Darkened to `#707075` (4.52:1 on `#f5f5f7`, 4.93:1 on white). Copying a brand's palette does not copy its context. `css/styles.css:36`.
  - **A `:where()` fix broke every heading's centring.** To let the form be narrower than the 980px column I wrapped `.section > *` in `:where()`, which drops specificity to zero. That made the plain `h1 { margin: 0 0 24px }` shorthand win and reset `margin-inline` to 0, so every title silently jumped to the left gutter. Caught it by measuring, not by looking: `getBoundingClientRect()` returned `left: 22px, width: 980px` on a 1440px viewport, where a centred column starts at 230px. Fixed by splitting the rule in two, since the two halves need **opposite** specificity: centring must beat the element margins, width must lose to components. `css/styles.css:295`.
  - **Removing a border is not the same as having no border.** After stripping `border: 1px solid ...` from the inputs, Chrome repainted its own dark inset border, so the form looked worse than before. Needed an explicit `border: none`. Verified afterwards by walking every element's computed style: zero elements paint a border on either page. `css/styles.css:733`.
  - **Refused to remove the focus outline.** "All border strokes" would literally include the `:focus-visible` ring, but an outline is not a border and it is the only thing telling a keyboard user where they are. Kept it and flagged the decision; removing it would break WCAG 2.4.7. Same reasoning for leaving the checkbox on its native rendering, since with no border and no fill it disappears completely.
  - **The table needed a replacement for its rules.** Seven rows across eight columns with no separators is unreadable, so the row hairlines became an alternating banded fill with rounded ends, which separates without a stroke.
  - **Guessed Wikidata IDs and got five wrong entities.** Looked up the places by hand-written QID and got Ferrara, Mount Athos and the Acropolis back. Rewrote the lookup to resolve the Wikipedia article title to its wikibase item instead, which is unambiguous, and got the real figures.
  - **Verified every image licence before downloading.** All 13 are CC0 / CC BY / CC BY-SA or public domain from Wikimedia Commons, attributed in `images/CREDITS.md` as those licences require. Recompressed the set from 10.9MB to 3.5MB and deleted 15 files nothing referenced.
  - **Still open:** `images/me.jpg` is referenced by `index.html` and does not exist. It was missing in exercise 01 too. It is the only 404 left.

### 4. Integration & Learnings

_How does this code integrate with the rest of your system? What is the core mechanism you learned?_

- **Core Mechanics:** The whole restyle is one stylesheet over unchanged markup, which was only possible because of `:has()`. Education rows are selected with `li:has(> a > .logo)` and hobby cards with `li:has(> img)`, so plain `<li>` elements become cards with no extra classes; `table:not(:has(th))` flattens the profile table into a stack while `table:has(th)` keeps the schedule tabular. The other mechanism worth defending is **specificity as a design tool**: `.section > *` (0,1,0) and `:where(.section) > *` (0,0,0) select exactly the same elements, and splitting the declarations between them is what lets one rule win against element selectors while the other loses to them. That is not a trick, it is the whole reason `:where()` exists. Third, **borderless separation**: without strokes, a surface is only visible if it differs from its parent in fill or in shadow, which is why the same card needs a shadow in light mode (white on white) and needs none in dark mode (`#1d1d1f` on black already separates).

- **Where the code lives:** [`Classwork/Portfolio/03-Personal Website (CSS)/css/styles.css`](Portfolio/03-Personal%20Website%20(CSS)/css/styles.css), 888 lines. Audited spots: the tokens and the contrast fix at 21-86 (tertiary label at line 36), the split h1/h2 gradients at 175-207, the specificity split at 281-300, the banded schedule table at 619-670, the borderless form fields at 719-745. Markup: `index.html` lines 1-347 (heroes cards at 155-201) and `destination.html` lines 1-121 (five destinations at 23-100). Attribution: `images/CREDITS.md`. Commits `fc0bf75`, `3abb558`, `c3b5e59`.

---

## Reference: what a good entry looks like

**Exemplary (Prompt Alchemist standard)**

- **Goal:** Build an Express endpoint to authenticate a user using JWT.
- **Prompt:** "Show me how to write an Express POST route for `/api/login` that verifies a user's hashed password against a MongoDB document using mongoose, and returns a signed JWT if successful."
- **Audit:** The AI used a generic `User.findOne`; we swapped it for our `UserModel` service. It hardcoded the signing secret (`jwt.sign(payload, 'secret')`), so we replaced it with `process.env.JWT_SECRET` to keep secrets out of GitHub. We also added an error handler for database timeouts so the server does not crash on a bad DB state.
- **Learnings:** The route returns a signed JWT the client must send in the `Authorization` header for protected routes. We learned `bcrypt.compare` runs asynchronously to avoid timing attacks.

**Unacceptable (fails the ethical AI boundary)**

- **Goal:** Connect my server to MongoDB.
- **Prompt:** "Write my database connection code."
- **Audit:** "We pasted it into our server and it connected." No analysis, no customization, no error handling, high risk of failing the oral defense.
