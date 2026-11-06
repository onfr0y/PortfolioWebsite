import { useEffect, useRef } from 'react';
import portrait from '../../assets/profile.PNG';
import './SwarmPortrait.css';

export default function SwarmPortrait() {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const replayRef = useRef(() => {});

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    const media = window.matchMedia('(prefers-reduced-motion: no-preference)');
    const photo = new Image();
    let frame = 0;
    let started = false;
    try { started = sessionStorage.getItem('portfolio-portrait-seen') === '1'; } catch { /* Storage may be unavailable. */ }
    let visible = false;
    let disposed = false;
    let running = false;

    const stop = () => {
      cancelAnimationFrame(frame);
      host.classList.remove('is-assembling');
      running = false;
    };
    const play = (mode = 'normal') => {
      if (mode === 'hover' && running) return;
      stop();
      if (!media.matches || !photo.complete || !photo.naturalWidth || !visible) return;
      const { width, height } = host.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const cols = width < 640 ? 18 : 24;
      const rows = width < 640 ? 24 : 32;
      const tw = width / cols;
      const th = height / rows;
      const scale = Math.max(width / photo.width, height / photo.height);
      const cropW = width / scale;
      const cropH = height / scale;
      const cropX = (photo.width - cropW) / 2;
      const cropY = (photo.height - cropH) / 2;
      // Cache a display-sized image so each fragment avoids resampling the full photograph.
      const texture = document.createElement('canvas');
      texture.width = Math.ceil(width * ratio);
      texture.height = Math.ceil(height * ratio);
      const textureContext = texture.getContext('2d');
      if (!textureContext) return;
      textureContext.drawImage(photo, cropX, cropY, cropW, cropH, 0, 0, texture.width, texture.height);
      const particles = Array.from({ length: cols * rows }, (_, i) => {
        const seed = Math.sin(i * 127.1 + 311.7) * 43758.5453;
        const random = seed - Math.floor(seed);
        return { x: i % cols, y: Math.floor(i / cols), angle: random * Math.PI * 2, radius: 0.15 + random * 0.33, delay: random * 400 };
      });
      host.classList.add('is-assembling');
      running = true;
      const speed = mode === 'slow' ? 3 : 1;
      const start = performance.now();
      const draw = now => {
        const elapsed = (now - start) / speed;
        context.clearRect(0, 0, width, height);
        for (const p of particles) {
          const local = Math.max(0, elapsed - p.delay);
          const smooth = value => { const t = Math.max(0, Math.min(1, value)); return t * t * (3 - 2 * t); };
          const scatter = smooth(local / 1000);
          const rebuild = smooth((local - 2000) / 1700);
          const amount = scatter * (1 - rebuild);
          const angle = p.angle + local * 0.0018;
          const homeX = (p.x + 0.5) * tw;
          const homeY = (p.y + 0.5) * th;
          const swarmX = width / 2 + Math.cos(angle) * width * p.radius;
          const swarmY = height / 2 + Math.sin(angle) * height * p.radius;
          context.save();
          context.translate(homeX + (swarmX - homeX) * amount, homeY + (swarmY - homeY) * amount);
          context.rotate(amount * (angle - Math.PI));
          context.globalAlpha = 1 - amount * 0.15;
          const size = 1 - amount * 0.72;
          context.drawImage(texture, p.x * texture.width / cols, p.y * texture.height / rows, texture.width / cols, texture.height / rows, -tw * size / 2, -th * size / 2, tw * size + 0.4, th * size + 0.4);
          context.restore();
        }
        if (elapsed < 4150) frame = requestAnimationFrame(draw);
        else stop();
      };
      frame = requestAnimationFrame(draw);
    };
    replayRef.current = play;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) stop();
      else if (!started && photo.complete && photo.naturalWidth) { started = true; try { sessionStorage.setItem('portfolio-portrait-seen', '1'); } catch { /* Optional storage. */ } play(); }
    }, { threshold: 0.25 });
    observer.observe(host);
    photo.onload = () => {
      if (!disposed && visible && !started) { started = true; try { sessionStorage.setItem('portfolio-portrait-seen', '1'); } catch { /* Optional storage. */ } play(); }
    };
    photo.src = portrait;
    const onVisibility = () => { if (document.hidden) stop(); };
    media.addEventListener('change', stop);
    window.addEventListener('resize', stop);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      disposed = true;
      stop();
      observer.disconnect();
      photo.onload = null;
      replayRef.current = () => {};
      media.removeEventListener('change', stop);
      window.removeEventListener('resize', stop);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <figure className="swarm-portrait">
      <div ref={hostRef} className="swarm-stage">
        <img src={portrait} alt="Kittisak Porkha" fetchPriority="high" />
        <canvas ref={canvasRef} aria-hidden="true" />
      </div>
      <figcaption className="swarm-caption">
        <span>Rebuild on demand.</span>
        <div className="swarm-controls">
          <button type="button" onClick={() => replayRef.current()}>Rebuild portrait ↗</button>
          <button type="button" onClick={() => replayRef.current('slow')}>Slow rebuild ↗</button>
        </div>
      </figcaption>
    </figure>
  );
}
