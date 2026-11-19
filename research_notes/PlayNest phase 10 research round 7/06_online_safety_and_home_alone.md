# 06 — Online safety without the fear, and home alone or out alone

Research notes for PlayNest phase 10, round 7. Researched 19 Nov 2026.

## 1. Scope, and what is already in the app

Two topics for ages about 5 to 12 (60–144 months):

- **A. Online safety without the fear:** how online grooming works and its signs; "self-generated" images and sextortion; in-game text and voice chat; what to say by age; what the evidence says about parental controls (restrictive versus active mediation); "sharenting" (parents posting children's photos), including a check on the Barclays forecast; where to report. Iran: the cyber police (پلیس فتا), Iranian studies, app categories, 123 and 1480, and what the 1399 child protection law says about online abuse.
- **B. Home alone and out alone:** readiness signs (AAP, NSPCC, an NHS page), no legal age in the UK or Iran, the 1399 law's wording on neglect (now checked against a full text), practice steps, house rules, and short trips out. Builds on round 6 (`05_freedom_risk_wheels_electricity.md` §1.8 and its unshipped "Ready to go it alone?" outline, which this note replaces).

House rules followed: teach, don't diagnose; red flags go to a professional or emergency number; trials vs links kept apart; no guilt; no politics; no brand names in copy (platform names appear below only as data from sources, not for the app).

### Already in the app (read; not repeated below)

- `first-phone` (guides-more.ts): readiness questions, a family agreement, and a safety callout: "If anyone online threatens your child or asks for images, don't pay and don't delete anything. Tell the police or your national reporting line straight away, and tell your child it isn't their fault."
- `ai-chatbots-toys` (guides-more.ts): not in scope; nothing to flag.
- `body-safety` (guides-more.ts): secrets vs surprises, code word, how to respond to a disclosure. Online safety should link here, not repeat it.
- `chores-independence` (guides-more.ts): ladder by age; "a short time home alone in daylight, once you've checked local law"; UK callout (no legal age, offence if at risk, NSPCC "under-12s are rarely mature enough for long periods").
- `home-safety-by-stage` (guides-more.ts): hazards by stage; nothing on home alone.
- `video-games` (guides-learning.ts): ratings don't cover chat; turn chat with strangers off or friends-only; safety callout about photos, secrets and meeting up, "they won't be in trouble"; report to the platform, "and to the police if an adult is involved".
- `screens` (guides.ts): screen-time positions by body; nothing on online risk.
- Tips already shipped that overlap: `older-come-to-me` (come to me if something online upsets you), `older-photo-consent` (ask before posting your child's photo), `learn-game-chat` (turn game chat off or friends-only), `fr-errand-ladder` (errand ladder), `older-first-errand` (rehearse the route). New tips below avoid these.

### Problems found in existing content

| # | Sev. | File, slug | Exact line | Problem | Fix |
|---|---|---|---|---|---|
| 1 | **P2** | `src/data/guides-learning.ts`, `video-games`, safety callout | "Report it to the platform, and to the police if an adult is involved." | Sextortion gangs pose as peers or use hacked accounts of people the child knows (NCA, 2024 [opened]). A parent or child usually **cannot tell** whether an adult is involved, so this condition can stop a report. Peer requests for nude images also need adult help. | "Report it to the platform. If anyone asks for sexual pictures, threatens your child or wants to meet, also tell the police or your national reporting line, whatever age they seem to be." |
| 2 | P3 | `src/data/guides-more.ts`, `first-phone`, last safety callout | "If anyone online threatens your child or asks for images, don't pay and don't delete anything. …" | Correct as far as it goes, but leaves out the NCA's first step: stop replying and block. | "…don't pay, stop replying and block them, and don't delete the messages. Tell the police…" |
| 3 | P3 | `src/data/guides-more.ts`, `chores-independence`, safety callout | "…the NSPCC says under-12s are rarely mature enough for long periods." | Accurate (GOV.UK [opened]) but omits the two firm NSPCC lines parents most need: never leave a baby or young child alone "not even for a few minutes", and under-16s shouldn't be left overnight (NSPCC guide [opened]). | Add: "Babies and young children should never be left alone, even for a few minutes, and under-16s shouldn't be left overnight." |
| 4 | P3 | Round 6 note §1.8 | Iranian law "[opened via edalatsara.com… recheck]" | Now cross-checked against a second full text (ekhtebar.ir): Art. 1(پ), 3(الف), 9 and its تبصره are as round 6 said. Still a secondary legal site; the official gazette wasn't reachable. | No change to wording; keep the recheck item. |

No P1 problems found.

## 2. How to read these notes

- **[opened]**: I opened the page, PDF or record and took the fact from it.
- **[abstract]**: from the abstract (Europe PMC REST API).
- **[search]**: search snippets or summaries only. **Do not use in the app until checked.**
- **[recall, unverified]**: background knowledge not confirmed this session.

**Access problems this session:**
- **nspcc.org.uk** and its mirror racetothemoon.nspcc.org.uk returned **403** for every page (grooming, home alone, news). I used the NSPCC's own PDF guide *Is my child ready to be left alone?* (2015, hosted by Family Support NI) and **learning.nspcc.org.uk** (grooming briefing), which did open.
- **esafety.gov.au** timed out on every attempt (WebFetch and curl). eSafety facts below are [search] only.
- **fbi.gov** returned 403; **ofcom.org.uk** PDFs returned 403. FBI and Ofcom facts are [search] only.
- **cyberpolice.ir / fata.gov.ir** refused connections or failed certificate checks; I did not bypass the certificate check. The FATA phone line is [search].
- **ceopeducation.co.uk** "what-is-online-grooming" was a 404; its "online-grooming" article opened.
- **rc.majlis.ir** law page 404; the 1399 law was read on ekhtebar.ir (a secondary legal site).
- **Children's Commissioner** report PDF downloaded and read in full text.
- **Counts:** 18 web searches, about 8 Europe PMC queries, about 30 page/PDF fetches.

---

## 3. Findings

### Topic A — Online safety without the fear

#### A1. What online grooming is and how it works

- **Definition (NSPCC Learning, grooming briefing, undated, refs accessed to Dec 2025)** [opened]: grooming "involves the offender building a relationship with a child… gaining their trust and a position of power over the child, in preparation for abuse."
- **How it happens online** [opened, NSPCC Learning]:
  - Through "social media, instant messaging apps or online gaming platforms".
  - Offenders can hide their identity, sometimes pretending to be younger.
  - They learn a child's interests from profiles and posts to build a relationship.
  - They may use several platforms, then **move the conversation to a private or encrypted messaging service**.
  - Some message hundreds of young people and wait to see who replies.
  - **Abuse doesn't need a meeting**: they may persuade children into online sexual activity.
- **CEOP Education (UK National Crime Agency), "Online grooming", parent article, undated** [opened]: an adult builds a relationship with a child online to harm or exploit them, via games, social media, chat apps or live streaming; it's illegal. Tactics: pretending to be younger or a peer or "friend of a friend"; **flattery, gifts or secrets**; pushing a move from public to private chats; asking for personal information, photos or videos. Why children talk to them: they may not realise the person is older, may be curious, lonely, or exploring friendships. It's "never their fault".
- **How common it is:** "we don't know how common grooming is", because children rarely disclose [opened, NSPCC Learning].
- **UK police data:** 7,263 "sexual communication with a child" offences in 2024/25 (44 forces), up from 7,062 in 2023/24; where the platform was known (2,111), 40% on one image-messaging app [search, NSPCC press release via secondary sources; NSPCC site blocked]. Northern Ireland: 45 offences with under-12 victims, youngest 8 [search]. **Don't use until checked.**

#### A2. Signs (with a strong caution)

NSPCC Learning lists signs [opened]: sudden changes in behaviour, such as more or less time online; being secretive about time and devices; unexplained gifts; a friendship or relationship with a much older person; sexual language they wouldn't be expected to know; seeming upset or withdrawn; going missing; mental health problems; (older children) alcohol or drugs, sexual health problems.
- The NSPCC itself says these "can easily be mistaken for 'typical' teenage behaviour" [opened].
- UNICEF: be alert if a child "appears to be upset or secretive with online activities" [opened].
- **App rule:** present signs as "things worth a gentle conversation", never as a checklist that tells a parent whether their child is being groomed (teach, don't diagnose). The existing `body-safety` line "There are no reliable signs of abuse" fits here too.

#### A3. "Self-generated" imagery: what the IWF data shows

- **Term:** the IWF uses quote marks because "self-generated" is "an inadequate and potentially misleading term" that can seem to blame the victim; "Children are not responsible for their own sexual abuse" [opened, IWF 2025 data report]. It means imagery where the child is seen alone, with no abuser physically present [opened].
- **2023 (IWF annual report)** [opened]: 254,071 actioned reports contained "self-generated" imagery, **92%** of 275,652. By age: **7–10: 104,282 (41%; up 65% on 2022)**; 11–13: 141,920 (56%). Children are "groomed, deceived or extorted" into it; "sometimes children are completely unaware they are being recorded".
- **Under-6s (IWF news release, 23 Apr 2024)** [opened]: 2,401 "self-generated" images and videos of 3–6-year-olds hashed in a year; 91% girls. Filmed in **bathrooms, bedrooms, kitchens and dining rooms**, sometimes with soft toys and cartoon bedding in view; abuser typically remote; often recorded without the child's knowledge. An Ofcom figure in the same release: 42% of parents of 5–7s use social media with their child, 32% say their child uses it independently.
- **2025 (IWF data report)** [opened]: of 512,980 images and videos confirmed as child sexual abuse, 140,276 (27%) were also recorded as "self-generated"; 45% of all abuse videos. (2024 report published less detail on this [search].)
- **Interpretation:** IWF figures are counts of material found and actioned, not how many children are affected, and change with how the IWF searches and records. Use them to explain *why devices in shared rooms and open talk matter*, not as risk figures for a child.

#### A4. Sextortion

- **NCA alert, 29 Apr 2024** [opened]:
  - NCMEC's global sextortion reports more than doubled in 2023: **26,718** (from 10,731 in 2022). 91% of UK sextortion victims the IWF dealt with in 2023 were male.
  - All ages and genders are targeted; a large share are **boys aged 14 to 18**.
  - Mostly organised crime groups motivated by money; first contact to blackmail can take **under an hour**. They pose as peers, or use hacked accounts of people the child knows, move fast to sexual talk, sometimes send an image first, then threaten to share real, fake or **AI-generated** images unless paid.
  - **Advice:** don't pay (paying doesn't stop it; they'll ask for more; if already paid, don't pay again); **stop contact and block** on every account; **avoid deleting**: keep messages, images, numbers and bank details as evidence; report to police (UK 101/999) or CEOP. Tell the child "you are not to blame and help and support is available".
  - Image removal: Childline/IWF **Report Remove** (UK, for under-18s), NCMEC **Take It Down**.
- **NCMEC sextortion page** (undated) [opened]: online enticement reports up more than 300% 2021–2023; 186,800+ in 2023. "Cooperating or paying rarely stops the blackmail." Block the suspect but keep the profile and messages. Report on the platform; CyberTipline; Take It Down.
- **NCMEC CyberTipline data, 2025** [opened]: 21.3 million reports; 1.4 million online enticement reports (158% more than 2024); **average 137 financial sextortion reports a day** (up 37%); NCMEC knows of "at least three dozen teenage boys in the U.S." who died by suicide after being victimised; 400,000+ reports with a generative-AI link; tracking peer use of "nudify" apps; 3,000+ reports about violent online groups that push children to self-harm (rise "largely driven by enhanced industry reporting").
- **FBI** pages (403): not used [search only].
- **"You won't be in trouble":** the NCA says "not to blame"; CEOP "never their fault"; the existing `video-games` callout says "they won't be in trouble". This is consistent advice, but the exact phrase "you won't be in trouble" is the app's, not a quote from these sources.
- **Unresolved:** whether parents should screenshot or forward an image. Handling indecent images of children can itself be an offence [search]; the NCA says keep evidence. **Cautious app wording:** "Keep the messages and the account details. Don't forward or share the picture itself to anyone." — recheck against CEOP/police before shipping (Recheck 3).
- **Ages for this app:** most sextortion victims are teenagers, but IWF data show 7–10s and even under-6s being coerced into imagery. For 5–12s, the message is the same one-liner, pitched by age (scripts in §7).

#### A5. In-game text and voice chat

- Grooming happens on "online gaming platforms" [opened, NSPCC Learning] and "games" [opened, CEOP].
- eSafety: most online multiplayer games include text or voice chat; gaming and gaming-adjacent services may be a first point of contact for grooming and sextortion [search; site unreachable].
- Ofcom 2025: 33% of 8–9-year-olds who game online play with people they don't know [search, secondary blog; Ofcom PDF 403]. Ofcom 2024: 64% of 8–17s who game online chat through the game with friends or peers [search].
- No study found that tests whether turning chat off reduces harm. The advice is expert precaution: chat off or friends-only (already in `video-games`), and **voice chat counts too**. Voice chat isn't logged the way text is, so there may be no record to show you [recall, unverified]: don't put that in the app.

#### A6. Parental controls: restrictive vs active mediation

All observational unless stated; none are trials of a parenting approach on abuse outcomes.

| Study | Design | Finding | Tag |
|---|---|---|---|
| Duerager & Livingstone 2012 (EU Kids Online) | Survey, 25,142 children aged 9–16, 25 countries, cross-sectional | Restrictive mediation "reduces online risks, but it also reduces their online opportunities and skills". Active mediation (talking, sharing) linked to lower risk and **less harm**, with more activities and skills. | [opened, repository summary] |
| Livingstone et al. 2017, *J Communication* | Survey, ~6,400 parents of 6–14s, 8 countries | "Enabling" mediation: more opportunities and more risks; "restrictive": fewer risks and fewer opportunities; parents with lower digital skills restrict more. | [opened, repository summary] |
| Collier et al. 2016, *Dev Psychol* | Meta-analysis, 57 studies | Small effects: restrictive r = −.06 overall; active non-significant overall but linked with lower aggression (−.08), sexual behaviour (−.06), substance use (−.11); co-viewing r = +.09. | [abstract] |
| Nielsen et al. 2019, *J Behav Addict* | Systematic review, 27 survey studies, ~94,000 adolescents | No mediation type consistently linked with problematic internet use or gaming; no mediation at all tended to make things worse; active mediation may help; restrictive varied; family cohesion protective, conflict harmful. | [abstract] |
| Beyens-type review, *PLOS ONE* 2025 (social networks, 9–18) | Systematic review, 32 papers | Mediation, "especially the restrictive strategies", reduced time on social networks and associated risks; unclear which strategy is best; no study looked at benefits. | [abstract] |
| JMIR Pediatr Parent 2025 | Systematic review and meta-analysis, 11 studies (8 pooled) of parent digital-safety programmes | Parents' digital-safety knowledge and skills improved (Hedges g = −0.47, high heterogeneity, I² ≈ 88%); children's and parents' screen time fell. Outcomes were mostly screen time and bullying, not abuse. | [abstract] |
| China 2025, *Children* | Survey, 2,075 adolescents | Restrictive mediation linked with **more** cyber-aggression and victimisation; parent-child trust linked with less. Cross-sectional. | [abstract] |

- **AAP (HealthyChildren, updated 22 Jan 2024)** [opened]: lists what controls do (block, filter by rating, time limits, chat monitoring, spending); "parental controls and limit setting works better alongside positive family communication and relationship-building"; cites no studies.
- **AAP Q&A portal (updated 13 Jul 2023)** [opened]: "existing parental control apps do not support the developmental process of adolescents"; household rules alone "does not seem to decrease children's exposure to online risks"; prefers a family online safety plan; if apps are used, combine them with open communication and **be transparent** with adolescents about monitoring.
- **Parents' barriers (Frontiers 2026 mixed-methods review, 19 studies)** [abstract]: limited knowledge, communication barriers, difficult mediation choices, digital-skills gaps, cultural factors, weak support.
- **Bottom line for the app:** for 5–12s, use both: settings that fit their age **and** frequent, calm talk. Restriction is linked with fewer risks, talk is linked with less harm, and neither has been proven to prevent abuse. Be open with children about any monitoring.

#### A7. "Sharenting"

- **Children's Commissioner for England, *Who knows what about me?*, 8 Nov 2018** [opened, full PDF]:
  - "On average, by the age of 13, parents have posted 1300 photos and videos of their child to social media." **No footnote is given for this figure.** Elsewhere it says parents of children up to 13 share "an average of 100 photos and videos of their child each year", citing a 2016 survey press release by Nominet (a domain registry). The 1,300 looks like 100 a year × 13. **Weak; don't use.**
  - "First day at school" photos "often unintentionally reveal the child's location or identity through details such as school logos and street signs."
  - A birthday photo with a location tag can give away name, date of birth and home address, three key pieces of information for identity theft (attributed to Barclays).
  - Top tip for parents: "Don't post photos and videos which reveal personal information about your children online… tagging a child at home on their birthday gives away their date of birth and home address." Also: change default passwords on smart toys and location-tracking watches.
- **Barclays forecast check:** the report says "Barclays has forecast that by 2030 'sharenting' will account for two-thirds of identity fraud facing young people over 18 and will cost £667 million per year", footnoted to a **BBC news article (May 2018)**, not a Barclays report [opened]. Secondary coverage gives £670m or £676m and "7.4 million incidents" [search]. I found **no published method, sample or model**; it's a 12-year projection by a bank, made in 2018, reported second-hand, with inconsistent figures. **Verdict: not valid evidence. Don't use it.**
- **Children's views:**
  - F1000Research 2025 systematic review (studies 2019–2024): children value favourable posts, but "many object to sharing without consent" [abstract].
  - Sarkadi et al. 2020, *J Paediatr Child Health*, "Children want parents to ask for permission before 'sharenting'" [title only; no abstract available].
  - Acta Psychologica 2026, a 10-dyad pilot with children aged 4–8: children found public sharing less acceptable than private photo-sharing [abstract]. Tiny; use only as colour, if at all.
- **UNICEF parenting page (undated)** [opened]: be mindful of what you share about your child, "including their photos and videos"; tight privacy settings; cover webcams when not in use.
- **AI misuse:** NCMEC 2025 tracks peer use of "nudify" apps [opened]; the NCA notes threats to share fake or AI-generated images [opened]. Whether ordinary public photos of children are being used this way at scale is unknown; don't claim it is.
- **Location data in photo files:** some phones save location data inside photo files (EXIF), which some sites strip and others don't [recall, unverified]. Don't add device-specific steps.

#### A8. Talking about it by age (scripts)

No trial compares scripts. The principles below are from sources tagged above: never their fault (NCA, CEOP, UNICEF); talk only to people they also know offline (CEOP); secrets someone asks you to keep are a warning sign (NSPCC Learning, CEOP; app's `body-safety`); tell a trusted adult (CEOP, UNICEF); "what if" practice (OJJDP brief, §B5). The wording is ours.

| Age | Say | Why |
|---|---|---|
| 5–7 | "If anything on a screen makes you feel worried, yucky or confused, come and show me. You won't be in trouble." / "We only chat with people we know in real life." | Tell-a-grown-up habit before any harm; CEOP's "people you also know offline". |
| 8–10 | "People online aren't always who they say. If someone asks for photos, asks you to keep a secret from me, or wants to chat on a different app, that's a tell-me moment." | Matches the three tactics in NSPCC Learning and CEOP: secrets, photos, moving to private chat. |
| 11–12 | "If anyone ever threatens to share a picture of you, real or fake, it is never your fault. Don't pay and don't reply. Come to me and we'll sort it out together. I won't take your phone away for telling me." | NCA advice; the last line removes the main reason children don't tell (keep it only if the parent means it). |

### Topic B — Home alone and out alone

#### B1. No legal age

- **UK (GOV.UK)** [opened]: "The law does not say an age when you can leave a child on their own", but "it's an offence to leave a child alone if it places them at risk"; parents can be prosecuted for leaving a child unsupervised "in a manner likely to cause unnecessary suffering or injury to health".
- **US:** state laws range from 8 to 14 where they exist (AAP, updated 30 Jan 2023) [opened].
- **Iran:** the 1399 law sets **no age** for leaving a child alone or letting them go out alone [opened, full text on ekhtebar.ir; a second secondary site, matching round 6]. See §6.

#### B2. Ages and readiness: what the bodies say

- **AAP / HealthyChildren (updated 30 Jan 2023)** [opened]: 11–12 typically seen as appropriate for "a few hours"; most children aren't mature enough for **regular** time alone until about 10–11; some parents may leave "a more mature 8- or 9-year-old" for about half an hour, occasionally.
- **NSPCC, *Is my child ready to be left alone?* (need-to-know guide, 2015)** [opened, PDF]:
  - "Never leave a baby or young child home alone, not even for a few minutes – whether they're sleeping or awake." Children under 5 are most at risk of accidents at home.
  - "Even if your child is approaching 12 they may not be mature enough to cope with an emergency. If you do need to leave them, make sure it's only for a short time."
  - "If your child is under 16 they shouldn't be left alone overnight."
  - "For a young child, half an hour can feel like a very long time."
  - "You should never leave a child home alone if they're unhappy to be left." Consider the child's wishes and feelings.
  - Babysitters: no legal minimum age, but the NSPCC recommends **16 or above**; leaving an older sibling in charge can be hard if the younger one is ill.
  - Neglect includes "constantly" leaving a child alone.
- **GOV.UK's summary of the NSPCC** [opened]: under-12s "rarely mature enough to be left alone for long periods"; babies, toddlers and very young children "should never be left alone".
- **Just One Norfolk (NHS Norfolk and Waveney child health site), undated** [opened]: "The NSPCC recommend that children are not left alone before the age of 12." This is a **stricter reading** than the NSPCC's own guide (see §4).
- **Not-ready signs (Just One Norfolk)** [opened]: doesn't understand or follow instructions; can't use a phone to call for help; is scared about being left; can't get food and drink safely; can't cope with an emergency or doesn't know who to call.
- **Readiness questions (AAP)** [opened in round 6]: maturity, thinking before acting, comfortable being alone, judgement, stays busy without screens, remembers safety rules.
- **RoSPA:** no home-alone readiness guidance found; the NSPCC guide points to RoSPA only for home safety [search]. The brief asked for RoSPA: **gap**.

#### B3. Practice steps

From the NSPCC guide [opened] and AAP [opened]:
1. **Ask how they feel.** NSPCC's quiz: "I'm worried about… I'm not sure what I'd do if… [I was alone longer than agreed / couldn't reach you / someone came to the door / there was an emergency]… It would help if…"
2. **Run "what if" scenarios** little and often: a power cut; a broken tap flooding the bathroom; they're hungry; you're late back; a stranger knocks at the door (NSPCC). How would they feel and what would they do?
3. **Check the house:** working smoke alarms, locks and windows; a spare key; nothing stopping them getting food or using the bathroom; knives, alcohol and medicines put away; who nearby they trust (NSPCC). Exit route for fire or gas, and where the smoke and carbon monoxide alarms are (AAP).
4. **Test runs:** keep the first times short, at a time of day with no complicated tasks such as cooking; extend as you both grow comfortable (AAP). "Build up the length of time" (NSPCC).
5. **Check-in:** the child contacts you when they get home; a quick call or text is enough (AAP).
6. **Review the rules** as the child grows (NSPCC).

#### B4. House rules

| Area | Agree beforehand | Source |
|---|---|---|
| Door | Whether they answer it, and who (if anyone) may come in. Never tell a visitor or caller they're alone. | AAP [opened] |
| Phone | Whether they answer it; what to say if someone asks for you. Keep your phone with you; they know your number. | AAP, NSPCC [opened] |
| Food and cooking | What they can eat; whether cooking is allowed. They practise with you first before using any appliance. | AAP [opened] |
| Friends | Whether friends can come over, how many, and other parents told no adult is home. | AAP, NSPCC [opened] |
| Online | Don't post that they're home alone (a post can bring unwelcome guests). Rules for screens while alone. | AAP, NSPCC, Just One Norfolk [opened] |
| Emergencies | In a life-threatening emergency, call the emergency number **first**, then you. Numbers written down. A plan for smelling gas or getting hurt. | AAP, NSPCC [opened] |
| Keys | What to do if locked out; a neighbour with a key. | AAP [opened] |
| First aid | A kit they can reach, and when and how to use it. | AAP [opened] |

(AAP's example kit contents include antiseptic; the app should name no products or amounts.)

#### B5. Going out alone (short trips, school walk)

- Round 6 already covers the errand ladder (shipped as `fr-errand-ladder`), road judgement (`walking-near-roads`) and the 16-country independent-mobility study (PSI 2015). Not repeated.
- **"Stranger danger" is not recommended.** *Child safety is more than a slogan* (McBride, OJJDP-sponsored brief, 2011) [opened]: NCMEC "does not support the 'stranger-danger' message"; "the majority of missing and exploited children are abducted by someone they know"; children taught it may not see friendly people as strangers, and may not realise "strangers can be helpful when a child is having trouble". Instead, teach them to "recognize and avoid potentially dangerous situations", to "take effective steps to remove themselves", and use "what if" scenarios during everyday outings.
- Asking someone in uniform or a shop worker if lost: [search] only (police and advocacy pages). App wording can be a practical suggestion ("decide together who they'd ask for help on the route"), not a sourced rule.
- No Iranian data on children's independent mobility (gap, as in round 6).

---

## 4. Where bodies disagree

| Question | Positions | App's cautious path |
|---|---|---|
| Youngest age for a short time home alone | AAP: a mature 8–9 for about half an hour, occasionally; regular time about 10–11; a few hours 11–12. NSPCC guide: no age; even near 12 may not cope with an emergency; if you must, keep it short; never babies or young children; no under-16s overnight. GOV.UK: under-12s rarely ready for **long** periods. Just One Norfolk (NHS): "not left alone before the age of 12". | No single age. Show the AAP and NSPCC side by side, say the NHS page is stricter, and stress readiness, practice, short first times and the child's own wish. Never imply 8 is "fine". |
| Restrictive vs active mediation | EU Kids Online: restriction lowers risk but costs skills; talk is linked with less harm. PLOS ONE 2025: restrictive reduced social-network time and risks. Nielsen 2019: no consistent link. China 2025: restriction linked with more cyber-victimisation. AAP: controls help but don't replace talk; monitoring apps don't suit adolescents. | Both, by age: settings for younger children, more talk and fewer locks as they grow, open about any monitoring. Say evidence is mostly links, not proof. |
| Keep evidence vs don't handle images | NCA and NCMEC: don't delete, keep messages and images. Handling child sexual images may itself be an offence [search]. | "Keep the messages and account details; don't forward or share the picture itself." Recheck before shipping. |
| "Stranger danger" | Older safety teaching: don't talk to strangers. NCMEC/OJJDP: misleading, since most harm comes from people children know and strangers can help. | Teach risky situations, "never go off with anyone without checking with me", and who to ask for help. |
| Size of sharenting risk | Barclays forecast (two-thirds of youth identity fraud by 2030) vs no published method. | Don't quantify. Explain the specific clues (birthday + location tag; school badge, street sign). |

## 5. Claims the app must NOT make

1. "Sharenting will cause two-thirds of identity fraud against young people by 2030" (Barclays). No method; second-hand; inconsistent figures.
2. "By 13, parents have posted 1,300 photos of their child." Unsourced in the Commissioner's report; based on a 2016 company survey.
3. "These signs mean your child is being groomed", or any sign checklist used as a verdict. The NSPCC says signs look like ordinary teenage behaviour.
4. "Parental controls keep children safe" or "monitoring apps prevent grooming". No such evidence; AAP is cautious.
5. "Restricting screens causes children to be safer" or "talking prevents abuse", as cause. All observational.
6. "Never talk to strangers" or "stranger danger" as the main rule.
7. "Only teenagers are targeted for sexual images." IWF data show 7–10s, and some under-6s.
8. Any IWF figure without its year and its nature (counts of actioned reports or images, not children affected).
9. "Self-generated" without quote marks or an explanation, or any phrasing that suggests the child chose this or is to blame.
10. "If your child is being blackmailed, pay to make it stop" or "delete everything". Both wrong (NCA, NCMEC).
11. "Report only if an adult is involved." Offenders pose as peers (P2 flag above).
12. Any legal age for home alone or going out alone in the UK or Iran. Neither has one.
13. "The NSPCC says never leave a child under 12 alone." Its guide doesn't say that (an NHS page does); it says under-12s are rarely ready for long periods.
14. "AI tools are turning your public photos of your child into abuse images" as a general risk. Unknown scale.
15. FATA's phone number or website until a test call or an official page confirms it.
16. Any statement about VPN use, filtering, or which international apps are allowed in Iran (political; outside the app's remit; see §6).

## 6. Iran-specific

### Law: قانون حمایت از اطفال و نوجوانان (approved 23/2/1399)

Read in full on ekhtebar.ir [opened, secondary legal site; official gazette not reachable]:
- **Art. 1(پ)**: «بی‌توجهی و سهل‌انگاری: کوتاهی در انجام تکالیفی از قبیل تأمین نیازهای اساسی و ضروری طفل و نوجوان یا وظایف مربوط به حضانت، ولایت، قیمومت، وصایت، سرپرستی، تربیت، نظارت یا مراقبت از آنان توسط والدین، اولیاء یا سرپرست قانونی یا هر شخصی که مکلف به آن است.» This matches round 6.
- **Art. 3**: listed situations count as «وضعیت مخاطره‌آمیز» **only if** they expose the child to victimisation or harm to physical, mental, social or moral health, security or education. Clause (الف) covers lack of a guardian, or neglect of legal and religious duties by anyone responsible. These situations trigger legal intervention and support, not automatically punishment.
- **Art. 9 and تبصره**: penalties for neglect by people **other than parents** when it leads to death, injury, etc. The note applies penalties to parents "up to the minimum" of each clause; for clause (ت), head, face or neck injury, only if parents didn't take the steps needed to prevent harm and the harm is attributable to them.
- **No article sets an age** for leaving a child alone or letting them go out alone. Confirmed by reading every article of chapters 1 and 3.
- **New for Topic A:**
  - **Art. 10(9)**: «برقراری ارتباط با طفل و نوجوان در فضای مجازی به منظور هرگونه آزار جنسی یا ارتباط جنسی نامشروع» is a crime (grade 6 penalty). Online grooming is explicitly criminal in Iran.
  - **Art. 10(6)**: giving a child access to obscene content is a crime. **Art. 10(5), (7), (8)**: using children in, or distributing, sexual material.
  - **Art. 17**: anyone who knows of a crime or serious imminent danger to a child and doesn't report it, though able to, is punishable. **Art. 18**: the reporter's identity is protected.
  - **Art. 19**: publishing the identity, information or images of a child victim, or a child in a risk situation, in a way that harms the child or family is a crime. Relevant if parents are tempted to post about an incident publicly.
- **Persian app wording (suggested, for Topic B):** «قانون ایران سن مشخصی برای تنها ماندن کودک در خانه یا تنها بیرون رفتن او تعیین نکرده است. اما طبق قانون حمایت از اطفال و نوجوانان (۱۳۹۹)، بی‌توجهی و سهل‌انگاری که کودک را در معرض آسیب قرار دهد «وضعیت مخاطره‌آمیز» به شمار می‌رود.» No penalties, no legal advice.
- **Persian app wording (Topic A):** «برقراری ارتباط با کودک در فضای مجازی به قصد آزار جنسی، طبق قانون حمایت از اطفال و نوجوانان جرم است و می‌توانید آن را به پلیس گزارش دهید.»

### Services

| Service | What | Status |
|---|---|---|
| 110 Police | Immediate danger | House-rule number |
| 123 Social Emergency (اورژانس اجتماعی, Behzisti) | Child in danger, family crisis | Verified in `helplines.ts` (round 4) |
| 1480 «صدای مشاور» (Behzisti) | Counselling, including parenting worries; not for emergencies | Verified in `helplines.ts` |
| FATA cyber police (پلیس فتا), cyber emergency line **096380**; site cyberpolice.ir; a children's campaign page cyberpolice.ir/cyberkids where suspicious cases can be reported | Online fraud, extortion, threats, hacking | **[search] only** (news and blog sites; official site unreachable). Test call and official page needed before use. |
| Formal complaint | Some sources say online complaints need registration on the judiciary's «ثنا» system first | [search]; don't use |

### Data and studies

- **Mehrabi & Dehghan, *Letter of Culture and Communication* (Imam Sadiq University), 2020/2021** [opened, summary]: interviews with 10 fathers and 10 mothers. Three strategies: restrictive (limiting time), instructive (warning about misuse), social co-use (sitting nearby). More worried parents mediate more; more-educated parents, mothers and parents of younger children mediate more. Qualitative, small.
- **Iranian Journal of Psychiatry, 2025**: a culturally adapted parenting package for digital technology (ages 0–18), 12 chapters (digital literacy, online safety, supervision, screen balance, family communication, legal and ethical issues), content-validity scores above 0.79; **not yet tested** in parents [abstract].
- **Digital Health, 2026**: protocol for a pilot cluster RCT of netiquette education in four primary schools in Khomeini Shahr, Isfahan [abstract]. No results yet.
- **Poll on VPN use, reported 13 Mordad 1405 (asriran.com)**: "about 23% of users aged 6 to 15 use a VPN"; pollster, sample and method not named [opened, secondary news]. **Don't use.**
- **Gap:** no Iranian survey found on children's contact with strangers online, sextortion, grooming, or parental controls. The National Computer Games Foundation's annual «نمای باز» survey may hold gaming data by age [search].
- **FATA article (asriran, 3/8/1401, "source: FATA police")** [opened]: general advice to stay alert, know children's online activity, teach safety, update software. It quotes an FBI and a DQ Institute figure second-hand. Not useful as evidence.

### App categories used by Iranian children (no brands)

From the sources above and [recall, unverified]: domestic messengers; international messengers and social media; mobile and console online games with text and voice chat (Iranian games had about 6% of the domestic mobile market in 1402 [search]); the national school learning platform, used for classes and teacher messages; video and short-video apps. Persian copy should say «هر برنامه و بازی‌ای که کودک استفاده می‌کند» and give settings advice that applies to all, without naming or ranking apps.

**Political neutrality:** filtering and VPNs are a live political topic in Iran. The app should not mention them. Advise "check the settings on every app and device", which is true whatever route a child uses.

### Iranian games age rating

Iran has its own game age-rating system («اسرا», ESRA) [recall, unverified]. Could replace other rating systems in Persian copy once checked.

### Traditions

Sharing photos of children with extended family is common and valued. Persian copy can frame this positively: send photos privately to family groups rather than public pages, and leave out school uniforms with logos, home location and birthdays together. Care of younger siblings by older ones is common: the NSPCC's caution (older siblings may not cope if the little one is ill) can be offered without judgement.

## 7. Recommended outlines

Only [opened] or [abstract] facts are used. Items needing a recheck are marked ⚑.

### Guide A — `online-safety-calm`

- **Title:** Online safety without the fear
- **Summary:** How grooming and sextortion work, what to say at each age, settings that help, and what to do if something happens.
- **Age:** 60–144 months
- **Shelf:** screens
- **Blocks:**
  1. **p** — Most of what children do online is fine, and fear doesn't keep them safe: being the person they tell does. Grooming means an adult building a child's trust in order to abuse them. Online, it can start in games, chat apps, social media or live streams. [NSPCC Learning; CEOP]
  2. **h** — How it usually works
  3. **list** — Pretending to be a child, or a friend of a friend. / Flattery, gifts and in-game presents. / Asking to keep the chat secret. / Moving to a private or different app. / Asking for photos, videos or personal details. / Messaging many children to see who replies. Abuse can happen without ever meeting. [NSPCC Learning; CEOP]
  4. **callout (science)** — In 2023, a UK internet watchdog found sexual images of children aged 7 to 10 in over 100,000 reports. Most were filmed on a device in the child's own home, after the child was tricked or pressured, with the abuser elsewhere. Children are never to blame. These are counts of material found, not how many children are harmed, and no one knows how common grooming is, because children rarely tell. [IWF 2023, IWF Apr 2024, NSPCC Learning]
  5. **table "What to say, by age" (Age | Try saying)** — the three rows from §A8, with the 11–12 row's last sentence kept only if the parent means it.
  6. **h** — Settings that help
  7. **list** — Younger children use devices in shared rooms. / Set up new games and apps together, with privacy at the strictest level. [AAP HealthyChildren] / Chat and voice chat off, or friends you know only. [existing `video-games`] / Tell older children if you use any monitoring. [AAP Q&A]
  8. **callout (science)** — In a survey of 25,000 European 9 to 16-year-olds, rules and restrictions went with fewer risks but also fewer skills. Talking with children went with less harm. Reviews since have found small or mixed effects. These are links, not proof, so most families do both. [Duerager & Livingstone 2012; Collier 2016; Nielsen 2019; PLOS ONE 2025]
  9. **p** — Signs worth a gentle chat, not a verdict: being very secretive about devices, gifts you can't explain, a new much-older friend, sudden mood changes, more or less time online. Many have ordinary explanations. [NSPCC Learning; UNICEF]
  10. **callout (safety)** — If someone asks your child for pictures or threatens to share one: don't pay; stop replying and block them on every account; don't delete the chat, and keep the account names; ⚑ don't forward the picture itself. Report to the police or your national reporting line, and the platform. Tell your child it isn't their fault and you'll handle it together. [NCA 2024; NCMEC] Persian: 110 for danger; 123 for a child at risk; ⚑ FATA once verified.
  11. **h** — Before you post their photo
  12. **list** — A birthday photo tagged at home gives away their birthday and address. / School badges and street signs show where they are. / Send family photos privately rather than posting publicly. / Ask your child first; many children dislike being posted without being asked. [Children's Commissioner 2018; F1000 review 2025; UNICEF]
  13. **p** — Links: Body safety by age; Video games; Ages 9 to 12 and the first phone.

### Guide B — `home-alone-out-alone`

(Replaces round 6's unshipped "Ready to go it alone?".)

- **Title:** Home alone and out alone
- **Summary:** No law gives a set age. Readiness signs, how to practise, house rules, and first trips out.
- **Age:** 72–144 months
- **Shelf:** safety
- **Blocks:**
  1. **p** — Neither the UK nor Iran sets an age for leaving a child at home or letting them go out alone. What matters is whether your child is ready, and whether it puts them at risk. [GOV.UK; 1399 law]
  2. **table "What experts say" (Source | Guidance)**
     - US paediatricians (AAP): Some parents leave a mature 8 or 9-year-old for about half an hour, now and then. Regular time alone usually suits about 10 to 11; a few hours, 11 to 12.
     - UK child protection charity (NSPCC): Never leave babies or young children alone, even for a few minutes. Even close to 12, a child may not cope with an emergency, so keep it short. No under-16s alone overnight.
     [AAP 2023; NSPCC 2015]
  3. **p** — Some UK health pages read this as "not before 12". Bodies differ, so start later and shorter if you're unsure. [Just One Norfolk]
  4. **list "Probably not ready yet if they…"** — find instructions hard to follow / can't use the phone to call for help / are scared of being left / can't get food and drink safely / don't know who to call in an emergency. Never leave a child who's unhappy to be left. [Just One Norfolk; NSPCC]
  5. **steps "Practise first"**
     - *Ask how they feel*: finish "I'm worried about…" and "It would help if…" together.
     - *Play "What if…?"*: a power cut, a flooding tap, being hungry, you running late, a knock at the door.
     - *Check the house*: alarms, locks, a spare key; knives, medicines and alcohol put away.
     - *Short test runs*: in daylight, with no cooking, and a message when they're in.
     - *Build up slowly*: and review the rules as they grow.
     [NSPCC; AAP]
  6. **table "House rules" (Rule | Agree)** — Door; Phone; Food and cooking; Friends; Online (don't post that you're home alone); Emergencies (call the emergency number first, then us); Keys. As in §B4, no empty cells.
  7. **h** — Going out alone
  8. **p** — Start with a short, known trip: see the errand ladder in Chores and independence, and Walking near roads. Instead of "never talk to strangers", which can backfire, teach "never go anywhere with anyone without checking with me", and practise what they'd do in tricky moments. A stranger might be the person who helps. Decide together who they'd ask on the route. [OJJDP/NCMEC brief 2011]
  9. **callout (safety)** — Put the emergency numbers where your child can see them, with your number and a trusted neighbour's. In Iran: 115 ambulance, 125 fire, 110 police. In a life-threatening emergency, they call that number first, then you. [AAP; NSPCC]
  10. **callout (tip)** — Asking an older brother or sister to babysit? The NSPCC recommends babysitters are at least 16; younger ones may not cope if a little one is ill. [NSPCC]
  11. **Persian-only callout** — the law wording in §6.

## 8. Daily tips (each 30 words or fewer)

| # | Tip | Age (months) | Source |
|---|---|---|---|
| 1 | Teach this rule early: no one online should ask you to keep a chat secret from me. A secret like that is one to bring to a grown-up. | 60–144 | NSPCC Learning; CEOP [opened] |
| 2 | Online friends your child hasn't met in real life are still strangers, however kind they seem. Agree that they chat only with people they also know offline. | 72–144 | CEOP [opened] |
| 3 | If someone online asks your child to move to a different app or a private chat, that's a moment to stop and tell you. Groomers often do this. | 84–144 | NSPCC Learning [opened] |
| 4 | If someone threatens to share a picture of your child: don't pay, stop replying, block them, and keep the messages. Report it, and tell your child it isn't their fault. | 96–144 | NCA 2024 [opened] |
| 5 | Many online games have voice chat as well as text. Check who your child can talk to, and set it to friends you know, or off. | 60–144 | CEOP [opened]; existing `video-games` |
| 6 | Filters and settings help most alongside talk. Once a week, ask what they've seen or played online, and listen more than you lecture. | 60–144 | AAP 2024 [opened]; EU Kids Online 2012 [opened] |
| 7 | Using an app to check an older child's phone? Tell them. US paediatricians advise being open about monitoring and pairing it with regular, calm talk. | 108–144 | AAP Q&A 2023 [opened] |
| 8 | Before posting a birthday photo, check for school badges, street signs and location tags. Together they can show your child's birthday and where you live. | 0–144 | Children's Commissioner 2018 [opened] |
| 9 | Send family photos to relatives privately rather than posting them publicly. It leaves your child more say over their own story as they grow. | 0–144 | UNICEF [opened]; F1000 review 2025 [abstract] |
| 10 | Before a first short spell home alone, ask how your child feels. If they're unhappy to be left, wait. Readiness includes wanting to. | 96–144 | NSPCC 2015 [opened] |
| 11 | Play "What if…?" over dinner: a power cut, a knock at the door, you running late. Their answers show what they're ready for. | 84–144 | NSPCC 2015 [opened] |
| 12 | First times home alone: keep them short, in daylight, with no cooking. Ask your child to message you when they get in. | 96–144 | AAP 2023 [opened] |
| 13 | Agree door rules before you go out: who, if anyone, may come in, and never telling a caller or visitor they're on their own. | 96–144 | AAP 2023 [opened] |
| 14 | Swap "never talk to strangers" for "never go anywhere with anyone without checking with me". A stranger may be the one who helps them. | 60–144 | OJJDP/NCMEC brief 2011 [opened] |
| 15 | Leaving an older child to babysit? The NSPCC recommends babysitters are at least 16. Younger ones may not cope if a little one falls ill. | 0–144 | NSPCC 2015 [opened] |

(Word counts checked: all are 30 words or fewer. Tip 4 overlaps the `first-phone` callout but is the only daily-tip version. Tip 14 is our framing of the brief's advice.)

## 9. Persian glossary

| English | Persian |
|---|---|
| Online grooming | جلب اعتماد کودک برای سوءاستفاده در فضای مجازی (گرومینگ) |
| Sextortion / financially motivated sexual extortion | اخاذی جنسی / باج‌گیری با تصاویر خصوصی |
| "Self-generated" imagery | تصاویر به‌اصطلاح «خودساخته» (کودک فریب خورده یا تحت فشار بوده) |
| Child sexual abuse material | محتوای آزار جنسی کودک |
| In-game chat / voice chat | گفتگوی درون بازی / چت صوتی |
| Parental controls | تنظیمات کنترل والدین |
| Restrictive / active mediation | نظارت محدودکننده / نظارت گفت‌وگومحور (میانجی‌گری فعال) |
| Privacy settings | تنظیمات حریم خصوصی |
| Block / report | مسدود کردن / گزارش دادن |
| Evidence (keep the messages) | مدارک (پیام‌ها را نگه دارید) |
| Sharenting | انتشار عکس و اطلاعات کودک توسط والدین در فضای مجازی |
| Location tag | برچسب مکان |
| Trusted adult | بزرگسال مورد اعتماد |
| Cyber police | پلیس فتا (پلیس فضای تولید و تبادل اطلاعات) |
| Home alone | تنها ماندن کودک در خانه |
| Going out alone | تنها بیرون رفتن کودک |
| Neglect (legal term) | بی‌توجهی و سهل‌انگاری |
| Risk situation (legal term) | وضعیت مخاطره‌آمیز |
| Readiness | آمادگی |
| Test run | تمرین کوتاه |
| Babysitter | پرستار کودک / مراقب |
| Social emergency 123 | اورژانس اجتماعی ۱۲۳ |
| Counsellor's Voice 1480 | صدای مشاور ۱۴۸۰ |

## 10. Recheck before shipping

1. **FATA:** confirm 096380, the official website, and whether a parent can report a child-related case online (cyberpolice.ir/cyberkids). Make a test call (governance rule: test call before adding a number).
2. **1399 law:** check Art. 1(پ), 3, 9 and its تبصره, 10(6) and 10(9), 17, 18 and 19 against the official gazette or qavanin.ir, and look for amendments since 1399.
3. **Image handling:** confirm with CEOP or UK police guidance (and an Iranian legal reviewer for Persian) the wording "don't forward or share the picture itself"; make sure "keep evidence" doesn't encourage parents to copy images.
4. **NSPCC pages** (blocked here): the current grooming page, the home-alone page (is "under 12 rarely… long periods" still the wording? Does it now say "not before 12", as the NHS Norfolk page claims?), and the 2024/25 police figures (7,263; platform shares).
5. **eSafety:** grooming, sextortion and gaming pages, for an Australian reporting route and any age-specific scripts.
6. **Ofcom 2025:** the 33% of 8–9-year-old online gamers playing with people they don't know.
7. **Report Remove** is UK-only and **Take It Down** is run by NCMEC: confirm which countries each serves before naming them in generic English copy; don't name them in Persian copy.
8. **Sarkadi 2020:** get the text to see what children were asked and found.
9. **Iranian ESRA age ratings:** confirm the name and how it works before using it in Persian copy.
10. **RoSPA:** find any RoSPA position on home alone (brief asked; none found).
11. **Fix P2** in `video-games` and the P3s in `first-phone` and `chores-independence` (table in §1).
12. Clinical and child-protection review of the "What to say" scripts, especially the 11–12 sextortion line, by a child psychologist or safeguarding professional.

## 11. Sources

| Title | Publisher | Year | URL | Tag |
|---|---|---|---|---|
| Grooming (research briefing) | NSPCC Learning | undated (refs to Dec 2025) | https://learning.nspcc.org.uk/research-resources/briefings/grooming | [opened] |
| Online grooming (parents) | CEOP Education, National Crime Agency | undated | https://www.ceopeducation.co.uk/parents/articles/online-grooming/ | [opened] |
| NCA issues urgent warning about sextortion | National Crime Agency | 29 Apr 2024 | https://nationalcrimeagency.gov.uk/news/nca-issues-urgent-warning-about-sextortion | [opened] |
| FMSE guidance for parents | CEOP Education | undated | https://www.ceopeducation.co.uk/professionals/guidance/fmse-guidance-parents | [opened; PDFs not read] |
| Sextortion | NCMEC | undated | https://www.missingkids.org/theissues/sextortion | [opened] |
| CyberTipline data (2025) | NCMEC | 2026 | https://www.missingkids.org/gethelpnow/cybertipline/cybertiplinedata | [opened] |
| 'Self-generated' child sexual abuse (Annual Report 2023) | Internet Watch Foundation | 2024 | https://www.iwf.org.uk/annual-report-2023/trends-and-data/self-generated-child-sex-abuse/ | [opened] |
| 'Self-generated' imagery (Annual Data & Insights 2025) | Internet Watch Foundation | 2026 | https://www.iwf.org.uk/annual-data-insights-report-2025/hashing-insights/self-generated-imagery/ | [opened] |
| Under sixes manipulated into 'disturbing' sexual abuse while playing alone online | Internet Watch Foundation | 23 Apr 2024 | https://www.iwf.org.uk/news-media/news/under-sixes-manipulated-into-disturbing-sexual-abuse-while-playing-alone-online-as-iwf-says-regulation-can-t-wait | [opened] |
| Keep your child safe online | UNICEF Parenting | undated | https://www.unicef.org/parenting/child-care/keep-your-child-safe-online | [opened] |
| How can parents support children's internet safety? (Duerager & Livingstone) | EU Kids Online, LSE | 2012 | https://researchonline.lse.ac.uk/id/eprint/42872 | [opened, summary] |
| Maximizing opportunities and minimizing risks for children online (Livingstone et al.) | Journal of Communication 67(1) | 2017 | https://researchonline.lse.ac.uk/id/eprint/68612 | [opened, summary] |
| Does parental mediation of media influence child outcomes? A meta-analysis (Collier et al.) | Developmental Psychology | 2016 | doi:10.1037/dev0000108 | [abstract] |
| Linking parental mediation practices to adolescents' problematic online screen use (Nielsen et al.) | Journal of Behavioral Addictions | 2019 | doi:10.1556/2006.8.2019.61 | [abstract] |
| Parental mediation and the use of social networks: a systematic review | PLOS ONE | 2025 | doi:10.1371/journal.pone.0312011 | [abstract] |
| Effect of digital safety interventions on parental practices: systematic review and meta-analysis | JMIR Pediatrics and Parenting | 2025 | doi:10.2196/70745 | [abstract] |
| Beyond restriction: relationship quality and gender… restrictive mediation and cyberbullying in China | Children (Basel) | 2025 | doi:10.3390/children12121604 | [abstract] |
| Challenges faced by parents in preventing online child sexual exploitation and abuse | Frontiers in Public Health | 2026 | doi:10.3389/fpubh.2026.1765426 | [abstract] |
| Parental controls for kids: setting safe and healthy media limits | AAP HealthyChildren | updated 22 Jan 2024 | https://www.healthychildren.org/English/family-life/Media/Pages/parental-controls-for-kids-setting-safe-and-healthy-media-limits.aspx | [opened] |
| Parental controls & digital monitoring (Q&A) | AAP Center of Excellence on Social Media and Youth Mental Health | updated 13 Jul 2023 | https://aap.org/en/patient-care/media-and-children/center-of-excellence-on-social-media-and-youth-mental-health/qa-portal/qa-portal-library/qa-portal-library-questions/parental-controls--digital-monitoring | [opened] |
| Who knows what about me? | Children's Commissioner for England | 8 Nov 2018 | https://assets.childrenscommissioner.gov.uk/wpuploads/2018/11/cco-who-knows-what-about-me.pdf | [opened] |
| Barclays sharenting forecast (secondary coverage) | various news sites | 2018 | e.g. https://www.4ni.co.uk/northern-ireland-news/244952/sharenting-major-risk-to-children-s-future-financial-security | [search] — not valid evidence |
| Parents' sharenting behaviours: a systematic review | F1000Research | 2025 | doi:10.12688/f1000research.161540.2 | [abstract] |
| Young children's perspectives on parental photo-sharing (CICP pilot) | Acta Psychologica | 2026 | doi:10.1016/j.actpsy.2026.108043 | [abstract] |
| Children want parents to ask for permission before 'sharenting' (Sarkadi et al.) | J Paediatr Child Health | 2020 | doi:10.1111/jpc.14945 | [title only] |
| The law on leaving your child on their own | GOV.UK | current | https://www.gov.uk/law-on-leaving-your-child-home-alone | [opened] |
| Is my child ready to be left alone? (need-to-know guide) | NSPCC (hosted by Family Support NI) | 2015 | https://www.familysupportni.gov.uk/Content/uploads/userUploads/NSPCC%20Home%20Alone%20Guide.pdf | [opened] |
| Home alone | Just One Norfolk (NHS Norfolk and Waveney) | undated | https://justonenorfolk.nhs.uk/staying-safe/staying-safe-in-the-home/home-alone | [opened] |
| Is your child ready to stay home alone? | AAP HealthyChildren | updated 30 Jan 2023 | https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Is-Your-Child-Ready-to-Stay-Home-Alone.aspx | [opened] |
| Child safety is more than a slogan: stranger danger warnings not effective (McBride) | Office of Justice Programs (OJJDP) | 2011 | https://www.ojp.gov/library/publications/child-safety-more-slogan-stranger-danger-warnings-not-effective-keeping-kids | [opened, abstract record] |
| قانون حمایت از اطفال و نوجوانان (۱۳۹۹/۲/۲۳), full text | ekhtebar.ir (secondary legal site) | 1399 | https://www.ekhtebar.ir/قانون-حمایت-از-اطفال-و-نوجوانان/ | [opened] |
| Parental mediation of children's internet usage: parental mediation strategies in Iran (Mehrabi & Dehghan) | Letter of Culture and Communication 5(1) | 2020/2021 | https://lcc.isu.ac.ir/article_75709_en.html | [opened, summary] |
| Designing and compiling a special parenting package to use digital technology in Iranian children and adolescents | Iranian Journal of Psychiatry | 2025 | doi:10.18502/ijps.v20i4.19681 | [abstract] |
| Netiquette education in primary school students in Iran: pilot cluster RCT protocol | Digital Health | 2026 | doi:10.1177/20552076261499664 | [abstract] |
| امنیت آنلاین کودکان چگونه به خطر می‌افتد (source: FATA police) | asriran.com | 3/8/1401 | https://www.asriran.com/fa/news/863448 | [opened; weak] |
| VPN poll, children 6–15 | asriran.com | 13/5/1405 | https://www.asriran.com/fa/news/1182172 | [opened; pollster unnamed — don't use] |
| FATA cyber emergency line 096380 | news and blog sites (e.g. tejaratnews.com) | various | https://tejaratnews.com/بخش-جامعه-46/950577-مرکز-امداد-فوریت-های-پلیس-فتا-فراجا-چه-خدماتی-ارائه-می-دهد | [search] |
| cyberpolice.ir/cyberkids campaign page | FATA police via news | 1400s | https://cyberpolice.ir/cyberkids | [search; unreachable] |
| NSPCC: online grooming crimes 2023/24 and 2024/25 | NSPCC press releases via secondary sites | 2024, 2025 | https://www.nspcc.org.uk/about-us/news-opinion/2024/online-grooming-crimes-increase/ | [search; 403] |
| Ofcom Children and parents: media use and attitudes 2025 | Ofcom | 2025 | https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/media-literacy-research/children/childrens-media-use-and-attitudes-report-2025/childrens-media-literacy-report-2025.pdf | [search; 403] |
| eSafety gaming and grooming pages | eSafety Commissioner | various | https://www.esafety.gov.au/parents/issues-and-advice/unwanted-contact-grooming | [search; unreachable] |
