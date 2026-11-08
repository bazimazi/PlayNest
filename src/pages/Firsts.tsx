import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Emoji } from '../components/Emoji';
import { Icon } from '../components/Icon';
import { BackButton, Empty, Page, Section } from '../components/Page';
import { Sheet } from '../components/Sheet';
import { toast } from '../components/Toast';
import { SwipeRow } from '../components/ui';
import { FIRSTS } from '../data/firsts';
import { toISODate } from '../lib/dates';
import { haptic } from '../platform';
import { useActiveChild } from '../store/hooks';
import type { FirstEntry } from '../store/model';
import { actions, useStore } from '../store/store';
import { DateField } from '../components/DateField';
import { formatDate, t } from '../i18n';

/** Long dates in the reader's own format. */
const longDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return formatDate(new Date(y, m - 1, d), { day: 'numeric', month: 'long', year: 'numeric' });
};

/** Firsts worth keeping. The suggestions are ideas, not a checklist: nothing here is ever due, and nothing is counted. */
export default function Firsts() {
  const { child, age } = useActiveChild();
  const all = useStore((s) => s.firsts);
  const [adding, setAdding] = useState<{ title: string; emoji: string; firstId?: string } | null>(null);
  const [date, setDate] = useState(() => toISODate(new Date()));
  const [note, setNote] = useState('');
  const [custom, setCustom] = useState('');

  if (!child || !age) {
    return (
      <Page world="leaf" title={t('Firsts')} back={<BackButton fallback="/growth" />}>
        <Empty mood="happy" text={t('Add your child to keep their firsts.')}>
          <Link to="/welcome" className="btn btn-primary">
            {t('Add your child')}
          </Link>
        </Empty>
      </Page>
    );
  }

  const mine = all.filter((f) => f.childId === child.id).sort((a, b) => (a.date < b.date ? 1 : -1));
  const taken = new Set(mine.map((f) => f.firstId));
  const ideas = FIRSTS.filter((f) => f.minMonths <= age.months && age.months <= f.maxMonths && !taken.has(f.id));

  const open = (title: string, emoji: string, firstId?: string) => {
    haptic();
    setAdding({ title, emoji, firstId });
    setDate(toISODate(new Date()));
    setNote('');
  };

  const remove = (f: FirstEntry) => {
    actions.deleteFirst(f.id);
    toast(t('Removed'), { label: t('Undo'), onClick: () => actions.restoreFirst(f) });
  };

  return (
    <Page world="leaf" title={t('Firsts')} heading={t('{name}’s firsts', { name: child.name })} subtitle={t('The little things you’ll want to remember')} back={<BackButton fallback="/growth" />}>
      <form
        className="first-add"
        onSubmit={(e) => {
          e.preventDefault();
          if (custom.trim()) {
            open(custom.trim(), '⭐');
            setCustom('');
          }
        }}
      >
        <label htmlFor="first-custom" className="sr-only">
          {t('Add a first of your own')}
        </label>
        <input id="first-custom" className="big-input" value={custom} placeholder={t('First time…')} maxLength={80} onChange={(e) => setCustom(e.target.value)} />
        <button type="submit" className="btn btn-primary" disabled={!custom.trim()}>
          {t('Add')}
        </button>
      </form>

      {mine.length > 0 && (
        <Section title={t('Kept')} id="kept-title">
          <div className="list">
            {mine.map((f) => (
              <SwipeRow key={f.id} onDelete={() => remove(f)} deleteLabel={t('Remove {name}', { name: f.title })}>
                <div className="entry">
                  <Emoji e={FIRSTS.find((x) => x.id === f.firstId)?.emoji ?? '⭐'} size={36} />
                  <div className="entry-body">
                    <span className="entry-title">{f.title}</span>
                    <span className="entry-meta">{longDate(f.date)}</span>
                    {f.note && <span className="entry-note">{f.note}</span>}
                  </div>
                </div>
              </SwipeRow>
            ))}
          </div>
          <p className="footnote">{t('Swipe left to remove.')}</p>
        </Section>
      )}

      {ideas.length > 0 && (
        <Section title={t('Has this happened yet?')} id="ideas-title">
          <p className="section-note">{t('Only ideas. Tap if you’d like to keep one.')}</p>
          <div className="chips">
            {ideas.slice(0, 24).map((f) => (
              <button key={f.id} type="button" className="chip" onClick={() => open(f.title, f.emoji, f.id)}>
                <Emoji e={f.emoji} size={20} /> {f.title}
              </button>
            ))}
          </div>
        </Section>
      )}

      {adding && (
        <Sheet title={adding.title} onClose={() => setAdding(null)}>
          {(close) => (
            <div className="stack-lg">
              <label className="field">
                <span className="label">{t('When')}</span>
                <DateField id="first-date" className="big-input" value={date} max={toISODate(new Date())} onChange={setDate} />
              </label>
              <label className="field">
                <span className="label">{t('Anything to remember? (optional)')}</span>
                <textarea className="big-input" rows={3} value={note} maxLength={400} onChange={(e) => setNote(e.target.value)} />
              </label>
              <button
                type="button"
                className="btn btn-primary btn-block"
                disabled={!date}
                onClick={() => {
                  haptic('success');
                  actions.addFirst({ childId: child.id, firstId: adding.firstId, title: adding.title, date, note: note.trim() || undefined });
                  close();
                  toast(t('🌟 Kept'));
                }}
              >
                <Icon name="check" size={20} strokeWidth={3} /> {t('Keep this')}
              </button>
            </div>
          )}
        </Sheet>
      )}
    </Page>
  );
}
