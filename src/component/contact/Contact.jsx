import React, { useEffect, useRef, useState } from 'react';
import socialPhoto from '../../assets/social_profile.jpg';

function useOnScreen(threshold = 0.1) {
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

const Contact = () => {
  const contactInfo = [
    { label: "EMAIL", value: "kittijustsaid@gmail.com", href: "mailto:kittijustsaid@gmail.com" },
    { label: "GITHUB", value: "github.com/onfr0y/PortfolioWebsite", href: "https://github.com/onfr0y/PortfolioWebsite" },
    { label: "LOCATION", value: "Bangkok, Thailand", href: null }
  ];

  const [photoRef, photoVisible] = useOnScreen(0.05);
  const [textRef, textVisible] = useOnScreen(0.2);

  const t = {
    bg: { backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' },
    text: { color: 'var(--theme-text)' },
    soft: { color: 'var(--theme-soft)' },
    muted: { color: 'var(--theme-muted)' },
    borderT: { borderTop: '1px solid var(--theme-border)' },
  };

  return (
    <div className="w-full" style={t.bg}>
      {/* Contact info section */}
      <div className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-xs uppercase tracking-wider mb-6 font-mono" style={t.muted}>CONTACT & CONNECT</h2>
              <div className="font-mono text-xs leading-relaxed space-y-4" style={t.soft}>
                <p>
                  Let's connect and explore opportunities for collaboration.
                  Always open to discussing new projects and ideas.
                </p>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight" style={t.text}>CONTACT</h1>
              <p className="text-sm mb-8" style={t.muted}>let's connect!</p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="flex justify-between items-center py-4" style={index > 0 ? t.borderT : undefined}>
                    <span className="text-sm uppercase tracking-wider" style={t.muted}>{info.label}</span>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:opacity-70 transition-opacity"
                        style={t.text}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm" style={t.text}>{info.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6" style={t.borderT}>
                <p className="text-sm text-center" style={t.soft}>
                  Feel free to reach out for collaborations,<br />
                  opportunities, or just to say hello!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-3 order-3">
            <div className="lg:sticky lg:top-24">
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-wider mb-4" style={t.muted}>RESPONSE TIME</p>
                  <p className="text-sm" style={t.soft}>Within 24 hours</p>
                </div>

                <div className="pt-6" style={t.borderT}>
                  <p className="text-xs uppercase tracking-wider mb-4" style={t.muted}>AVAILABLE FOR</p>
                  <ul className="space-y-2 text-sm" style={t.soft}>
                    <li>• Freelance Projects</li>
                    <li>• Full-time Positions</li>
                    <li>• Collaborations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full closing photo — slides up into view */}
      <div
        ref={photoRef}
        className="relative w-full overflow-hidden bg-black"
        style={{
          transform: photoVisible ? 'translateY(0)' : 'translateY(120px)',
          opacity: photoVisible ? 1 : 0,
          transition: 'transform 1.1s cubic-bezier(0.16,1,0.3,1), opacity 0.8s ease',
        }}
      >
        <img
          src={socialPhoto}
          alt="Kittisak Porkha"
          className="w-full h-auto block"
          style={{ pointerEvents: 'none' }}
        />
        {/* Overlay with name — Lando style bottom-left text */}
        <div
          ref={textRef}
          className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
            transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: textVisible ? 1 : 0,
            transition: 'transform 0.7s ease, opacity 0.7s ease',
            transitionDelay: '0.4s',
          }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-2">onfr0y</p>
          <h2
            className="font-black uppercase text-white leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
          >
            KITTISAK<br />PORKHA
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
