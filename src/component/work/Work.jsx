import React, { useEffect, useRef, useState } from 'react';
import './Work.css';
import whaReportCover from '../../assets/wha-report-cover.png';
import harvestaiPoster from '../../assets/harvestai-poster.png';
import soundosPreview from '../../assets/soundos-preview.png';

// Lando-style staggered collage: each project has its own size + vertical position
const PROJECTS = [
  {
    num: '01',
    title: 'TWO TEEN STORY PODCAST',
    label: 'BANGKOK, 2024',
    tech: ['React', 'Audio'],
    url: 'https://two-teen-story.vercel.app/',
    w: 720, h: 540,
    left: 220, topPct: 28,
  },
  {
    num: '02',
    title: 'EXISTENTIAL OS',
    label: 'WEB AUDIO, 2024',
    tech: ['React', 'Web Audio'],
    url: 'https://www.existentialos.xyz/',
    image: soundosPreview,
    w: 360, h: 290,
    left: 1080, topPct: 8,
  },
  {
    num: '03',
    title: "FARADAY'S LAW SIM.",
    label: 'PHYSICS, 2024',
    tech: ['Three.js', 'WebGL'],
    url: 'https://faradayz-experiment-simulation.vercel.app/',
    w: 480, h: 380,
    left: 1620, topPct: 42,
  },
  {
    num: '04',
    title: 'FASHION CONFIDENCE COMMUNITY',
    label: 'RESEARCH, 2025',
    tech: ['React', 'Next.js'],
    url: 'https://sp-app-fe.vercel.app/',
    w: 300, h: 380,
    left: 2240, topPct: 22,
  },
  {
    num: '05',
    title: 'HARVESTAI',
    label: 'UNESCO TOP 10 FINALIST, 2025',
    tech: ['React', 'AI'],
    url: 'https://ai-comp-app.vercel.app/',
    image: harvestaiPoster,
    w: 540, h: 420,
    left: 2680, topPct: 50,
  },
  {
    num: '06',
    title: 'WHA EQUITY RESEARCH',
    label: 'THIC 2026 · 6TH PLACE',
    tech: ['DCF', 'Comparable valuation', 'Equity research'],
    url: 'https://drive.google.com/file/d/1KJfbgtWeANRPoXX_Y3HQO-_9QuTGrgZW/view',
    image: whaReportCover,
    imageFit: 'contain',
    imageAlt: 'First page of the WHA Corporation equity research report — THIC 2026',
    description: 'Team Klangkrung · Semifinalist',
    detail: 'Led valuation and Investment Thesis 1. Built a bottom-up DCF and compared WHA with AMATA and Rojana using EV/EBITDA, P/E, EV/Sales and P/BV.',
    w: 480, h: 380,
    left: 3400, topPct: 24,
  },
];

const TRACK_WIDTH = 4100;
const SCALE = 0.55;
const SCROLL_MULTIPLIER = 1.1;
const CARD_RADIUS = 14;

const Work = () => {
  const sectionRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight * 3 : 2400
  );
  const maxTRef = useRef(0);
  const targetX = useRef(0);
  const currentX = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      const maxT = Math.max(0, TRACK_WIDTH - window.innerWidth);
      maxTRef.current = maxT;
      setSectionHeight(window.innerHeight + maxT * SCROLL_MULTIPLIER);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const computeTarget = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top;
      const totalScrollable = section.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) {
        targetX.current = 0;
        return;
      }
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      targetX.current = progress * maxTRef.current;
    };

    const loop = () => {
      const diff = targetX.current - currentX.current;
      if (Math.abs(diff) > 0.04) {
        currentX.current += diff * 0.085;
        setTranslateX(currentX.current);
      } else if (currentX.current !== targetX.current) {
        currentX.current = targetX.current;
        setTranslateX(currentX.current);
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    computeTarget();
    window.addEventListener('scroll', computeTarget, { passive: true });
    window.addEventListener('resize', computeTarget);
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('scroll', computeTarget);
      window.removeEventListener('resize', computeTarget);
      cancelAnimationFrame(rafRef.current);
    };
  }, [sectionHeight]);

  // Active card = whichever is closest to viewport center
  const viewportCenter = translateX + (typeof window !== 'undefined' ? window.innerWidth / 2 : 720);
  let activeIdx = 0;
  let bestDist = Infinity;
  PROJECTS.forEach((p, i) => {
    const c = p.left + p.w / 2;
    const d = Math.abs(c - viewportCenter);
    if (d < bestDist) {
      bestDist = d;
      activeIdx = i;
    }
  });

  return (
    <div className="work-scroll" ref={sectionRef} style={{ height: `${sectionHeight}px`, position: 'relative' }}>
      <div
        className="work-stage sticky top-0 h-screen overflow-hidden"
        style={{ backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' }}
      >
        {/* Decorative topographic-style curves — Lando background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          style={{ opacity: 0.18 }}
          aria-hidden
        >
          <g fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2">
            <path d="M -200 200 C 300 80, 700 400, 1100 220 S 1900 320, 2200 180" />
            <path d="M -200 420 C 200 320, 600 600, 1000 460 S 1700 540, 2200 420" />
            <path d="M -200 660 C 350 540, 750 820, 1150 700 S 1850 760, 2200 640" />
            <path d="M -200 880 C 300 780, 700 1000, 1100 900 S 1900 940, 2200 860" />
          </g>
        </svg>

        {/* Top-left brand block (like LANDO NORRIS) */}
        <div className="work-heading absolute top-8 left-8 z-20" style={{ maxWidth: 360 }}>
          <h2
            className="font-black uppercase leading-[0.85] tracking-tight text-[var(--theme-text)]"
            style={{ fontSize: '54px', fontFamily: 'Georgia, serif' }}
          >
            SELECTED<br />WORK
          </h2>
          <p
            className="mt-4 text-[var(--theme-soft)] italic leading-snug"
            style={{ fontFamily: 'Georgia, serif', fontSize: '18px' }}
          >
            It doesn't matter <span className="text-[var(--theme-text)]">where</span> you start,<br />
            it's <span className="text-[var(--theme-text)]">how</span> you progress from there.
          </p>
        </div>

        {/* Top-right indicator */}
        <div className="work-scroll-hint absolute top-8 right-8 z-20 flex items-center gap-3">
          <span className="font-mono text-xs text-[var(--theme-muted)] uppercase tracking-widest">scroll</span>
          <div className="w-8 h-px bg-white/50" />
        </div>

        {/* Horizontal track */}
        <div
          className="work-track absolute top-0 left-0 h-full"
          style={{
            width: `${TRACK_WIDTH}px`,
            transform: `translate3d(-${translateX}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {PROJECTS.map((p, i) => {
            const cardCenter = p.left + p.w / 2;
            const dist = cardCenter - viewportCenter;
            const parallax = p.imageFit === 'contain' ? 0 : dist * 0.05; // gentle drift
            return (
              <div
                key={p.num}
                className="work-card absolute group"
                style={{
                  left: `${p.left}px`,
                  top: `${p.topPct}%`,
                  width: `${p.w}px`,
                  transform: `translateX(${parallax * -0.3}px)`,
                }}
              >
                {/* Small uppercase label above */}
                <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--theme-soft)] uppercase mb-3">
                  {p.label}
                </p>

                {/* Image / preview card */}
                <div
                  className="work-preview relative overflow-hidden"
                  style={{
                    width: `${p.w}px`,
                    height: `${p.h}px`,
                    borderRadius: `${CARD_RADIUS}px`,
                    boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    style={{
                      transform: `translateX(${parallax}px)`,
                      width: '100%',
                      height: '100%',
                      willChange: 'transform',
                    }}
                  >
                    {p.description && !p.image ? (
                      <div className="h-full flex flex-col justify-between p-8" style={{ background: '#ece9e1', color: '#292823' }}>
                        <p className="font-mono text-xs uppercase tracking-widest">{p.description}</p>
                        <p className="text-5xl font-light tracking-tight">WHA<br />Corporation</p>
                        <p className="text-sm leading-relaxed">{p.detail}</p>
                      </div>
                    ) : p.image ? (
                      <img
                        src={p.image}
                        alt={p.imageAlt || p.title}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: p.imageFit || 'cover',
                          background: p.imageFit === 'contain' ? '#fff' : undefined,
                          display: 'block',
                          pointerEvents: 'none',
                        }}
                      />
                    ) : (
                      <iframe
                        src={p.url}
                        title={p.title}
                        loading="lazy"
                        tabIndex={-1}
                        style={{
                          width: `${p.w / SCALE}px`,
                          height: `${p.h / SCALE}px`,
                          transform: `scale(${SCALE})`,
                          transformOrigin: 'top left',
                          border: 'none',
                          pointerEvents: 'none',
                        }}
                      />
                    )}
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${p.title}`}
                    className="absolute inset-0 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-[-4px]"
                    style={{ background: 'rgba(0,0,0,0)', transition: 'background 0.25s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.4)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0)')}
                  >
                    <span
                      className="font-mono text-xs text-[var(--theme-text)] uppercase tracking-widest border border-white px-4 py-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                      style={{ transition: 'opacity 0.25s ease' }}
                    >
                      VIEW ↗
                    </span>
                  </a>
                </div>

                {/* Title below — only on active card so it doesn't crowd */}
                <div
                  className="mt-3"
                  style={{
                    opacity: i === activeIdx ? 1 : 0.35,
                    transition: 'opacity 0.4s ease',
                  }}
                >
                  <h3 className="font-black uppercase text-sm leading-tight tracking-tight text-[var(--theme-text)]">
                    {p.title}
                  </h3>
                  <p className="font-mono text-[11px] text-[var(--theme-muted)] mt-1">{p.tech.join(' · ')}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom-center page indicator — Lando style */}
        <div className="work-counter absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          <div className="px-4 py-2 border border-[var(--theme-border)] text-[var(--theme-text)] font-mono text-sm tabular-nums">
            {String(activeIdx + 1).padStart(2, '0')}
          </div>
          <div className="px-3 py-2 border border-[var(--theme-border)] text-[var(--theme-soft)] font-mono text-xs uppercase tracking-widest">
            / {String(PROJECTS.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
