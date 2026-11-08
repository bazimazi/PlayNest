import { useState } from 'react';
import { formatDate, language, num, t } from '../i18n';
import { isoToJalali, jalaliMonthLength, jalaliToIso } from '../lib/jalali';

interface DateFieldProps {
  id: string;
  className: string;
  /** YYYY-MM-DD, or empty. Dates are stored this way in every language. */
  value: string;
  min?: string;
  max?: string;
  onChange: (iso: string) => void;
}

/**
 * Phones show their own calendar for `type="date"`, and most can't show the Persian one, so a parent would have to work out
 * a birthday in a calendar they don't use. In Persian this is three lists instead; everywhere else, the phone's calendar.
 */
export function DateField(props: DateFieldProps) {
  if (language() === 'fa') return <JalaliField {...props} />;
  const { id, className, value, min, max, onChange } = props;
  return <input id={id} className={className} type="date" value={value} min={min} max={max} onChange={(e) => onChange(e.target.value)} />;
}

const monthName = (year: number, month: number) => formatDate(parseIso(jalaliToIso({ year, month, day: 1 })), { month: 'long' });

function parseIso(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function JalaliField({ id, className, value, min, max, onChange }: DateFieldProps) {
  const known = value ? isoToJalali(value) : null;
  // A parent picks one list at a time, so the parts wait here until they make a whole date.
  const [draft, setDraft] = useState<{ year?: number; month?: number; day?: number }>({});
  const year = known?.year ?? draft.year;
  const month = known?.month ?? draft.month;
  const day = known?.day ?? draft.day;

  const lowest = min ? isoToJalali(min) : { year: isoToJalali(new Date().toISOString()).year - 20, month: 1, day: 1 };
  const highest = max ? isoToJalali(max) : isoToJalali(new Date().toISOString());
  const years = Array.from({ length: highest.year - lowest.year + 1 }, (_, i) => highest.year - i);
  const monthAllowed = (m: number) =>
    year === undefined || ((year !== highest.year || m <= highest.month) && (year !== lowest.year || m >= lowest.month));
  const dayCount = year !== undefined && month !== undefined ? jalaliMonthLength(year, month) : 31;
  const dayAllowed = (d: number) => {
    if (year === undefined || month === undefined) return true;
    if (year === highest.year && month === highest.month && d > highest.day) return false;
    return !(year === lowest.year && month === lowest.month && d < lowest.day);
  };

  const pick = (part: { year?: number; month?: number; day?: number }) => {
    const next = { year, month, day, ...part };
    setDraft(next);
    if (next.year === undefined || next.month === undefined || next.day === undefined) {
      if (value) onChange('');
      return;
    }
    // A day that doesn't exist in the new month or lies beyond the limit moves to the nearest one that does.
    let whole = jalaliToIso({ year: next.year, month: next.month, day: Math.min(next.day, jalaliMonthLength(next.year, next.month)) });
    if (max && whole > max) whole = max;
    if (min && whole < min) whole = min;
    setDraft(isoToJalali(whole));
    onChange(whole);
  };

  const list = (label: string, shown: number | undefined, kind: string, listId: string | undefined, options: { value: number; label: string; off?: boolean }[], set: (n: number) => void) => (
    <select
      id={listId}
      className={`${className} date-${kind}`}
      aria-label={label}
      value={shown ?? ''}
      onChange={(e) => {
        if (e.target.value) set(Number(e.target.value));
      }}
    >
      <option value="">{label}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value} disabled={o.off}>
          {o.label}
        </option>
      ))}
    </select>
  );

  return (
    <div className="date-field">
      {list(
        t('Day'),
        day,
        'day',
        id,
        Array.from({ length: dayCount }, (_, i) => ({ value: i + 1, label: num(i + 1), off: !dayAllowed(i + 1) })),
        (d) => pick({ day: d }),
      )}
      {list(
        t('Month'),
        month,
        'month',
        undefined,
        Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: monthName(year ?? highest.year, i + 1), off: !monthAllowed(i + 1) })),
        (m) => pick({ month: m }),
      )}
      {list(
        t('Year'),
        year,
        'year',
        undefined,
        years.map((y) => ({ value: y, label: num(y) })),
        (y) => pick({ year: y }),
      )}
    </div>
  );
}
