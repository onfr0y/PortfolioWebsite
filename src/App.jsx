import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// component
import Reciept from './component/reciept/reciept'
import BlurredBackground from './component/background/BlurredBackground'
import Headerbar from './component/header/headerbar'
import About from './component/about/About'
import Work from './component/work/Work'
import Research from './component/research/Research'
import Experience from './component/experience/Experience'
import Contact from './component/contact/Contact'
import GlassSurface from './component/glass/GlassSurface'

const NAV_ITEMS = [
  { name: 'ABOUT', href: '#about' },
  { name: 'WORK', href: '#work' },
  { name: 'RESEARCH', href: '#research' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

const scrollToSection = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// receipt setup data

function App() {
  const [count, setCount] = useState(0)
  const [dockMode, setDockMode] = useState(false)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  )
  const dockTriggerRef = useRef(null)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Scroll-driven theme: white at top, gradually dark silver toward bottom.
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const raw = Math.max(0, Math.min(1, window.scrollY / max));
      const t = raw * raw * (3 - 2 * raw); // smoothstep
      root.style.setProperty('--theme-progress', t.toFixed(4));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Dock mode: enable once the Work section reaches the top of the viewport,
  // stays active through Research / Experience / Contact.
  useEffect(() => {
    const check = () => {
      const el = dockTriggerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Activate once the Work section's top crosses ~120px below viewport top.
      const shouldDock = rect.top <= 120;
      setDockMode(prev => (prev !== shouldDock ? shouldDock : prev));
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  return (
    <>

    <BlurredBackground>
      {/* Default sticky header — fades out when dock mode activates */}
      <div
        className='sticky top-0 z-40'
        style={{
          backgroundColor: 'var(--theme-bg)',
          opacity: dockMode ? 0 : 1,
          pointerEvents: dockMode ? 'none' : 'auto',
          transition: 'opacity 0.5s ease',
        }}
      >
        <Headerbar />
      </div>

      {/* Glass dock — appears in Work section, responsive */}
      <div
        className='fixed left-1/2 z-50 pointer-events-none w-full px-3 sm:px-0 flex justify-center'
        style={{
          top: dockMode ? (isMobile ? '12px' : '20px') : '-80px',
          transform: 'translateX(-50%)',
          opacity: dockMode ? 1 : 0,
          transition: 'top 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
          maxWidth: '100vw',
        }}
      >
        <div className='pointer-events-auto'>
          <GlassSurface
            width={isMobile ? 'min(94vw, 420px)' : 560}
            height={isMobile ? 48 : 56}
            borderRadius={isMobile ? 24 : 28}
            blur={11}
            displace={0.6}
            distortionScale={-180}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
            brightness={50}
            opacity={0.93}
            backgroundOpacity={0}
            saturation={1}
            mixBlendMode='difference'
          >
            <nav className='w-full'>
              <ul className='flex items-center justify-center gap-2.5 sm:gap-5 px-2 sm:px-3'>
                {NAV_ITEMS.map(item => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className='text-[10px] sm:text-xs font-medium uppercase tracking-wide hover:opacity-70 transition-opacity whitespace-nowrap'
                      style={{ color: 'var(--theme-text)' }}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </GlassSurface>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className='flex flex-col'>
        {/* Hero/Skills Section */}
        <section id="home" className='flex min-h-screen'>
          <div className='w-full flex justify-center items-center py-4 sm:py-8'>
            <Reciept />
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Work Section */}
        <section id="work" ref={dockTriggerRef}>
          <Work />
        </section>

        {/* Research Section */}
        <section id="research">
          <Research />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </BlurredBackground>

    </>
  )
}

export default App