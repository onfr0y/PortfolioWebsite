import React, { useEffect, useRef, useState } from 'react';

const projects = [
  {
    num: '01',
    title: 'TWO TEEN STORY PODCAST',
    description: 'A podcast web application for teenagers to share stories and experiences.',
    tech: ['React', 'Frontend', 'Audio'],
    status: 'COMPLETED',
    url: 'https://two-teen-story.vercel.app/',
  },
  {
    num: '02',
    title: 'SOUNDOS',
    description: 'Sound study platform for exploring and learning about audio. Interactive web application for sound exploration and educational purposes.',
    tech: ['React', 'Web Audio', 'Frontend', 'Interactive'],
    status: 'COMPLETED',
    url: 'https://soundos-onfr0y.vercel.app/',
  },
  {
    num: '03',
    title: "FARADAY'S LAW SIMULATION",
    description: 'Interactive 3D physics simulation demonstrating electromagnetic induction. Move a magnet through a coil to generate voltage and light up a bulb.',
    tech: ['React', 'Three.js', 'WebGL', 'Physics'],
    status: 'COMPLETED',
    url: 'https://faradayz-experiment-simulation.vercel.app/',
  },
  {
    num: '04',
    title: 'SOCIAL MEDIA ENHANCEMENT',
    description: 'Self-enhance your social media presence by dressing up your profile. Style your digital identity with curated looks and personalized aesthetics.',
    tech: ['React', 'Next.js', 'Styling', 'Social Media'],
    status: 'COMPLETED',
    url: 'https://sp-app-fe.vercel.app/',
  },
  {
    num: '05',
    title: 'AGRICULTURE ASSISTANT',
    description: 'AI-powered agriculture assistant app helping farmers with crop management, pest identification, and farming best practices.',
    tech: ['React', 'AI', 'Machine Learning', 'Agriculture'],
    status: 'COMPLETED',
    url: 'https://ai-comp-app.vercel.app/',
  },

];

function useOnScreen(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const ProjectRow = ({ project, index }) => {
  const [rowRef, rowVisible] = useOnScreen(0.1);
  const [imgRef, imgVisible] = useOnScreen(0.05);

  return (
    <div
      ref={rowRef}
      className="relative border-t border-gray-100 py-12 sm:py-16 overflow-hidden"
    >
      {/* Number watermark */}
      <span
        className="absolute top-6 left-0 font-mono font-black text-gray-50 pointer-events-none select-none leading-none"
        style={{ fontSize: 'clamp(80px, 12vw, 160px)', lineHeight: 1 }}
        aria-hidden
      >
        {project.num}
      </span>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left — text, slides in from left */}
        <div
          style={{
            transform: rowVisible ? 'translateX(0)' : 'translateX(-60px)',
            opacity: rowVisible ? 1 : 0,
            transition: 'transform 0.75s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease',
            transitionDelay: '0.05s',
          }}
        >
          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-mono text-xs text-gray-400">{project.num}</span>
            <span className="text-xs uppercase tracking-widest text-gray-400">{project.status}</span>
          </div>
          <h3
            className="font-black uppercase leading-none mb-4 tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(t => (
              <span key={t} className="font-mono text-xs px-3 py-1 border border-gray-200 text-gray-600">
                {t}
              </span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-black px-5 py-3 hover:bg-black hover:text-white transition-colors duration-200"
          >
            View Project
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M7 7h10v10" />
            </svg>
          </a>
        </div>

        {/* Right — iframe/preview, slides in from right */}
        <div
          ref={imgRef}
          style={{
            transform: imgVisible ? 'translateX(0)' : 'translateX(120px)',
            opacity: imgVisible ? 1 : 0,
            transition: 'transform 0.85s cubic-bezier(0.16,1,0.3,1), opacity 0.7s ease',
            transitionDelay: '0.15s',
          }}
        >
          <div className="relative w-full overflow-hidden bg-gray-50 border border-gray-100"
            style={{ aspectRatio: '16/10' }}
          >
            <iframe
              src={project.url}
              className="w-full h-full border-0 scale-[0.85] origin-top-left pointer-events-none"
              style={{ width: '117%', height: '117%' }}
              title={project.title}
              loading="lazy"
              tabIndex={-1}
            />
            {/* Clickable overlay that opens in new tab */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-end p-4"
              aria-label={`Open ${project.title}`}
            >
              <span className="bg-white/90 backdrop-blur-sm font-mono text-xs px-3 py-2 flex items-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-200">
                Open ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const [headerRef, headerVisible] = useOnScreen(0.3);

  return (
    <div className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div
          ref={headerRef}
          className="mb-16 sm:mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-3">
              <h2 className="text-xs uppercase tracking-wider font-mono text-gray-500">PROJECTS & WORK</h2>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none">WORK</h1>
              <p className="font-mono text-sm text-gray-500 mt-3">projects & creations</p>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:text-right">
              <p className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-1">Total</p>
              <p className="text-4xl font-black">{projects.length}</p>
            </div>
          </div>
        </div>

        {/* Project rows */}
        <div>
          {projects.map((project, index) => (
            <ProjectRow key={project.num} project={project} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Work;
