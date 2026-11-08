import { useState, type FormEvent } from 'react';
import { childAge } from '../lib/age';
import { toISODate } from '../lib/dates';
import { INTERESTS } from '../lib/interests';
import { haptic } from '../platform';
import { AVATAR_COLORS, AVATAR_EMOJIS, type Child } from '../store/model';
import { Emoji } from './Emoji';
import { Icon } from './Icon';
import { DateField } from './DateField';
import { asciiDigits, num, t } from '../i18n';

export type ChildDraft = Omit<Child, 'id'>;

/** First avatar emoji and colour that no existing child uses, so siblings are easy to tell apart. */
export function freshAvatar(taken: Pick<Child, 'emoji' | 'color'>[]): { emoji: string; color: string } {
  const emoji = AVATAR_EMOJIS.find((e) => !taken.some((t) => t.emoji === e)) ?? AVATAR_EMOJIS[taken.length % AVATAR_EMOJIS.length];
  const color = AVATAR_COLORS.find((c) => !taken.some((t) => t.color === c)) ?? AVATAR_COLORS[taken.length % AVATAR_COLORS.length];
  return { emoji, color };
}

const MAX_WEEKS_EARLY = 17;
const clampWeeks = (n: number) => Math.max(1, Math.min(MAX_WEEKS_EARLY, n || 1));

export const todayISO = () => toISODate(new Date());
export const minBirthISO = () => toISODate(new Date(new Date().getFullYear() - 12, 0, 1));

const MAX_INTERESTS = 3;

/** "What are they into?" Optional, and easy to change: interests move on. It makes a game easier to get started, nothing more. */
export function InterestPicker({ name, value, onChange }: { name: string; value: string[]; onChange: (next: string[]) => void }) {
  return (
    <div className="field">
      <span className="label">{t('What’s {name} into right now? (up to {n}, or skip)', { name, n: MAX_INTERESTS })}</span>
      <div className="chips">
        {Object.entries(INTERESTS).map(([key, i]) => {
          const on = value.includes(key);
          return (
            <button
              key={key}
              type="button"
              className="chip sm"
              aria-pressed={on}
              disabled={!on && value.length >= MAX_INTERESTS}
              onClick={() => {
                haptic();
                onChange(on ? value.filter((v) => v !== key) : [...value, key]);
              }}
            >
              <Emoji e={i.emoji} size={18} /> {i.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** What a screen reader calls each colour. The keys are what a child's profile stores. */
const COLOUR_LABELS: Record<(typeof AVATAR_COLORS)[number], string> = {
  peach: t('Colour peach'),
  sky: t('Colour sky'),
  mint: t('Colour mint'),
  lilac: t('Colour lilac'),
  sun: t('Colour sun'),
  rose: t('Colour rose'),
};

/** The avatar choices: a grid of animals and a row of colours. */
export function AvatarPicker({
  emoji,
  color,
  onEmoji,
  onColor,
}: {
  emoji: string;
  color: string;
  onEmoji: (e: string) => void;
  onColor: (c: string) => void;
}) {
  return (
    <div className="avatar-picker">
      <div className="emoji-pick" role="group" aria-label={t('Avatar')}>
        {AVATAR_EMOJIS.map((e) => (
          <button
            key={e}
            type="button"
            aria-pressed={emoji === e}
            aria-label={t('Avatar {n}', { n: AVATAR_EMOJIS.indexOf(e) + 1 })}
            onClick={() => {
              haptic();
              onEmoji(e);
            }}
          >
            <Emoji e={e} size={36} />
          </button>
        ))}
      </div>
      <div className="color-pick" role="group" aria-label={t('Avatar colour')}>
        {AVATAR_COLORS.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={color === c}
            aria-label={COLOUR_LABELS[c]}
            style={{ background: `var(--av-${c})` }}
            onClick={() => {
              haptic();
              onColor(c);
            }}
          />
        ))}
      </div>
    </div>
  );
}

/** "Born 3+ weeks early" with its weeks stepper: corrected age matters for premature babies. */
export function EarlyFields({
  early,
  weeks,
  onEarly,
  onWeeks,
}: {
  early: boolean;
  weeks: number;
  onEarly: (v: boolean) => void;
  onWeeks: (n: number) => void;
}) {
  return (
    <>
      <div className="form-row">
        <span className="form-label" id="early-label">
          {t('Born 3+ weeks early')}
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={early}
          aria-labelledby="early-label"
          className="toggle"
          onClick={() => {
            haptic();
            onEarly(!early);
          }}
        />
      </div>
      {early && (
        <div className="form-row">
          <label className="form-label" htmlFor="weeks-early">
            {t('Weeks early')}
          </label>
          <div className="stepper">
            <button type="button" aria-label={t('One week fewer')} onClick={() => onWeeks(clampWeeks(weeks - 1))}>
              <Icon name="minus" size={18} strokeWidth={2.8} />
            </button>
            <input
              id="weeks-early"
              type="text"
              inputMode="numeric"
              value={num(weeks)}
              onChange={(e) => onWeeks(clampWeeks(Number(asciiDigits(e.target.value))))}
            />
            <button type="button" aria-label={t('One week more')} onClick={() => onWeeks(clampWeeks(weeks + 1))}>
              <Icon name="plus" size={18} strokeWidth={2.8} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function ChildForm({
  initial,
  taken = [],
  submitLabel,
  onSubmit,
  onCancel,
}: {
  initial?: Partial<ChildDraft>;
  /** Avatars already used by other children; a new child gets a different one by default. */
  taken?: Pick<Child, 'emoji' | 'color'>[];
  submitLabel: string;
  onSubmit: (draft: ChildDraft) => void;
  onCancel?: () => void;
}) {
  const [name, setName] = useState(initial?.name ?? '');
  const [birthDate, setBirthDate] = useState(initial?.birthDate ?? '');
  const [early, setEarly] = useState((initial?.weeksEarly ?? 0) > 0);
  const [weeksEarly, setWeeksEarly] = useState(initial?.weeksEarly && initial.weeksEarly > 0 ? initial.weeksEarly : 4);
  const [emoji, setEmoji] = useState(() => initial?.emoji ?? freshAvatar(taken).emoji);
  const [color, setColor] = useState(() => initial?.color ?? freshAvatar(taken).color);
  const [pickAvatar, setPickAvatar] = useState(false);
  const [interests, setInterests] = useState<string[]>(initial?.interests ?? []);
  const [error, setError] = useState<string | null>(null);

  const today = todayISO();
  const preview = birthDate && birthDate <= today ? childAge(birthDate, early ? weeksEarly : 0) : null;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError(t('Please add a name or nickname.'));
    if (!birthDate) return setError(t('Please add a birth date.'));
    if (birthDate > today) return setError(t('The birth date can’t be in the future.'));
    // An older child can stay on from an earlier year, so only new dates are held to the limit.
    if (birthDate < minBirthISO() && birthDate !== initial?.birthDate) return setError(t('Please check the year. PlayNest is for children up to 12.'));
    haptic('success');
    onSubmit({ name: name.trim(), birthDate, weeksEarly: early ? weeksEarly : 0, emoji, color, interests });
  };

  return (
    <form className="child-form" onSubmit={submit} noValidate>
      <div className="avatar-edit">
        <button
          type="button"
          className={`avatar xl ${color}`}
          aria-expanded={pickAvatar}
          aria-label={t('Change avatar')}
          onClick={() => setPickAvatar(!pickAvatar)}
        >
          <Emoji e={emoji} eager />
          <span className="avatar-edit-badge" aria-hidden="true">
            <Icon name="edit" size={14} strokeWidth={2.6} />
          </span>
        </button>
        {pickAvatar && <AvatarPicker emoji={emoji} color={color} onEmoji={setEmoji} onColor={setColor} />}
      </div>

      <div className="group form-group">
        <label className="form-row" htmlFor="child-name">
          <span className="form-label">{t('Name')}</span>
          <input
            id="child-name"
            className="form-input"
            value={name}
            maxLength={30}
            autoComplete="off"
            placeholder={t('Name or nickname')}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="form-row" htmlFor="child-birth">
          <span className="form-label">{t('Birthday')}</span>
          <DateField id="child-birth" className="form-input" value={birthDate} min={minBirthISO()} max={today} onChange={setBirthDate} />
        </label>
        <EarlyFields early={early} weeks={weeksEarly} onEarly={setEarly} onWeeks={setWeeksEarly} />
      </div>

      {preview && preview.months >= 12 && <InterestPicker name={name.trim() || t('your child')} value={interests} onChange={setInterests} />}

      {preview && (
        <p className="form-hint">
          <b>{t('{age} old', { age: preview.label })}</b>
          {preview.correctedLabel && <> · {t('corrected {age}, used until age 2', { age: preview.correctedLabel })}</>}
        </p>
      )}

      {error && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}

      <div className="btn-row">
        {onCancel && (
          <button type="button" className="btn" onClick={onCancel}>
            {t('Cancel')}
          </button>
        )}
        <button type="submit" className="btn btn-primary">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
