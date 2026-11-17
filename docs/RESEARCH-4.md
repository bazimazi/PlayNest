# From play app to parenting hub: research and release 1.6

PlayNest already answered "what shall we play?" and "what do I do right now?". Release 1.6 adds the third question a parenting hub
has to answer: **"how do I get better at this, step by step?"** It does that with a Parenting skills shelf built on what tested
parenting programmes teach, four new shelves for gaps every major hub covers (food, health, character, family life), and
**Parenting goals**: short sequences of weekly practices a parent chooses, with no streaks, scores or deadlines. Everything is in
English and Persian. None of it has been read by a clinician or a Persian-speaking reviewer yet: see §9 of
[REVIEW-1.5.md](REVIEW-1.5.md).

Full notes, with every source tagged as opened, search-only or background, are in
`research_notes/PlayNest phase 6 parenting hub research/`:

| Note | Covers |
|---|---|
| 01 | Parenting programmes worldwide: shared ingredients, teaching order, evidence strength, physical punishment, styles across cultures, Iranian trials, apps |
| 02 | Feeding 0–12: milk feeds, solids, allergens, supplements by country (including Iran's Ministry of Health programme), fussy eating, family meals |
| 03 | Everyday health: fever thresholds by body, sick days, teeth, vaccines and jab comfort, WHO movement guidelines, toilet training, Iran-specific practices |
| 04 | Character: resilience, praise and mindset, motivation and rewards, emotion coaching, honesty, kindness, overclaims to avoid |
| 05 | Family life and parents: co-parenting and grandparents, parental conflict, the couple after a baby, burnout, shouting, rituals, phones |
| 06 | How the best hubs are organised, what parents ask about by age, and design rules for a goals feature |

## What the research changed

**The method order matters more than any one technique.** Across Triple P, Incredible Years, PCIT and WHO/UNICEF's Parenting
for Lifelong Health, the shared ingredients are the same: lots of warm one-to-one attention, specific praise, clear instructions
and routines, brief ignoring of minor misbehaviour, and calm, consistent consequences, taught in roughly that order. A 2025 pooled
analysis of 14 European trials found that programmes work mainly through **less harsh talk and better follow-through**; praise
alone wasn't a separate driver. So the new shelf and every goal start with connection and end with calm follow-through, and the
copy never presents warmth without limits, or limits without warmth.

**Evidence strength is uneven, and the copy says so.** Strong: Triple P, Incredible Years, dialogic reading. Moderate: emotion
coaching (Tuning in to Kids), Parenting for Lifelong Health, family routines (mostly associations). Weak or contested, and
therefore not recommended or not claimed: Circle of Security (a 2026 pooled analysis found no robust effect), growth-mindset
interventions (very small, contested effects), school mindfulness (the largest trial, 8,376 pupils, found no benefit), the
marshmallow test as a predictor, chores improving executive function (one cross-sectional study), gratitude exercises for children.

**Harsh words count, not only hitting.** Smacking is consistently linked with worse outcomes and no long-term benefit (Gershoff
2016; WHO; AAP 2018). Harsh verbal discipline predicted more conduct problems a year later even in warm families (Wang & Kenny
2014). Iran has no legal ban, so the Persian content argues from health evidence, never from law, and starts from "many of us
were smacked as children".

**Health bodies disagree, and parents deserve to know where.** Fever: how long to wait before seeing a doctor ranges from 24 hours
(AAP, under 2) to 5 days (NHS); the guide uses the cautious path and says guidance differs. Cow's milk as a drink: 6, 9–12 or
12 months depending on the body. Vitamin D: from birth in the UK, for all infants as A+D drops in Iran, not routine in Australia.
Allergen introduction for babies with severe eczema: test first (NIAID) or not (BSACI, ASCIA). Each guide names the disagreement
and sends the parent to their health centre. No guide gives a dose.

**Iran-specific findings shaped the Persian.**
- The Ministry of Health programme gives A+D drops from the first days and iron from about 6 months, both to 2 years. Its
  textbook warns against tea for babies because it blocks iron, which the solids guide now says in both languages.
- Iranian studies report common self-medication and antibiotic use for childhood fevers, so the fever guide says plainly that
  antibiotics don't help colds.
- The Tuning in to Kids pilot in Iran found parents needed emotion words in their own language, so the emotion-coaching
  guide's feelings table is natural Persian, not a translation of English words.
- Iranian parents' most-wanted help (Co-SPACE Iran, 2020) was behaviour and emotions. That's the first two shelves.

**What parents ask for.** Under 5: 42% want to shout less, and most want to know what to expect at each age and how
self-control develops (ZERO TO THREE, 2,200 parents). Ages 6–12: screens, online safety, anxiety and bullying (Mott, Pew). That
is why "Shout less, stay calm", "Help with big feelings", "Fewer battles" and "A healthier screen balance" are among the goals.

## The goals feature, and the rules it follows

A parent picks a goal, writes one line on why it matters to them, and works through 5–6 small practices, about a week each.
Every practice has: what to try (anchored to an existing routine), **an if-then plan to borrow** ("When we finish dinner, I'll
set a timer for ten minutes"), **a smaller version for a hard week**, one line of why, and links to a guide, a hard-moment card or
games that practise it.

| Rule | From |
|---|---|
| Step 1 is always connection, and useful on its own | Programmes' order; most parents complete only 2–3 steps of any digital programme |
| If-then plans on every practice | Implementation-intention research (real but modest: bias-corrected d ≈ 0.15–0.35) |
| The parent moves on when they choose; going back is as easy as going on | Ready4K, Triple P self-regulation, Family Check-Up |
| No streaks, points, deadlines or "missed" | Broken streaks demotivate, worst when people blame themselves (Silverman & Barasch 2023); one missed day doesn't undo a habit (Lally 2010) |
| "How did it go?" in words (helped / a little / not yet), never a score, and every answer gets a kind reply | Self-efficacy is itself an outcome in Triple P |
| A neutral welcome back after a gap, which never counts the gap | Same |
| The parent's own words on why it matters, shown only to them | Family Check-Up's motivational approach |
| Gentle note after two open goals | Focus; programmes target one problem at a time |
| When to get help, on every goal | House rule: teach, don't diagnose |

Not built, and why: reminders (the web app can't schedule them offline; they belong to the native shell, M17 in
[EXPANSION.md](EXPANSION.md)); before/after snapshots (worth adding once families have tried the goals); a "swap for an easier
version" button (the hard-week line does this job for now).

## What shipped in 1.6

- **Learn** has 14 shelves, led by **Parenting skills**, and 79 guides (29 new). Shelves: parenting skills, feelings, play, talking,
  food, sleep, health, character, school, screens, family, every child, safety, for you.
- **New guides:**
  - *Parenting skills (9):* what programmes teach, special time, catch them being good, sticker charts that work, emotion
    coaching, family rules and routines, ignoring the small stuff, consequences that teach, why not smacking.
  - *Food (4):* milk feeds, starting solids, fussy eating, everyday eating and drinks.
  - *Health (5):* fever and sick days, teeth, vaccines and jabs, moving/sitting/sleeping, toilet training.
  - *Character (3):* resilience, praise and confidence, honest and kind children.
  - *Family (4):* parenting as a team (including grandparents), when parents argue, rituals and one-to-one time, a new baby.
  - *For you (4):* keeping your cool, parent burnout, the couple after a baby, your phone and your child.
- **13 parenting goals, 68 practices:** feel closer, fewer battles, calmer bedtimes, big feelings, shout less, siblings, a talker
  and reader, calmer mealtimes, screen balance, a confident and capable child, smoother mornings, look after myself, toilet
  training. Reached from a card on Learn, from search, and at `#/goals`.
- **58 new daily tips** across the new areas (342 in all).
- Storage moves to version 4 (adds `goals`; older saves and backups migrate with nothing lost), and the validator checks every
  goal's word budgets, guilt words, links and sources.

## What's still open

1. **Review before families rely on it.** The feeding, fever, teeth, vaccine and toilet guides need a paediatric clinician; the
   parenting-skills guides and goals need a child psychologist; all Persian needs a native reader. Items are listed in
   [REVIEW-1.5.md](REVIEW-1.5.md) §9.
2. **Sources that couldn't be opened.** NICE, Raising Children Network, PubMed and several Iranian university servers blocked
   access. Claims resting only on abstracts are worded without effect sizes; the notes list each one to recheck.
3. **Iranian helpline and poison-centre numbers** (123, 1480, 190) were not verified, so none were added.
4. **Next content:** a sick-day quiet-play collection, a "what to expect at this age" line on each goal, booster check-ins after
   a goal ends (effects of programmes fade without them), and the remaining Persian game translations.
