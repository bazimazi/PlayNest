import react from '@vitejs/plugin-react';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import type { Plugin } from 'vite';
import { defineConfig } from 'vitest/config';

function listFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? listFiles(p) : [p];
  });
}

const shortHash = (data: string | Buffer) => createHash('sha256').update(data).digest('hex').slice(0, 12);

/**
 * Emits `sw.js`: a service worker that precaches every built asset plus the files in `public/`, so the whole app (all
 * content is bundled) works offline after the first visit.
 *
 * Three things it is careful about, because this runs on a phone at 3 a.m. on a bad connection:
 *  - The app shell comes from the cache first, so a stalled network can't leave a blank screen.
 *  - The previous version's cache is kept until the next update, so an open tab can still load the chunks it needs.
 *  - Installing reuses unchanged files instead of downloading everything again, and one missing picture doesn't fail
 *    the update; only the code itself is critical.
 */
function serviceWorker(): Plugin {
  return {
    name: 'playnest-service-worker',
    apply: 'build',
    enforce: 'post', // After the HTML plugin, so index.html is in the bundle and counts towards the version.
    generateBundle(_options, bundle) {
      const publicDir = join(__dirname, 'public');
      const publicFiles = listFiles(publicDir);
      const publicNames = publicFiles.map((p) => relative(publicDir, p).replace(/\\/g, '/'));
      const built = Object.keys(bundle).filter((f) => !f.endsWith('.map'));
      const files = ['./', ...built, ...publicNames];
      // A revision per public file (built files already carry a hash in their name), so unchanged ones can be reused.
      const revisions: Record<string, string> = {};
      publicFiles.forEach((p, i) => (revisions[publicNames[i]] = shortHash(readFileSync(p))));
      const critical = ['./', ...built.filter((f) => /\.(js|css)$/.test(f))];
      const html = bundle['index.html'];
      const htmlSource = html && html.type === 'asset' ? String(html.source) : '';
      // A change to index.html alone must still reach people, so it counts towards the version too.
      const version = shortHash(`${files.join('|')}|${JSON.stringify(revisions)}|${htmlSource}`);
      const source = `// Generated at build time by vite.config.ts
const CACHE = 'playnest-${version}';
const PRECACHE = ${JSON.stringify(files)};
const CRITICAL = new Set(${JSON.stringify(critical)});
const REVISIONS = ${JSON.stringify(revisions)};
const REVISIONS_KEY = '__revisions__';
const CONCURRENCY = 10;

/** Older caches that finished installing, oldest first. A failed install leaves one without the revisions entry. */
async function completeOldCaches() {
  const keys = (await caches.keys()).filter((k) => k.startsWith('playnest-') && k !== CACHE);
  const complete = [];
  for (const k of keys) {
    if (await (await caches.open(k)).match(REVISIONS_KEY)) complete.push(k);
  }
  return { keys, complete };
}

async function previousCache() {
  const { complete } = await completeOldCaches();
  return complete.length ? caches.open(complete[complete.length - 1]) : null;
}

async function fill() {
  const cache = await caches.open(CACHE);
  const prev = await previousCache();
  const prevRevisions = prev ? await prev.match(REVISIONS_KEY).then((r) => (r ? r.json() : {})).catch(() => ({})) : {};
  const queue = [...PRECACHE];
  const fetchOne = async (url) => {
    // A retried install carries on from what it already has, rather than starting again on a bad connection.
    if (await cache.match(url)) return;
    // Built files have a content hash in their name; public files are compared by revision.
    const unchanged = url.startsWith('assets/') || (REVISIONS[url] && REVISIONS[url] === prevRevisions[url]);
    if (prev && unchanged) {
      const old = await prev.match(url);
      if (old) {
        await cache.put(url, old);
        return;
      }
    }
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const res = await fetch(url, { cache: 'no-cache' });
        if (res.ok) {
          await cache.put(url, res); // Awaited here, so a download cut off partway gets retried too.
          return;
        }
      } catch { /* try again */ }
    }
    if (CRITICAL.has(url)) throw new Error('precache failed: ' + url);
  };
  const worker = async () => {
    while (queue.length) await fetchOne(queue.shift());
  };
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  await cache.put(REVISIONS_KEY, new Response(JSON.stringify(REVISIONS)));
}

self.addEventListener('install', (event) => {
  event.waitUntil(fill().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Keep the newest complete previous cache: a tab that is still open may need its chunks. Partial ones go.
    const { keys, complete } = await completeOldCaches();
    const keep = complete[complete.length - 1];
    await Promise.all(keys.filter((k) => k !== keep).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

/** This version first. The previous cache is only for chunks an older open tab still asks for. */
const fromCache = async (req) => (await (await caches.open(CACHE)).match(req)) || caches.match(req);

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(fromCache('./').then((hit) => hit || fetch(req)));
    return;
  }
  event.respondWith(
    fromCache(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    })),
  );
});
`;
      this.emitFile({ type: 'asset', fileName: 'sw.js', source });
    },
  };
}

/** Content that only one area of the app needs gets its own file, so opening the app never loads it all. */
const CONTENT_CHUNKS: Record<string, string> = {
  'coach.ts': 'help',
  'firstaid.ts': 'help',
  'emergency.ts': 'help',
  'helplines.ts': 'help',
  'crying.ts': 'help',
  'stories.ts': 'stories',
  'stories-persian.ts': 'stories',
  'stories-english.ts': 'stories',
  'songs.ts': 'songs',
  'songs-persian.ts': 'songs',
  'songs-english.ts': 'songs',
  'talk.ts': 'talk',
  'talk-persian.ts': 'talk',
  'stages.ts': 'stages',
  'routines.ts': 'routines',
  'firsts.ts': 'routines',
  'guides.ts': 'guides',
  'guides-more.ts': 'guides',
  'celebrations.ts': 'celebrations',
  'celebrations-persian.ts': 'celebrations',
  'adaptations.ts': 'adaptations',
};

export default defineConfig({
  base: './',
  plugins: [react(), serviceWorker()],
  // A language's files are large. Parsed as JSON they cost far less at startup than the same data as JavaScript.
  json: { stringify: true },
  build: {
    // All activities are bundled on purpose so the app works fully offline.
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // Content changes far more often than the libraries, and each band is large: give each its own chunk so
        // updates re-download only what changed and the browser can fetch them in parallel.
        manualChunks(id) {
          // Content chunks call into this as they load, so it has to run first. On its own, it can't be caught in a cycle.
          if (/src[\\/]i18n[\\/]index\.ts$/.test(id) || id.includes('vite/preload-helper')) return 'i18n';
          if (/node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)) return 'vendor';
          const band = id.match(/src[\\/]data[\\/]activities[\\/](infant|toddler|preschool|school|older|older-make|world|seasons|celebrate|iran-young|iran-older|celebrate-persian)\.ts$/);
          if (band) return `activities-${band[1]}`;
          const data = id.match(/src[\\/]data[\\/]([^\\/]+\.ts)$/);
          if (data && CONTENT_CHUNKS[data[1]]) return `content-${CONTENT_CHUNKS[data[1]]}`;
          if (/src[\\/]data[\\/]/.test(id)) return 'content';
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'node',
  },
});
