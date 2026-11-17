# Research round 4: from parenting hub to everyday companion (release 1.7)

Release 1.6 taught parenting skills. Release 1.7 fills the gaps a parent meets outside those skills: the first weeks with a
newborn, the injuries that actually hurt children, learning at home, temperament, children's mental health, and the global
framework that health systems use. It also gives each parenting goal a line on what's typical at the child's age, and a gentle
check-in after a goal is finished.

Everything is in English and Persian. **None of it has been read by a clinician, psychologist or Persian-speaking reviewer yet.**
The checklist is in §10 of [REVIEW-1.5.md](REVIEW-1.5.md).

Full notes are in `research_notes/PlayNest phase 7 research round 4/`. Every source in them is tagged as opened, search-only or
unverified:

| Note | Covers |
|---|---|
| 01 | Newborns: WHO 2022 postnatal care, danger signs, jaundice and Iranian remedies, G6PD, swaddling and hips, traditions (water, herbal drinks, honey, kohl, salt), dummies, teething, sleep settling after 6 months |
| 02 | Injuries and environment: car seats and Iranian use rates, road crossing, scalds from tea and samovars, carbon monoxide from heaters, smoke and hookah, polluted air, medicines including methadone, earthquakes, windows and balconies |
| 03 | Learning: homework help, parents' maths anxiety, learning to read (including Persian script), choosing and settling into childcare, video games, eyes and myopia, after-school activities |
| 04 | Temperament, what's typical by age, positive childhood experiences, children's mental health and asking about suicide, body image and food talk, keeping gains after a programme ends |
| 05 | WHO/UNICEF Nurturing Care, WHO's 2020 early-childhood guideline, Care for Child Development, the Lancet series, digital parenting evidence, what endorsement takes, Iran's well-child schedule, Iranian child-health data, Iranian helplines |

## What the research changed

**Content was prioritised by what hurts Iranian children.** Iranian data put road traffic first among injury deaths after
infancy, then drowning and burns. Most burns in young children are scalds from hot liquids, peaking at 2 to 4 (73% in a Tehran
series of 1,717 children). Car-seat use is very low: 4.3% by roadside observation in Tehran and 9.4% in a 2021 national survey,
with seats used on 45% of city trips against 82% of intercity trips in Tabriz. Carbon monoxide caused 6,078 deaths in 2011–2018,
mostly from gas heaters, water heaters and portable gas burners. 44% of children aged 6–18 are exposed to smoke at home, 21% to
hookah. Methadone and opium are a leading cause of serious poisoning in young children, often from storage in drink bottles.
So the largest new block is nine safety guides and a "Make our home safer" goal.

**Traditions are met with evidence, not judgement.** In Qom, 78% of parents of jaundiced babies used remedies such as ترنجبین or
شیرخشت. No study shows a remedy can replace a bilirubin test or light treatment; trials of manna alongside light treatment were
weak, and some babies became dehydrated; babies given sugar water or herbal drinks fed less, which can make jaundice worse. The
guides say this plainly and offer words to use with relatives. Tight straight-leg swaddling (قنداق with the legs bound) is linked
to hip dysplasia, so the guide keeps the tradition and changes only the legs. Kohl often contains lead. Honey under 1 can cause
botulism. The app never claims a remedy is poisonous or useful when no study shows it, and makes no religious ruling.

**Expectations matter.** In a US survey of 2,200 parents, 56% thought children can stop themselves doing something forbidden
before 3, and 43% thought they can share before 2. Both come around 3 to 4. Hitting peaks at 2 to 3, first lies at 3 to 4 go
with better cognitive skills, and tantrums are common but daily or out-of-the-blue ones after 4 are worth asking about. This is
the basis of the new "What to expect at this age" guide and the age lines on each goal.

**Mental health is common and askable.** In Iran's national survey of 30,532 children aged 6–18, 22% had a psychiatric disorder,
anxiety the most common at 14%. Low mood in children often looks like irritability and tummy aches. Asking a child directly about
suicide does not put the idea in their head (Dazzi 2014; later meta-analyses). The guide gives calm words and a same-day path to
help, and the Persian script is flagged for a psychologist.

**Weight talk backfires.** Teenagers encouraged to diet were more likely 15 years later to be overweight, binge eat and encourage
their own children to diet (Project EAT). The food-and-body guide gives scripts for relatives' comments in both directions,
because underweight is as common as overweight in some Iranian samples.

**How you help with homework matters more than how much.** Warm, hands-off help is linked to better progress; frequent or
controlling help to worse (mostly correlational). Primary homework has little link with achievement. Children of maths-anxious
parents learned less only when those parents helped often; short playful number talk helped most for them. Persian short vowels
disappear by grade 3, so reading aloud and vocabulary matter more after grade 1 (an inference, labelled as such in the notes).

**Global frameworks, honestly.** WHO's Nurturing Care has five parts: health, nutrition, responsive care, early learning, safety.
WHO recommends support for all of them, but many child outcomes in the studies were null or low certainty, so the guide says "WHO
recommends", not "proven". Digital parenting programmes lose most users quickly (one ParentText trial: median use 2 days), which
supports the goals' design of a useful first step and easy return.

**Keeping gains.** Programme effects mostly last; evidence that boosters add more is mixed, and a light follow-up may itself help.
One missed day doesn't undo a habit (Lally 2010). So the check-ins are few, skippable, in words, kind to every answer, and the
parent can end them.

## What shipped in 1.7

- **29 new guides (108 in all) and a new shelf, "The first months"**, shown only when the child's age fits:
  - *First months (5):* the first weeks at home, newborn jaundice, swaddling and hips, family traditions and evidence, dummies and
    thumbs. G6PD deficiency sits on Health.
  - *Sleep (1):* settling options after 6 months, including no-cry ones and the choice to do nothing.
  - *Parenting skills (3):* five things every child needs, what to expect at this age, small things that protect children.
  - *Feelings (2):* temperament, "Is my child OK?".
  - *Food (1):* food talk, body talk.
  - *Health (4):* G6PD, routine health checks (the Persian names Iran's national schedule), healthy eyes, polluted air days.
  - *School and talking (4):* homework, maths feelings, learning to read, starting nursery. *Screens (1):* video games.
  - *Safety (8):* car seats, walking near roads, scalds, carbon monoxide, smoke-free home, medicines at home, earthquakes, windows
    and balconies.
- **A 14th goal, "Make our home safer"**: car seats, hot drinks, medicines, heaters, windows and water.
- **What's typical at this age** on 11 goals: one line for the child's age band, and a "worth asking about" line that is a reason
  to talk to someone, never a diagnosis.
- **Check-ins after a finished goal** at about a week, a month and three months: "Most days / Sometimes / Not lately", a kind
  reply to each, "Not now", and "This goal is done for us". A goal set aside part-way is never asked about. Store version 5 adds
  `checkIns` and `settled`; older saves migrate with nothing lost.
- **55 new daily tips** (397 in all).
- **Iranian helplines**: 123 (اورژانس اجتماعی) now cites the Welfare Organisation's own page, and 1480 (صدای مشاور), free
  counselling including family and child worries, is added. Both still need the test call every number gets before release.

## Not added, and why

- **Iranian poison line.** Sources point to 1490, not 190, but the WHO directory marks the national centre as not open to the
  public. 4030 is unverified. None is shown until someone test-calls them.
- **Iran's current vaccine table.** Only the 1394 table was opened; a 1403 revision exists. The health-checks guide gives visit
  ages (verified in the Ministry's well-child booklet) and says "your card shows which vaccines".
- **Iranian car-seat law.** A rule for under-10s was proposed in 2018–19; whether it is in force couldn't be confirmed. The guide
  says "check local law".
- **A "next health check" reminder.** It would reinforce the national programme and help endorsement, but reminders belong to
  the native shell (M17 in [EXPANSION.md](EXPANSION.md)).
- **Herbal-tea safety for named Iranian herbs** (گل گاوزبان and others): no opened source, so no herb is called safe or unsafe.

## Toward being recommended by health services

From note 05 §2.4. An information app's realistic route is credibility, not medical-device status:

1. Stay on the information side: no diagnosis, no scores, no symptom checkers, no dose calculators. The goal age lines list
   signs; they never compute a verdict.
2. A named clinical reviewer and a review date on every guide (`checkedOn` exists; a `reviewedBy` field and next-review date
   would follow).
3. A short content-governance document: source hierarchy (WHO, then Iran's Ministry of Health for Persian, then professional
   bodies), review cycle, error reports and a change log.
4. Co-design and usability testing with Iranian parents, including rural and low-literacy families.
5. A small pilot with one health centre or university department.
6. Align age bands and wording with «مراقبت‌های ادغام‌یافتهٔ کودک سالم», and ask the Ministry's child health office whether an
   information app needs any licence.
