import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAgeOf } from '../store/hooks';
import type { Child } from '../store/model';
import { actions, selectActiveChild, useStore } from '../store/store';
import { haptic } from '../platform';
import { ChildForm } from './ChildForm';
import { Emoji } from './Emoji';
import { Icon } from './Icon';
import { Sheet } from './Sheet';
import { Glyph, ListGroup, ListRow } from './ui';
import { num, t } from '../i18n';

export function Avatar({ child, size }: { child: Pick<Child, 'emoji' | 'color'>; size?: 'sm' | 'lg' | 'xl' }) {
  return (
    <span className={`avatar ${child.color} ${size ?? ''}`} aria-hidden="true">
      <Emoji e={child.emoji} eager />
    </span>
  );
}

function ChildRow({ child, active, onPick }: { child: Child; active: boolean; onPick: () => void }) {
  const age = useAgeOf(child);
  return (
    <button type="button" className="row-item" aria-pressed={active} onClick={onPick}>
      <Avatar child={child} />
      <span className="row-text">
        <span className="row-title">{child.name}</span>
        <span className="row-sub">
          {age?.label}
          {age?.correctedLabel && ` · ${t('corrected {age}', { age: age.correctedLabel })}`}
        </span>
      </span>
      {active && (
        <span className="row-check">
          <Icon name="check" size={20} strokeWidth={3} />
        </span>
      )}
    </button>
  );
}

/**
 * The active child's avatar in the navigation bar. Tapping it opens the family sheet: switch child, add one,
 * play together and settings — one consistent place, like the account button in native apps.
 */
export function ProfileButton() {
  const children = useStore((s) => s.children);
  const active = useStore(selectActiveChild);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [adding, setAdding] = useState(false);

  const close = () => {
    setOpen(false);
    setAdding(false);
  };

  if (!active) {
    return (
      <Link to="/welcome" className="icon-btn glass" aria-label={t('Add your child')}>
        <Icon name="plus" size={20} strokeWidth={2.6} />
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        className="profile-btn"
        onClick={() => {
          haptic();
          setOpen(true);
        }}
        aria-label={t('{name}’s profile. Switch child or open settings', { name: active.name })}
      >
        <Avatar child={active} />
        {children.length > 1 && <span className="profile-count">{num(children.length)}</span>}
      </button>
      {open && (
        <Sheet title={adding ? t('Add a child') : t('Your family')} onClose={close}>
          {adding ? (
            <ChildForm
              taken={children}
              submitLabel={t('Add child')}
              onCancel={() => setAdding(false)}
              onSubmit={(draft) => {
                actions.addChild(draft);
                close();
              }}
            />
          ) : (
            <div className="stack-lg">
              <ListGroup label={t('Children')}>
                {children.map((c) => (
                  <ChildRow
                    key={c.id}
                    child={c}
                    active={c.id === active.id}
                    onPick={() => {
                      haptic();
                      actions.setActiveChild(c.id);
                      close();
                    }}
                  />
                ))}
                <ListRow onClick={() => setAdding(true)} lead={<Glyph icon="plus" />} title={t('Add a child')} chevron={false} />
              </ListGroup>
              <ListGroup>
                {children.length > 1 && (
                  <ListRow
                    onClick={() => {
                      close();
                      navigate('/together');
                    }}
                    lead={<Glyph icon="users" tone="var(--d-feelings)" />}
                    title={t('Play together')}
                    chevron
                  />
                )}
                <ListRow
                  onClick={() => {
                    close();
                    navigate('/help');
                  }}
                  lead={<Glyph icon="lifebuoy" tone="var(--d-feelings)" />}
                  title={t('Help right now')}
                  chevron
                />
                <ListRow
                  onClick={() => {
                    close();
                    navigate('/search');
                  }}
                  lead={<Glyph icon="search" tone="var(--d-thinking)" />}
                  title={t('Search everything')}
                  chevron
                />
                <ListRow
                  onClick={() => {
                    close();
                    navigate('/settings');
                  }}
                  lead={<Glyph icon="settings" tone="var(--ink-3)" />}
                  title={t('Settings')}
                  chevron
                />
              </ListGroup>
            </div>
          )}
        </Sheet>
      )}
    </>
  );
}
