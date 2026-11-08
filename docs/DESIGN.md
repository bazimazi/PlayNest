# PlayNest design system (v1.5)

How PlayNest looks and behaves, and the rules every new screen follows. Tokens and styles live in `src/styles/app.css`;
components live in `src/components/`. The research behind the interaction rules is in
[RESEARCH-2.md §3](RESEARCH-2.md#3-mobile-ux-native-calm-low-text).

## The idea

**A picture book you can play.** Parents should enjoy opening this, not just find it useful. Every screen is a colour
"world"; the art is cut paper; buttons feel like toys; a small chick called Pip keeps you company; and finishing a game
grows a real flower in a garden.

**Who it's for:** parents and caregivers of children from birth to 12, often tired, often with one free hand.

Principles in one breath: picture first, numbers second, words last. One primary action per screen, in thumb reach.
Undo, not confirm. Never guilt. Works at 3 a.m.

## Worlds

A world is a set of colour tokens (`--w`, `--w-2`, `--w-3`, `--w-sun`, `--w-cloud`, `--w-ink`, `--w-ink-2`, `--paper`)
defined for light and dark under `[data-world='…']`. `Page` sets it on `<html>`, which recolours the header, the paper,
the tab pill and the phone's status bar at once. Any element can borrow one with its own `data-world` attribute, as the
garden card on Today does.

| World | Used for |
|---|---|
| `sun` | Morning on Today; Happy; activities for little hands |
| `sky` | Midday on Today; Settings; first steps of onboarding; language and senses |
| `dusk` | Evening on Today; Play together; feelings |
| `night` | Late on Today; Sleepy |
| `coral` | **Play** tab; Energetic; movement |
| `leaf` | **Grow** tab and the garden; imagination |
| `lilac` | **Learn** tab; Milestones; Fussy; thinking and focus |

Today's sky follows the real time of day until a mood is picked, then the mood takes over (`src/lib/world.ts`).

Use `--w-ink` / `--w-ink-2` for text on a world colour, and `--ink` / `--ink-2` / `--ink-3` everywhere else.

## Screens

Every tab screen is a `Page`:

```tsx
<Page world="coral" title="Play" heading="Let’s play!" head={<PlayTabs view="ideas" />} actions={<ProfileButton />}>
<Page world="lilac" title="Milestones" back={<BackButton fallback="/growth" />}>        // pushed screen
<Page world={DOMAIN_WORLD[d]} title={a.title} back={…} hero={<header className="detail-hero">…</header>}>  // detail
```

- `title` names the screen in the compact bar; `heading` is the big friendly title and defaults to `title`.
- `head` holds anything that belongs on the coloured header. `overlap` leaves room for the first card to sit over its edge.
- Tab roots have the child's avatar top right, and moving between them cross-fades.
- Pushed screens slide in from the right and have a back button. Back restores the scroll position.
- The tab dock stays visible except on screens with their own bottom action (`BottomBar`) and in focused tasks.
- **Today stays short:** the mood, one pick (the deck), what's going on right now, today's plan, the garden, at most one
  nudge, and Pip's tip. A place that's already a tap away on a tab (stories, songs, routines, this stage) doesn't get a
  second door on Today, and neither does a list of ideas the deck already holds.
- Focused tasks (play mode, milestone check-in, onboarding) fill the screen in one world, with no tab dock. Their main
  button stays within reach however long the content is.

## Components

| Component | Use it for | Notes |
|---|---|---|
| `Page`, `Section`, `BackButton`, `BottomBar`, `Empty` | Screen chrome, sections, the pinned action, empty states | `Empty` has Pip say it kindly |
| `Art`, `ActivityArt` | Any picture of a game, guide or collection | Size the sticker with `--sticker` (a % or a clamp), never with a percentage height |
| `Emoji`, `EmojiText` | Illustrations, and text that contains emoji | Never render a raw emoji: it would look different on every device |
| `Pip`, `PipInNest` | The mascot | Moods: `happy`, `energetic`, `fussy`, `sleepy`, `wow`, `calm`. Breathes, blinks now and then, hops when tapped. `hatch` plays the egg on the welcome screen. Never needs anything |
| `PlayGarden`, `Flower` | This week's flowers | Four kinds of flower, grown stem first. A butterfly from the first play, another at 3, a bee at 6. Now and then a breeze |
| `Confetti` | Finishing something | One burst on a canvas, which removes itself. With less movement, a few stars that fade where they are |
| `Sheet` | Short tasks and pickers | Grip, drag down to dismiss, a visible ✕, Escape. One at a time. Never a long flow. A button inside that finishes the task (Save, Keep this) closes through `children`’s `close`, so it slides away like every other way out |
| `Segmented` | 2–4 views of the same thing, or a setting | `tabs` mode for view switching |
| `ListGroup` + `ListRow` + `Glyph` | Settings-style lists | |
| `ActivityTile` | Any grid or carousel of activities | Picture, title, time and energy. **No summary text.** The heart is a sibling of the link, not nested |
| `HeroPick` | The single most important suggestion on a screen | A deck of real cards: the next idea waits underneath and comes forward as the top one flies off. Swipe one way (or tap "Another idea") for the next, the other way for the last one back; the arrow keys do the same. Mirrored right to left. Every card is as tall as the tallest nearby, so "Let's play" doesn't move under the thumb |
| `Ring` | Progress towards something the parent chose | Never for physiology targets |
| `BalanceBars` | Play across the 8 areas | Ranked bars in one colour; labels say which is which |
| `SwipeRow` | Deletable rows | Delete stays reachable by keyboard. Always give Undo through `toast` |
| `InfoButton` | The explanation behind a number or feature | Moves paragraphs off the screen into a sheet |
| `Carousel` | Horizontal browsing | Snaps on touch; wraps into a grid on big screens with a mouse |
| `toast(text, { label: 'Undo', onClick })` | Confirmations | Emoji in the text become artwork automatically. An action stays for 10 s, because tired people miss things. One at a time: a new toast replaces the last. Moves to the top while a sheet is open |
| `HelpButton` | The way to help, top right of every tab root | Next to the avatar. Never moves |
| `CallButton` | Any screen that might need an emergency call | Dials the local number; says so when sources disagreed, and asks for the number when there isn't one |
| `ReadAloud` | Steps, stories and guides | Uses the phone's own voice only. Words stay on screen, so it's never the only way in |
| `Countdown` | Timers a parent starts | Works from the clock, so it stays right after the phone sleeps. Keeps the screen on |
| `BedsideToggle` | Any screen someone might use in the dark | Switches the night screen on and off |
| `RightNowChips` | "What's going on?" on Today | One tap each. Weather can take unsafe ideas out altogether |
| `MakeItWork` | Adapting a game | Names the barrier, never the child. Nothing is saved |
| `ReviewNote` | Safety content | Says plainly that a clinician hasn't reviewed it yet, until one has |

## Safety screens

These rules outrank everything else on this page.

- **Reference, not triage.** A parent picks a card by naming the emergency. Nothing asks for symptoms and returns a verdict:
  that's what keeps the app from being a medical device, and it's also more honest.
- **Never blend first aid.** Choking and CPR steps differ between bodies, so a card follows one body and says which. Steps
  never fall back to another body's without saying so. Region is confirmed by the parent, and kept when they travel.
- **Original words.** Almost nothing in this area is free to copy. Every line is ours, written from the sources it cites.
- **Crisis screens use buttons, not text boxes.** One screen, one tap to a person. They never assess, rate, or ask for reasons
  or plans. They never describe a method. They say truthfully that nobody is watching.
- **Nothing here is stored or scored.** The check-in appears only when opened: no prompts, no reminders, no history.
- **No number from memory.** Every phone number comes from a source, and a person test-calls them before a release.
- **Everything works offline**, and the service worker treats it as critical.

## Celebrations, faith and family

- Off by default. Chosen one by one. Never guessed from a name, a language or a location, and never bundled by faith.
- Say "some families", and say who doesn't. Don't equate one festival with another. A day of remembrance opens gently.
- Don't assume a mum and a dad, a garden, a car, a separate bedroom or a particular budget. Talk cards say "someone in our family".
- World games and stories credit the culture they come from, and say when several share them. Anything sacred, or that a
  community asks outsiders not to retell or run, stays out.

## Older children (8–12)

The parent is the assistant now. Prefer games the child runs (`kid-leads`), side-by-side talk over questions, and independence
in steps, with a real safety note. The garden, Pip and the colour worlds stay, because they're for the parent.

## Kid mode

The only part of the app a child holds. One big picture for now and a small one for next, with no reading needed. A shrinking
colour pie instead of digits, and no red. No score, no streak, no fail state, no links, no network, nothing to buy. Leaving takes
a 3-second hold plus a sum, and the sum gets harder from age 6. The screen says honestly that this stops accidental exits and
points to Guided Access or screen pinning for more. It's never presented as consent.

## The night screen

Black, one warm colour (red or amber), no pictures and no movement. It's for reading or soothing in the dark. The theme is set before
first paint, so it never flashes bright. Copy only says "easier on your eyes": that's all the evidence supports.

## Words

| Element | Budget |
|---|---|
| Tab label | 1 word |
| Tile | Title, time, energy. Nothing else |
| Card | Title ≤6 words; body ≤12 words or none; button ≤2 words |
| First screenful | ≤40 words, not counting numbers |

- **Full sentences are allowed only for:** why something was suggested, empty states, support moments, and safety.
  Everything else goes behind an `InfoButton`.
- **Copy rules:**
  - Use the child's name.
  - Never write "missed", "failed", "only" or "below average".
  - Give ranges, not exact dates.
  - Name the thing plainly first; keep the metaphor as a garnish ("Save to our garden" works because you've just seen
    the flower).

## Visual language

- **Colour:**
  - Deep blueberry ink on tinted paper, white cards, and the current world's colour.
  - One action colour everywhere: sunshine yellow (`--cta`) means "do this". Links and selection use `--brand`.
  - Orange (`--safety`) is for safety only, and red (`--danger`) for destructive actions only.
  - Eight area colours (`--d-*`) tint chips and flowers. They are not distinguishable enough to carry meaning, so
    **always pair them with a label**; never use colour alone to identify an area.
- **Type:**
  - Caprasimo (`--display`) for headings: warm and storybook. Never below about 17 px.
  - Nunito (`--font`) for everything else, at weight 600 or more.
  - Both are self-hosted in `src/assets/fonts/`, so the app stays offline and sends nothing to third parties.
  - Names in other scripts fall back to the system font in real bold (`font-synthesis: style` stops fake bold on Caprasimo).
  - Sizes in `rem`, so iOS Dynamic Type works. `tabular-nums` for anything that ticks.
- **Art:** Fluent Emoji (the shaded "color" style, MIT), generated into `public/emoji/` by `scripts/make-emoji.mjs`, with
  a white paper edge like a sticker, on a scene from `Art`. The scene's colour comes from the development area and its
  subject from the energy: moons, waves and forests for calm, rays, peaks and balloons for active. Seeded by id, so a game
  always has the same picture. Every sheet of paper casts a faint shadow that is drawn, not filtered, because a grid shows
  dozens of them.
- **Shape:** radii of 32 (hero, sheets), 26 (cards), 20 (tiles), 14 (inputs). Pressable things have a solid lip beneath
  them rather than a blurry shadow, and sink into it when pressed.
- **Motion:** three speeds, so it stays calm for someone tired.
  - *Ambient*, slow and barely noticed: a cloud, a sun, Pip breathing. Only on the one big picture of a screen (`live` on
    `Art`), never across a grid. It stops out of sight, and rests after 40 seconds with nothing touched.
  - *Answering a touch*, quick and springy. `--spring-gentle` for anything navigational, `--spring-playful` for hearts, chips
    and press-release, `--spring-toy` for Pip and flowers. Generated from the spring equation, with a bezier fallback.
  - *Celebration*, once, at a moment that earned it: finishing a game, a check-in or a routine. `burst()` in `lib/motion.ts`
    for small ones. Never for merely opening a screen.
  - A game's picture is carried from its tile to its page with a view transition, where the browser has them. Elsewhere,
    the ordinary slide.
  - **Less movement** (the device's setting, or Settings > Appearance) replaces all of this with short fades: screens 160 ms,
    sheets and cards 180 ms, and celebrations as stars fading in place. It doesn't just cut. `data-motion` on the root is the one
    switch, and JavaScript asks `motionAllowed()`.
  - **The night screen doesn't move at all**, and nothing moves on paper.
  - **Rules that keep it cheap**, which `e2e/smoke.mjs` enforces. Measured on Today, breaking them cost 39% of a throttled
    main thread against 2% with them kept, and on Learn 100% against 2%.
    - Nothing runs forever on a shape *inside* an SVG: that repaints the whole picture on every frame. Each moving part is its
      own `<svg>` layer (`Moving` in `Art`, `Layer` in `WorldDecor`), or a short burst on a timer (Pip's blinks, the garden's
      breezes).
    - An element that moves forever has no other animation in its `animation` list. Chrome keeps a transform off the graphics
      chip for good if its element has a second one when it starts. What arrives and what floats are two elements.
    - What moves forever isn't filtered. The sticker's edge is on the image; the wrapper moves.
  - **An arrival that can be followed by a drag or a transition fills `backwards`, not `both`.** A finished animation that
    still holds `transform` overrides transitions and inline styles on that element: the pick on Today used to vanish in place
    instead of flying off, and snap back instead of springing.
  - **What arrives and what is moved by a gesture are two elements, too.** On the Today deck, `.deck-slot` is moved by the
    swipe and by its place in the deck; the `.hero-card` inside it does the arriving. An arrival animation on the slot itself
    would override the swipe for as long as it ran.
  - **Anything that fades or slides in also fades or slides out.** A dialog closed from a button inside it plays its exit
    first and unmounts after it (`Sheet`, `ChooseTogether`), rather than vanishing.
- **Haptics** (`platform.haptic`): `tap` for selections, `success` for saves and ticks.
- **Dark mode** follows the system, with a Settings override. Worlds go deep rather than inverted, and art dims slightly.

## Accessibility checklist for new screens

- Every icon-only button has an `aria-label`. Illustrations are decorative (`aria-hidden`), so the words must carry the meaning.
- Rings use `role="progressbar"` with values.
- Swipe and long-press actions have a visible or keyboard alternative.
- Sheets have a visible close button.
- Contrast is AA in light and dark, in **every world**; `npm run e2e` runs axe on every screen and every mood.
- Tap targets are at least 44×44 px; inputs are at least 16 px, so iOS doesn't zoom. In kid mode the main target fills the screen.
- No horizontal page scroll at 360 px, or at 200% text, and the main action stays on the first screen at 360×640 (checked in e2e).
- `prefers-contrast: more` is respected, and the night screen passes AA in both colours (checked in e2e).
- New CSS uses logical properties (`margin-inline`, `padding-block`), so a right-to-left language can follow.
