import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { motionAllowed } from '../lib/motion';
import { seededRandom } from '../lib/random';

const COLORS = ['#ffc93c', '#ff8a65', '#7fcdf7', '#b29dff', '#86d993', '#ff9fbb', '#fff2b8'];
const RUN_MS = 3600;

type Shape = 'paper' | 'dot' | 'star' | 'petal' | 'ribbon';
const SHAPES: Shape[] = ['paper', 'paper', 'dot', 'star', 'petal', 'ribbon'];

interface Bit {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  shape: Shape;
  turn: number;
  spin: number;
  flip: number;
  flipRate: number;
  wobble: number;
  wait: number;
}

function drawStar(ctx: CanvasRenderingContext2D, s: number) {
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const a = (i * Math.PI) / 5 - Math.PI / 2;
    const r = i % 2 ? s * 0.45 : s;
    ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  ctx.closePath();
  ctx.fill();
}

function draw(ctx: CanvasRenderingContext2D, b: Bit) {
  ctx.save();
  ctx.translate(b.x, b.y);
  ctx.rotate(b.turn);
  // Turning over in the air: the piece narrows, and its back is a little darker.
  const face = Math.cos(b.flip);
  ctx.scale(Math.max(0.12, Math.abs(face)), 1);
  ctx.fillStyle = b.color;
  ctx.globalAlpha = face < 0 ? 0.8 : 1;
  const s = b.size;
  switch (b.shape) {
    case 'paper':
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(-s / 2, -s * 0.7, s, s * 1.4, 2);
      else ctx.rect(-s / 2, -s * 0.7, s, s * 1.4);
      ctx.fill();
      break;
    case 'dot':
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.55, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'star':
      drawStar(ctx, s * 0.85);
      break;
    case 'petal':
      ctx.beginPath();
      ctx.ellipse(0, 0, s * 0.42, s * 0.85, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'ribbon':
      ctx.beginPath();
      ctx.moveTo(-s * 0.3, -s * 1.1);
      ctx.bezierCurveTo(s * 0.7, -s * 0.4, -s * 0.7, s * 0.4, s * 0.3, s * 1.1);
      ctx.lineWidth = s * 0.32;
      ctx.strokeStyle = b.color;
      ctx.lineCap = 'round';
      ctx.stroke();
      break;
  }
  ctx.restore();
}

/** With movement turned down, the celebration is a few stars that fade in where they are and fade away. */
function CalmSparkles() {
  const bits = useMemo(() => {
    const r = seededRandom(4217);
    return Array.from({ length: 12 }, (_, i) => ({
      left: `${6 + r() * 88}%`,
      top: `${8 + r() * 60}%`,
      color: COLORS[i % COLORS.length],
      '--d': `${r() * 0.5}s`,
    }));
  }, []);
  return (
    <div className="confetti confetti-calm" aria-hidden="true">
      {bits.map((style, i) => (
        <i key={i} style={style as CSSProperties}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1Q12 12 23 12Q12 12 12 23Q12 12 1 12Q12 12 12 1Z" />
          </svg>
        </i>
      ))}
    </div>
  );
}

/**
 * A short, one-off celebration: paper thrown from both bottom corners and sprinkled from above, tumbling down with a
 * little air resistance. One canvas, so 90 pieces cost less than 36 elements did. Runs once and removes itself.
 */
export function Confetti({ pieces = 90 }: { pieces?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [calm] = useState(() => !motionAllowed());
  const [over, setOver] = useState(false);

  useEffect(() => {
    if (calm) return;
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const r = Math.random;
    const bits: Bit[] = Array.from({ length: pieces }, (_, i) => {
      const lane = i % 3;
      const base = {
        size: 6 + r() * 7,
        color: COLORS[i % COLORS.length],
        shape: SHAPES[i % SHAPES.length],
        turn: r() * Math.PI * 2,
        spin: (r() - 0.5) * 7,
        flip: r() * Math.PI * 2,
        flipRate: 4 + r() * 7,
        wobble: r() * Math.PI * 2,
      };
      if (lane === 2) return { ...base, x: r() * w, y: -20 - r() * h * 0.4, vx: (r() - 0.5) * 50, vy: 40 + r() * 80, wait: 0.15 + r() * 0.5 };
      // Thrown up and inwards from a bottom corner.
      const left = lane === 0;
      const angle = (left ? -1 : -1) * (Math.PI / 2) + (left ? 1 : -1) * (0.25 + r() * 0.5);
      const speed = h * (0.95 + r() * 0.55) + 260;
      return { ...base, x: left ? -8 : w + 8, y: h * 0.8, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, wait: r() * 0.18 };
    });

    let raf = 0;
    const start = performance.now();
    let last = start;
    const GRAVITY = 900;
    const frame = (now: number) => {
      const dt = Math.min(0.04, (now - last) / 1000);
      last = now;
      const age = now - start;
      ctx.clearRect(0, 0, w, h);
      let alive = false;
      const fade = age > RUN_MS - 500 ? Math.max(0, (RUN_MS - age) / 500) : 1;
      for (const b of bits) {
        if (b.wait > 0) {
          b.wait -= dt;
          alive = true;
          continue;
        }
        const drag = Math.exp(-2.2 * dt);
        b.vx *= drag;
        b.vy = b.vy * drag + GRAVITY * dt * 0.62;
        b.wobble += dt * 3.2;
        b.x += (b.vx + Math.sin(b.wobble) * 26) * dt;
        b.y += b.vy * dt;
        b.turn += b.spin * dt;
        b.flip += b.flipRate * dt;
        if (b.y < h + 30) {
          alive = true;
          ctx.globalAlpha = fade;
          draw(ctx, b);
        }
      }
      if (alive && age < RUN_MS) raf = requestAnimationFrame(frame);
      else setOver(true);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [calm, pieces]);

  if (calm) return <CalmSparkles />;
  if (over) return null;
  return <canvas ref={ref} className="confetti" aria-hidden="true" />;
}
