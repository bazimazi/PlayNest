import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Emoji } from '../components/Emoji';
import { Icon } from '../components/Icon';
import { BackButton, Empty, Page, Section } from '../components/Page';
import { Sheet } from '../components/Sheet';
import { toast } from '../components/Toast';
import { Glyph, ListGroup, ListRow } from '../components/ui';
import type { RoutineTemplate } from '../data/packs';
import { ROUTINE_TEMPLATES } from '../data/routines';
import { commaList, t } from '../i18n';
import { haptic } from '../platform';
import { useActiveChild } from '../store/hooks';
import type { Routine, RoutineStep } from '../store/model';
import { actions, newId, useStore } from '../store/store';

/** Pictures a parent can give a step. All have bundled artwork; a routine is read by someone who can't read yet. */
const STEP_EMOJI = ['☀️', '🌙', '🚽', '🦷', '🧼', '👕', '🧦', '👟', '🥣', '🍽️', '🎒', '📚', '🛁', '💧', '🧸', '🧹', '🚗', '🌳', '🤗', '🎵', '⏰', '✏️', '🍎', '🧥'];

function RoutineEditor({ routine, onClose }: { routine: Routine; onClose: () => void }) {
  const [name, setName] = useState(routine.name);
  const [steps, setSteps] = useState<RoutineStep[]>(routine.steps);

  const change = (id: string, patch: Partial<RoutineStep>) => setSteps(steps.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  const move = (index: number, by: number) => {
    const next = [...steps];
    const [item] = next.splice(index, 1);
    next.splice(index + by, 0, item);
    setSteps(next);
  };

  return (
    <Sheet title={t('Edit {name}', { name: routine.name })} onClose={onClose}>
      {(close) => (
        <div className="stack-lg">
          <label className="field">
            <span className="label">{t('Name')}</span>
            <input className="big-input" value={name} maxLength={30} onChange={(e) => setName(e.target.value)} />
          </label>
          <ol className="routine-edit">
            {steps.map((s, i) => (
              <li key={s.id}>
                <div className="routine-edit-top">
                  <input
                    className="big-input"
                    aria-label={t('Step {n} name', { n: i + 1 })}
                    value={s.label}
                    maxLength={24}
                    onChange={(e) => change(s.id, { label: e.target.value })}
                  />
                  <button type="button" className="icon-btn sm" aria-label={t('Move {label} up', { label: s.label })} disabled={i === 0} onClick={() => move(i, -1)}>
                    <Icon name="up" size={16} strokeWidth={2.8} />
                  </button>
                  <button type="button" className="icon-btn sm" aria-label={t('Move {label} down', { label: s.label })} disabled={i === steps.length - 1} onClick={() => move(i, 1)}>
                    <Icon name="down" size={16} strokeWidth={2.8} />
                  </button>
                  <button type="button" className="icon-btn sm" aria-label={t('Remove {label}', { label: s.label })} onClick={() => setSteps(steps.filter((x) => x.id !== s.id))}>
                    <Icon name="x" size={16} strokeWidth={2.8} />
                  </button>
                </div>
                <div className="routine-emoji" role="group" aria-label={t('Picture for {label}', { label: s.label })}>
                  {STEP_EMOJI.map((e) => (
                    <button key={e} type="button" aria-pressed={s.emoji === e} aria-label={t('Use picture {emoji}', { emoji: e })} onClick={() => change(s.id, { emoji: e })}>
                      <Emoji e={e} size={24} />
                    </button>
                  ))}
                </div>
                <div className="routine-minutes">
                  <span>{t('Timer')}</span>
                  <button type="button" className="chip sm" aria-pressed={!s.minutes} onClick={() => change(s.id, { minutes: undefined })}>
                    {t('None')}
                  </button>
                  {[2, 5, 10].map((m) => (
                    <button key={m} type="button" className="chip sm" aria-pressed={s.minutes === m} onClick={() => change(s.id, { minutes: m })}>
                      {t('{n} min', { n: m })}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ol>
          <button
            type="button"
            className="btn btn-block"
            disabled={steps.length >= 10}
            onClick={() => setSteps([...steps, { id: newId(), emoji: '⭐', label: t('New step') }])}
          >
            <Icon name="plus" size={18} strokeWidth={2.8} /> {t('Add a step')}
          </button>
          <div className="btn-row">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                actions.deleteRoutine(routine.id);
                toast(t('Routine removed'), { label: t('Undo'), onClick: () => actions.restoreRoutine(routine) });
                close();
              }}
            >
              <Icon name="trash" size={18} /> {t('Remove')}
            </button>
            <button
              type="button"
              className="btn btn-primary grow"
              disabled={!name.trim() || steps.length < 2}
              onClick={() => {
                actions.updateRoutine(routine.id, { name: name.trim(), steps });
                toast(t('Saved'));
                close();
              }}
            >
              {t('Save')}
            </button>
          </div>
        </div>
      )}
    </Sheet>
  );
}

export default function Routines() {
  const { child, age } = useActiveChild();
  const navigate = useNavigate();
  const all = useStore((s) => s.routines);
  const routines = all.filter((r) => r.childId === child?.id);
  const [editing, setEditing] = useState<Routine | null>(null);

  if (!child || !age) {
    return (
      <Page world="sun" title={t('Routines')} back={<BackButton fallback="/explore" />}>
        <Empty mood="happy" text={t('Add your child to set up a picture routine.')}>
          <Link to="/welcome" className="btn btn-primary">
            {t('Add your child')}
          </Link>
        </Empty>
      </Page>
    );
  }

  const add = (template: RoutineTemplate) => {
    haptic('success');
    const id = actions.addRoutine({
      childId: child.id,
      templateId: template.id,
      name: template.name,
      emoji: template.emoji,
      steps: template.steps.map((s) => ({ id: newId(), emoji: s.emoji, label: s.label, minutes: s.minutes })),
    });
    toast(t('{name} added', { name: template.name }));
    return id;
  };

  const why = (r: { templateId?: string; name: string }) => ROUTINE_TEMPLATES.find((t) => t.id === r.templateId || t.name === r.name)?.why;

  const templates = ROUTINE_TEMPLATES.filter(
    (t) => t.minMonths <= age.months && age.months <= t.maxMonths && !routines.some((r) => r.templateId === t.id || r.name === t.name),
  );

  return (
    <Page world="sun" title={t('Routines')} heading={t('Picture routines')} subtitle={t('So {name} knows what’s next', { name: child.name })} back={<BackButton fallback="/explore" />}>
      {routines.length > 0 && (
        <Section title={t('{name}’s routines', { name: child.name })} id="mine-title">
          <div className="routine-cards">
            {routines.map((r) => (
              <article key={r.id} className="card routine-card">
                <div className="routine-card-top">
                  <Emoji e={r.emoji} size={36} />
                  <div>
                    <h3>{r.name}</h3>
                    <p className="routine-peek" aria-label={commaList(r.steps.map((s) => s.label))}>
                      {r.steps.slice(0, 6).map((s) => (
                        <Emoji key={s.id} e={s.emoji} size={22} />
                      ))}
                    </p>
                  </div>
                </div>
                {why(r) && <p className="footnote routine-why">{why(r)}</p>}
                <div className="btn-row">
                  <button type="button" className="btn" onClick={() => setEditing(r)}>
                    <Icon name="edit" size={18} /> {t('Edit')}
                  </button>
                  <button type="button" className="btn btn-primary grow" onClick={() => navigate(`/kid/${r.id}`)}>
                    <Icon name="play" size={18} filled /> {t('Start')}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}

      {templates.length > 0 ? (
        <Section title={routines.length ? t('Add another') : t('Start with one')} id="templates-title">
          <ListGroup>
            {templates.map((template) => (
              <ListRow
                key={template.id}
                onClick={() => add(template)}
                lead={<Glyph emoji={template.emoji} tone="var(--d-hands)" />}
                title={template.name}
                subtitle={
                  <span className="routine-peek" aria-label={commaList(template.steps.map((s) => s.label))}>
                    {template.steps.slice(0, 6).map((s) => (
                      <Emoji key={s.label} e={s.emoji} size={20} />
                    ))}
                  </span>
                }
                value={<Icon name="plus" size={18} strokeWidth={2.8} />}
                ariaLabel={t('Add the {name} routine', { name: template.name })}
              />
            ))}
          </ListGroup>
        </Section>
      ) : (
        routines.length === 0 && <Empty mood="calm" compact text={t('No routines for this age yet.')} />
      )}

      <p className="footnote">
        {t('When you start one, the phone shows {name} big pictures, one step at a time. No words needed, nothing to buy, nothing leaves the phone.', { name: child.name })}
      </p>

      {editing && <RoutineEditor routine={editing} onClose={() => setEditing(null)} />}
    </Page>
  );
}
