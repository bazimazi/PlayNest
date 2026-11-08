import { useEffect, useLayoutEffect, useMemo, useRef, type CSSProperties } from 'react';
import { Link, Outlet, useLocation, useNavigationType } from 'react-router-dom';
import { useReveal } from '../lib/motion';
import { haptic } from '../platform';
import { Emoji } from './Emoji';
import { StorageBanner } from './Status';
import { t } from '../i18n';

interface Tab {
  root: string;
  label: string;
  emoji: string;
  match: RegExp;
}

/** Four destinations: what now, what to play, how they're growing, what to know. */
export const TABS: Tab[] = [
  { root: '/', label: t('Today'), emoji: '☀️', match: /^\/$/ },
  { root: '/explore', label: t('Play'), emoji: '🧩', match: /^\/(explore|plan|together|stories|songs|talk|routines|celebrate)/ },
  { root: '/growth', label: t('Grow'), emoji: '🌱', match: /^\/(growth|milestones|firsts|album)/ },
  // Help and soothing sounds belong to every tab (Help sits top right of each), so they light none of them.
  { root: '/learn', label: t('Learn'), emoji: '📖', match: /^\/(learn|stage|search)/ },
];

/** Top-level screens. Moving deeper than these slides in from the side; moving between them cross-fades. */
const ROOTS = new Set(['/', '/explore', '/plan', '/stories', '/songs', '/growth', '/learn']);
/** Screens with their own bottom action hide the tab bar, like a pushed screen in a native app. */
const NO_TABBAR = /^\/(activity|help\/first-aid)\/./;

const depth = (path: string) => (ROOTS.has(path) ? 0 : path.split('/').filter(Boolean).length);

/** Where each tab was last left, so switching tabs returns to it (each tab keeps its own place, as in native apps). */
const lastInTab = new Map<string, string>();
/** The tab of the screen before this one; module-level because screens without a tab bar unmount it. */
let previousTab: string | null = null;
/** Scroll position per history entry, restored on Back. */
const scrollByKey = new Map<string, number>();

function useScreenTransition(): string {
  const location = useLocation();
  const navType = useNavigationType();
  const prev = useRef(location.pathname);
  const anim = useMemo(() => {
    const from = prev.current;
    const to = location.pathname;
    if (from === to || document.documentElement.dataset.vt) return '';
    if (navType === 'POP') return 'anim-pop';
    return depth(to) > depth(from) ? 'anim-push' : 'anim-fade';
    // Computed once per navigation.
  }, [location.key]);
  useEffect(() => {
    prev.current = location.pathname;
  }, [location.key]);
  return anim;
}

function useScrollRestoration() {
  const location = useLocation();
  const navType = useNavigationType();
  const current = useRef(location.key);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => scrollByKey.set(current.current, window.scrollY));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useLayoutEffect(() => {
    current.current = location.key;
    const saved = navType === 'POP' ? scrollByKey.get(location.key) : undefined;
    window.scrollTo({ top: saved ?? 0, behavior: 'instant' as ScrollBehavior });
  }, [location.key]);
}

function TabBar() {
  const { pathname, search } = useLocation();
  const activeIndex = TABS.findIndex((t) => t.match.test(pathname));

  useEffect(() => {
    const tab = TABS.find((t) => t.match.test(pathname));
    // Only places reached from inside the tab: "This stage" opened from Grow mustn't become where Learn opens.
    if (tab && (pathname === tab.root || previousTab === tab.root)) lastInTab.set(tab.root, pathname + search);
    previousTab = tab?.root ?? null;
  }, [pathname, search]);

  return (
    <nav className={`tabbar${activeIndex < 0 ? ' none-active' : ''}`} aria-label={t('Main')} style={{ '--i': Math.max(0, activeIndex) } as CSSProperties}>
      <span className="tab-pill" aria-hidden="true" />
      <ul>
        {TABS.map((t, i) => {
          const active = i === activeIndex;
          // Tapping the current tab goes back to its top; tapping another returns to where you left it.
          const to = active ? t.root : lastInTab.get(t.root) ?? t.root;
          return (
            <li key={t.root}>
              <Link
                to={to}
                className={active ? 'active' : undefined}
                aria-current={active ? 'page' : undefined}
                onClick={() => {
                  haptic();
                  if (active && pathname === t.root) window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <Emoji e={t.emoji} size={28} className="tab-icon" eager />
                <span className="tab-label">{t.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function Layout() {
  const location = useLocation();
  const anim = useScreenTransition();
  const navType = useNavigationType();
  useScrollRestoration();
  useReveal(location.pathname, navType === 'POP');
  // The milestone check-in is a focused task: nothing else on screen but the question and its answers.
  const inCheckIn = location.pathname === '/milestones' && new URLSearchParams(location.search).get('checkin') === '1';
  const showTabs = !NO_TABBAR.test(location.pathname) && !inCheckIn;

  return (
    <div className={`app${showTabs ? '' : ' no-tabs'}`}>
      {/* A button, not an anchor: with hash routing, href="#main" would navigate to a route. */}
      <button type="button" className="skip-link" onClick={() => document.getElementById('main')?.focus()}>
        {t('Skip to content')}
      </button>
      <StorageBanner />
      <div id="main" tabIndex={-1} key={location.pathname} className={`screen ${anim}`}>
        <Outlet />
      </div>
      {showTabs && <TabBar />}
    </div>
  );
}
