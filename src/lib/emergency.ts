import { asciiDigits, compareText, language, t } from '../i18n';
import { EMERGENCY } from '../data/emergency';
import { HELPLINES } from '../data/helplines';
import type { AidRegion, EmergencyNumbers, Helpline } from '../data/packs';

const EUROPE = new Set(
  // i18n-ignore
  'AD AL AT BA BE BG BY CH CY CZ DE DK EE ES FI FO FR GE GR HR HU IS IT LI LT LU LV MC MD ME MK MT NL NO PL PT RO RS SE SI SK SM TR UA VA XK'.split(' '),
);

/** A starting suggestion only: first-aid steps are always confirmed by the parent, and kept when they travel. */
export function suggestedAidRegion(country: string | null): AidRegion | null {
  if (!country) return null;
  if (country === 'US') return 'us';
  if (country === 'CA') return 'ca';
  if (country === 'GB' || country === 'IE') return 'uk';
  if (country === 'AU' || country === 'NZ') return 'anz';
  if (EUROPE.has(country)) return 'eu';
  return null;
}

/** The phone's region setting, offered as a suggestion for the parent to confirm. Nothing leaves the device. */
export function guessCountry(): string | null {
  const languages = globalThis.navigator?.languages ?? [];
  for (const tag of languages) {
    try {
      const region = new Intl.Locale(tag).region;
      if (region && /^[A-Z]{2}$/.test(region) && EMERGENCY[region]) return region;
    } catch {
      /* odd tag: try the next */
    }
  }
  return null;
}

export function countryName(code: string): string {
  try {
    return new Intl.DisplayNames([language()], { type: 'region' }).of(code) ?? code;
  } catch {
    return code;
  }
}

/** Every country we have numbers for, by name. */
export function countryOptions(): { code: string; name: string }[] {
  return Object.keys(EMERGENCY)
    .map((code) => ({ code, name: countryName(code) }))
    .sort((a, b) => compareText(a.name, b.name));
}

export interface EmergencyLine {
  /** What to dial for a child who needs an ambulance. */
  number: string | null;
  /** Other services, when the country doesn't have a single number. */
  others: { label: string; number: string }[];
  /** True when the sources behind this number disagreed, or when it's the parent's own. */
  checkLocally: boolean;
  own: boolean;
}

export function emergencyLine(country: string | null, own: string | null): EmergencyLine {
  const row: EmergencyNumbers | undefined = country ? EMERGENCY[country] : undefined;
  if (!row) return { number: own, others: [], checkLocally: false, own: !!own };
  // A single number for every service comes first. Some countries list no ambulance at all, and the police or fire
  // number is then the best there is, so it's offered, with a request to check it.
  const main = row.general ?? row.ambulance ?? row.police ?? row.fire ?? null;
  const services: { label: string; number?: string }[] = [
    { label: t('Ambulance'), number: row.ambulance },
    { label: t('Police'), number: row.police },
    { label: t('Fire'), number: row.fire },
  ];
  const others = services
    .filter((s): s is { label: string; number: string } => !!s.number && s.number !== (own ?? main))
    .filter((s, i, all) => all.findIndex((x) => x.number === s.number) === i);
  if (own) return { number: own, others, checkLocally: false, own: true };
  return { number: main, others, checkLocally: !row.agreed || (!row.general && !row.ambulance), own: false };
}

/** Lines in the order a person in trouble needs them: crisis first. */
export function helplinesFor(country: string | null): { lines: Helpline[]; world: Helpline[] } {
  const order = { crisis: 0, parent: 1, talk: 2 } as const;
  const lines = (country ? (HELPLINES[country] ?? []) : []).slice().sort((a, b) => order[a.kind] - order[b.kind]);
  return { lines, world: HELPLINES.WORLD ?? [] };
}

/** A number typed on a Persian keyboard has Persian digits, and a phone can't dial those. */
export const telHref = (number: string) => `tel:${asciiDigits(number).replace(/[^+0-9]/g, '')}`;
