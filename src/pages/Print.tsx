import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ActivityArt } from '../components/Art';
import { Icon } from '../components/Icon';
import { useWorld } from '../components/Page';
import { ACTIVITY_BY_ID } from '../data/activities';
import { MILESTONE_CATEGORY_INFO } from '../data/domains';
import { FIRSTS } from '../data/firsts';
import { MILESTONES, currentChecklistAge } from '../data/milestones';
import { MILESTONE_CATEGORIES } from '../data/types';
import { commaList, formatDate, language, t } from '../i18n';
import { formatAgeRange } from '../lib/age';
import { parseISODate, toISODate } from '../lib/dates';
import { useActiveChild } from '../store/hooks';
import { useStore } from '../store/store';

/** English prints the stored date as it is. Another language shows it in its own calendar and digits. */
const shownDate = (iso: string) => (language() === 'en' ? iso : formatDate(parseISODate(iso), { day: 'numeric', month: 'long', year: 'numeric' }));

/** Makes every picture ready, so a sheet doesn't come out with holes in it. */
async function printPage(fileName: string) {
  const images = [...document.images];
  images.forEach((i) => (i.loading = 'eager'));
  await Promise.all(images.map((i) => i.decode().catch(() => {})));
  const title = document.title;
  document.title = fileName;
  window.addEventListener('afterprint', () => (document.title = title), { once: true });
  window.print();
}

function PrintBar({ fileName }: { fileName: string }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="print-bar no-print">
      <button type="button" className="btn" onClick={() => (location.key !== 'default' ? navigate(-1) : navigate('/'))}>
        <Icon name="left" size={20} strokeWidth={2.6} /> {t('Back')}
      </button>
      <button type="button" className="btn btn-primary grow" onClick={() => void printPage(fileName)}>
        <Icon name="print" size={20} strokeWidth={2.4} /> {t('Print or save PDF')}
      </button>
    </div>
  );
}

const ANSWER_LABEL = { yes: t('Yes'), notyet: t('Not yet'), unsure: t('Not sure') } as const;

/**
 * One page to take to a visit: what the parent has seen, in their own answers. Prepared by the parent, and it says so:
 * it isn't a record or a screening. It leaves the phone only if the parent prints or shares it.
 */
export function PrintSummary() {
  useWorld('sky');
  const { child, age } = useActiveChild();
  const answers = useStore((s) => (child ? s.milestones[child.id] : undefined));
  const allFirsts = useStore((s) => s.firsts);
  const firsts = allFirsts.filter((f) => f.childId === child?.id);
  const [questions, setQuestions] = useState('');

  if (!child || !age) {
    return (
      <main className="print-doc">
        <p>{t('Add your child first.')}</p>
        <Link to="/welcome" className="btn btn-primary no-print">
          {t('Add your child')}
        </Link>
      </main>
    );
  }

  const today = toISODate(new Date());
  const checklistAge = currentChecklistAge(age.months);
  const showChecklist = age.months <= 66;
  const checklist = MILESTONES.filter((m) => m.ageMonths === checklistAge);
  const recentFirsts = [...firsts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 6);

  return (
    <main className="print-doc">
      {/* i18n-ignore: the name of the saved file, kept free of the bidi marks t() would put in it */}
      <PrintBar fileName={`PlayNest-${child.name}-summary-${today}`} />
      <header>
        <h1>{child.name}</h1>
        <p>
          {age.correctedLabel
            ? t('{age} old, corrected age {corrected} · Born {born} · Prepared {today}', { age: age.label, corrected: age.correctedLabel, born: shownDate(child.birthDate), today: shownDate(today) })
            : t('{age} old · Born {born} · Prepared {today}', { age: age.label, born: shownDate(child.birthDate), today: shownDate(today) })}
        </p>
      </header>

      {showChecklist && (
        <section>
          <h2>{checklistAge % 12 === 0 ? t('{n}-year milestones, as seen at home', { n: checklistAge / 12 }) : t('{n}-month milestones, as seen at home', { n: checklistAge })}</h2>
          <div className="print-grid">
            {MILESTONE_CATEGORIES.map((cat) => (
              <div key={cat}>
                <h3>{MILESTONE_CATEGORY_INFO[cat].label}</h3>
                <ul>
                  {checklist
                    .filter((m) => m.category === cat)
                    .map((m) => {
                      const a = answers?.[m.id];
                      return (
                        <li key={m.id}>
                          <b>{a ? ANSWER_LABEL[a] : '—'}</b> {m.text}
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
          </div>
          <p className="print-small">{t('Checklist adapted from CDC “Learn the Signs. Act Early.” A dash means not answered yet.')}</p>
        </section>
      )}

      {recentFirsts.length > 0 && (
        <section>
          <h2>{t('Recent firsts')}</h2>
          <ul>
            {recentFirsts.map((f) => (
              <li key={f.id}>
                {shownDate(f.date)}: {FIRSTS.find((x) => x.id === f.firstId)?.title ?? f.title}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2>{t('What I’d like to ask')}</h2>
        <textarea className="print-questions no-print" rows={4} value={questions} placeholder={t('Type your questions (these aren’t saved)')} onChange={(e) => setQuestions(e.target.value)} />
        <p className="print-answers print-only">{questions || '\n\n\n'}</p>
      </section>

      <footer>{t('Prepared by the parent with PlayNest. Not a medical record and not a screening.')}</footer>
    </main>
  );
}

/** A game on paper, for a grandparent, a childminder or the fridge door. */
export function PrintCard() {
  useWorld('sky');
  const { id = '' } = useParams();
  const a = ACTIVITY_BY_ID.get(id);
  useEffect(() => {
    document.documentElement.classList.add('printing');
    return () => document.documentElement.classList.remove('printing');
  }, []);

  if (!a) {
    return (
      <main className="print-doc">
        <p>{t('We couldn’t find that game.')}</p>
      </main>
    );
  }

  return (
    <main className="print-doc print-card">
      {/* i18n-ignore: the name of the saved file */}
      <PrintBar fileName={`PlayNest-${a.id}`} />
      <div className="print-card-top">
        <ActivityArt activity={a} className="print-art" eager />
        <div>
          <h1>{a.title}</h1>
          <p>{a.summary}</p>
          <p className="print-small">
            {formatAgeRange(a.minMonths, a.maxMonths)} · {t('{n} min', { n: a.durationMin })}
            {a.origin ? ` · ${a.origin}` : ''}
          </p>
        </div>
      </div>
      {a.materials.length > 0 && (
        <section>
          <h2>{t('You’ll need')}</h2>
          <p>{commaList(a.materials)}</p>
        </section>
      )}
      {a.safety && a.safety.length > 0 && (
        <section className="print-safety">
          <h2>{t('Keep it safe')}</h2>
          <ul>
            {a.safety.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      )}
      <section>
        <h2>{t('How to play')}</h2>
        <ol>
          {a.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>
      <section>
        <h2>{t('Things to say')}</h2>
        <ul>
          {a.talk.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
      <footer>{t('From PlayNest. Ideas for play, not medical advice.')}</footer>
    </main>
  );
}
