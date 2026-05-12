import { useEffect, useRef, useCallback } from 'react';

const TAGS = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript',
  'React', 'Next.js', 'Node.js', 'REST API',
  'Tailwind', 'Styled Comp.', 'Git', 'Figma',
  'Vite', 'UI/UX', 'Python', 'PostgreSQL',
  'C++', 'C',
];

function fibonacciSphere(n, radius) {
  const points = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    points.push([Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius]);
  }
  return points;
}

function rotateY(point, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [
    point[0] * cos - point[2] * sin,
    point[1],
    point[0] * sin + point[2] * cos,
  ];
}

function rotateX(point, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [
    point[0],
    point[1] * cos - point[2] * sin,
    point[1] * sin + point[2] * cos,
  ];
}

const SkillsGlobe = ({ radius = 140 }) => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const stateRef = useRef({
    angleY: 0,
    angleX: 0.3,
    velY: 0.006,
    velX: 0,
    isDragging: false,
    lastX: 0,
    lastY: 0,
  });
  const rafRef = useRef(null);
  const basePoints = useRef(fibonacciSphere(TAGS.length, radius));

  const animate = useCallback(() => {
    const s = stateRef.current;
    if (!s.isDragging) {
      s.angleY += s.velY;
      s.velX *= 0.95;
      s.angleX += s.velX;
      s.angleX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, s.angleX));
    }

    basePoints.current.forEach((pt, i) => {
      const el = itemRefs.current[i];
      if (!el) return;
      let p = rotateY(pt, s.angleY);
      p = rotateX(p, s.angleX);
      const depth = (p[2] + radius) / (2 * radius);
      const scale = 0.55 + depth * 0.7;
      el.style.transform = `translate(calc(-50% + ${p[0]}px), calc(-50% + ${p[1]}px))`;
      el.style.opacity = (0.2 + depth * 0.8).toFixed(3);
      el.style.fontSize = `${0.6 + scale * 0.45}rem`;
      el.style.fontWeight = depth > 0.7 ? '700' : depth > 0.4 ? '600' : '400';
      el.style.zIndex = Math.round(depth * 100);
    });

    rafRef.current = requestAnimationFrame(animate);
  }, [radius]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  useEffect(() => {
    const container = containerRef.current;

    const onMouseDown = (e) => {
      stateRef.current.isDragging = true;
      stateRef.current.lastX = e.clientX;
      stateRef.current.lastY = e.clientY;
      container.style.cursor = 'grabbing';
    };
    const onMouseMove = (e) => {
      if (!stateRef.current.isDragging) return;
      const dx = e.clientX - stateRef.current.lastX;
      const dy = e.clientY - stateRef.current.lastY;
      stateRef.current.angleY += dx * 0.006;
      stateRef.current.velX = dy * 0.005;
      stateRef.current.angleX += stateRef.current.velX;
      stateRef.current.lastX = e.clientX;
      stateRef.current.lastY = e.clientY;
    };
    const onMouseUp = () => {
      stateRef.current.isDragging = false;
      container.style.cursor = 'grab';
    };
    const onTouchStart = (e) => {
      const t = e.touches[0];
      stateRef.current.isDragging = true;
      stateRef.current.lastX = t.clientX;
      stateRef.current.lastY = t.clientY;
    };
    const onTouchMove = (e) => {
      if (!stateRef.current.isDragging) return;
      const t = e.touches[0];
      const dx = t.clientX - stateRef.current.lastX;
      const dy = t.clientY - stateRef.current.lastY;
      stateRef.current.angleY += dx * 0.006;
      stateRef.current.angleX += dy * 0.005;
      stateRef.current.lastX = t.clientX;
      stateRef.current.lastY = t.clientY;
    };
    const onTouchEnd = () => { stateRef.current.isDragging = false; };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      style={{
        width: `${radius * 2 + 80}px`,
        height: `${radius * 2 + 80}px`,
        cursor: 'grab',
      }}
    >
      {TAGS.map((tag, i) => (
        <span
          key={tag}
          ref={(el) => (itemRefs.current[i] = el)}
          className="absolute top-1/2 left-1/2 font-mono tracking-wide whitespace-nowrap pointer-events-none"
          style={{ color: '#111', transition: 'none' }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default SkillsGlobe;
