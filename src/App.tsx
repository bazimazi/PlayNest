import { lazy, Suspense, useEffect, type ReactNode } from 'react';
import { useAmbientRest } from './lib/motion';
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/Status';
import { ToastHost } from './components/Toast';
import { syncThemeColor } from './lib/world';
import ActivityDetail from './pages/ActivityDetail';
import Crying from './pages/Crying';
import Explore from './pages/Explore';
import FirstAid, { AidCardPage } from './pages/FirstAid';
import Growth from './pages/Growth';
import Help, { CoachDetail } from './pages/Help';
import Learn, { GuidePage } from './pages/Learn';
import Milestones from './pages/Milestones';
import ParentSupport from './pages/ParentSupport';
import Plan from './pages/Plan';
import PlayMode from './pages/PlayMode';
import Settings from './pages/Settings';
import Today from './pages/Today';
import Together from './pages/Together';
import Welcome from './pages/Welcome';
import { useStore } from './store/store';

// Loaded when first opened, so opening the app never waits for them. The service worker precaches them for offline use.
// Help, first aid and crisis screens are not among them: they load with the app itself, so a parent who has just lost
// signal on their very first visit still has them.
const Sounds = lazy(() => import('./pages/Sounds'));
const Stories = lazy(() => import('./pages/Stories'));
const StoryPage = lazy(() => import('./pages/Stories').then((m) => ({ default: m.StoryPage })));
const Songs = lazy(() => import('./pages/Songs'));
const SongPage = lazy(() => import('./pages/Songs').then((m) => ({ default: m.SongPage })));
const Talk = lazy(() => import('./pages/Talk'));
const Routines = lazy(() => import('./pages/Routines'));
const KidMode = lazy(() => import('./pages/KidMode'));
const Stage = lazy(() => import('./pages/Stage'));
const Firsts = lazy(() => import('./pages/Firsts'));
const Album = lazy(() => import('./pages/Album'));
const Search = lazy(() => import('./pages/Search'));
const Celebrate = lazy(() => import('./pages/Celebrate'));
const PrintSummary = lazy(() => import('./pages/Print').then((m) => ({ default: m.PrintSummary })));
const PrintCard = lazy(() => import('./pages/Print').then((m) => ({ default: m.PrintCard })));

function useTheme() {
  const theme = useStore((s) => s.settings.theme);
  const bedside = useStore((s) => s.settings.bedside);
  const tone = useStore((s) => s.settings.bedsideTone);
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const root = document.documentElement;
      root.dataset.theme = bedside ? 'dark' : theme === 'system' ? (media.matches ? 'dark' : 'light') : theme;
      if (bedside) root.dataset.mode = tone === 'amber' ? 'bedside-amber' : 'bedside';
      else delete root.dataset.mode;
      syncThemeColor();
    };
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [theme, bedside, tone]);
}

/** One switch for everything that moves: the device's setting or our own. CSS and JavaScript both read `data-motion`. */
function useMotionSetting() {
  const motion = useStore((s) => s.settings.motion);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      document.documentElement.dataset.motion = motion === 'less' || media.matches ? 'less' : 'full';
    };
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [motion]);
}

function RequireOnboarded({ children }: { children: ReactNode }) {
  const onboarded = useStore((s) => s.settings.onboarded);
  return onboarded ? <>{children}</> : <Navigate to="/welcome" replace />;
}

function RouteBoundary({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return <ErrorBoundary resetKey={pathname}>{children}</ErrorBoundary>;
}

export default function App() {
  useTheme();
  useMotionSetting();
  useAmbientRest();
  const activeChildId = useStore((s) => s.activeChildId);

  return (
    <HashRouter>
      {/* Above the routes, so a confirmation survives moving to the next screen. */}
      <ToastHost />
      <RouteBoundary>
        <Suspense fallback={<div className="route-loading" aria-hidden="true" />}>
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/play/:id" element={<PlayMode />} />
            <Route path="/kid/:id" element={<KidMode />} />
            <Route path="/print/summary" element={<PrintSummary />} />
            <Route path="/print/card/:id" element={<PrintCard />} />
            {/* Help is for anyone, whether or not they've added a child yet. */}
            <Route element={<Layout />}>
              <Route path="help" element={<Help />} />
              <Route path="help/moment/:id" element={<CoachDetail />} />
              <Route path="help/first-aid" element={<FirstAid />} />
              <Route path="help/first-aid/:id" element={<AidCardPage />} />
              <Route path="help/crying" element={<Crying />} />
              <Route path="help/you" element={<ParentSupport />} />
              <Route path="sounds" element={<Sounds />} />
            </Route>
            <Route
              element={
                <RequireOnboarded>
                  <Layout />
                </RequireOnboarded>
              }
            >
              <Route index element={<Today key={activeChildId ?? 'none'} />} />
              <Route path="explore" element={<Explore />} />
              <Route path="activity/:id" element={<ActivityDetail />} />
              <Route path="plan" element={<Plan key={activeChildId ?? 'none'} />} />
              <Route path="growth" element={<Growth key={activeChildId ?? 'none'} />} />
              <Route path="milestones" element={<Milestones />} />
              <Route path="journal" element={<Navigate to="/growth" replace />} />
              <Route path="together" element={<Together />} />
              <Route path="learn" element={<Learn />} />
              <Route path="learn/:slug" element={<GuidePage />} />
              <Route path="settings" element={<Settings />} />
              <Route path="stories" element={<Stories />} />
              <Route path="stories/:id" element={<StoryPage />} />
              <Route path="songs" element={<Songs />} />
              <Route path="songs/:id" element={<SongPage />} />
              <Route path="talk" element={<Talk />} />
              <Route path="routines" element={<Routines />} />
              <Route path="stage" element={<Stage />} />
              <Route path="firsts" element={<Firsts />} />
              <Route path="album" element={<Album />} />
              <Route path="search" element={<Search />} />
              <Route path="celebrate" element={<Celebrate />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </RouteBoundary>
    </HashRouter>
  );
}
