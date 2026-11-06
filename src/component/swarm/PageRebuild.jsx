import { useEffect } from 'react';

// Animate individual content blocks without changing sticky or scrolling containers.
export default function PageRebuild() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;
    const animations = new Set();
    const pending = new Set();
    const seen = new Set();
    const sections = [...document.querySelectorAll('#home, #about, #research, #experience, #contact')];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const section = entry.target;
        observer.unobserve(section);
        if (seen.has(section.id)) continue;
        seen.add(section.id);
        const blocks = [...section.querySelectorAll('h1, h2, h3, h4, p, li, img')].filter(el => !el.closest('.swarm-portrait') && !el.parentElement.closest('li'));
        blocks.forEach((el, i) => {
          const angle = i * 2.399;
          const radius = 30 + (i % 5) * 12;
          const animation = el.animate([
            { opacity: 0, transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px) rotate(${(i % 7 - 3) * 3}deg) scale(.92)`, filter: 'blur(3px)' },
            { opacity: .7, transform: `translate(${Math.sin(angle) * 12}px, ${Math.cos(angle) * 12}px) rotate(0deg) scale(.99)`, filter: 'blur(0px)', offset: .65 },
            { opacity: 1, transform: 'translate(0, 0) rotate(0deg) scale(1)', filter: 'blur(0px)' },
          ], { duration: 1600, delay: Math.min(i * 45, 450), easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
        pending.delete(section);
      }
    }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });
    sections.forEach(section => { if (!seen.has(section.id)) { pending.add(section); observer.observe(section); } });
    const stop = () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); animations.clear(); };
    const onMotionChange = () => { if (media.matches) stop(); };
    media.addEventListener('change', onMotionChange);
    return () => { stop(); media.removeEventListener('change', onMotionChange); };
  }, []);
  return null;
}
