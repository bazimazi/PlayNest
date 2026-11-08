import { useEffect, useMemo, useState } from 'react';
import { childAge, type ChildAge } from '../lib/age';
import { toISODate } from '../lib/dates';
import type { Child, Session } from './model';
import { selectActiveChild, useStore } from './store';

/** The hour we're in, for the date, the greeting and the sky. Refreshed whenever the app comes back to the foreground. */
const hourKey = () => {
  const now = new Date();
  return `${toISODate(now)}-${now.getHours()}`;
};

/** The current date and hour, refreshed when the tab regains focus. */
export function useToday(): Date {
  const [day, setDay] = useState(hourKey);
  useEffect(() => {
    const check = () => setDay(hourKey());
    window.addEventListener('focus', check);
    document.addEventListener('visibilitychange', check);
    return () => {
      window.removeEventListener('focus', check);
      document.removeEventListener('visibilitychange', check);
    };
  }, []);
  return useMemo(() => new Date(), [day]);
}

export function useAgeOf(child: Child | null): ChildAge | null {
  const today = useToday();
  return useMemo(
    () => (child ? childAge(child.birthDate, child.weeksEarly, today) : null),
    [child, today],
  );
}

export function useActiveChild(): { child: Child | null; age: ChildAge | null } {
  const child = useStore(selectActiveChild);
  const age = useAgeOf(child);
  return { child, age };
}

export function useChildSessions(childId: string | undefined): Session[] {
  const sessions = useStore((s) => s.sessions);
  return useMemo(() => (childId ? sessions.filter((x) => x.childId === childId) : []), [sessions, childId]);
}

export function useFavoriteSet(): ReadonlySet<string> {
  const favorites = useStore((s) => s.favorites);
  return useMemo(() => new Set(favorites), [favorites]);
}
