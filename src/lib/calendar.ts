/**
 * A web app with no server can't reliably remind anyone when it's closed, so it says so, and offers the phone's own calendar
 * instead. Three times a week, because one early-childhood text experiment found one or five a week did worse than three
 * (Cortes et al., NBER 24827). That's a starting point rather than a settled number, and the parent can change or delete it
 * like any other event.
 */
import { t } from '../i18n';

const pad = (n: number) => String(n).padStart(2, '0');

/** Lines longer than 75 bytes must be folded, and a Persian letter is two bytes, so this can't count characters. */
function folded(line: string): string {
  const bytes = new TextEncoder();
  let out = '';
  let used = 0;
  for (const ch of line) {
    const size = bytes.encode(ch).length;
    if (used + size > 75) {
      out += '\r\n ';
      used = 1;
    }
    out += ch;
    used += size;
  }
  return out;
}

/** Floating local time (no zone), so "half past five" stays half past five after moving or travelling. */
const stamp = (d: Date) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;

/** The next Monday, Wednesday or Saturday at this time. */
function firstOccurrence(now: Date, hour: number, minute: number): Date {
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
  for (let i = 0; i < 8; i++) {
    if ([1, 3, 6].includes(d.getDay()) && d > now) return d;
    d.setDate(d.getDate() + 1);
  }
  return d;
}

export function playReminderCalendar(now: Date, hour = 17, minute = 30): string {
  const first = firstOccurrence(now, hour, minute);
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//PlayNest//Play reminder//EN', // i18n-ignore
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:playnest-play-time-${stamp(now)}@playnest.app`,
    `DTSTAMP:${now.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
    `DTSTART:${stamp(first)}`,
    'DURATION:PT15M',
    'RRULE:FREQ=WEEKLY;BYDAY=MO,WE,SA',
    `SUMMARY:${t('Time to play?')}`,
    `DESCRIPTION:${t('Only if it suits. Open PlayNest for an idea.')}`,
    'TRANSP:TRANSPARENT',
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    `DESCRIPTION:${t('Time to play?')}`,
    'TRIGGER:PT0M',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
    '',
  ]
    .map(folded)
    .join('\r\n');
}
