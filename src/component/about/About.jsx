import React from 'react';

const t = {
  bg: { backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' },
  text: { color: 'var(--theme-text)' },
  soft: { color: 'var(--theme-soft)' },
  muted: { color: 'var(--theme-muted)' },
  faint: { color: 'var(--theme-faint)' },
  borderT: { borderTop: '1px solid var(--theme-border)' },
};

const About = () => {
  return (
    <div className="w-full min-h-screen py-8 sm:py-12 lg:py-16" style={t.bg}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-3 order-2 lg:order-1">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-xs uppercase tracking-wider mb-6 font-mono" style={t.muted}>ABOUT & ORIGIN</h2>
            <div className="font-mono text-xs leading-relaxed space-y-4" style={t.soft}>
              <p>
                Personal background and professional journey.
                Exploring the intersection of technology and creativity.
              </p>
              <div className="pt-4" style={t.borderT}>
                <p className="font-semibold mb-2" style={t.text}>BACKGROUND</p>
                <p style={t.muted}>
                  Passionate developer with a focus on creating
                  beautiful and functional digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight" style={t.text}>ABOUT</h1>
            <p className="text-sm mb-8" style={t.muted}>who is kittisak porkha?</p>

            <div className="space-y-6 text-sm leading-relaxed">
              <p style={t.soft}>
                Hi! I'm Kittisak (onfr0y), a passionate developer who loves creating
                beautiful and functional digital experiences.
              </p>
              <p style={t.soft}>
                I specialize in modern web technologies, with a keen eye for design
                and user experience. When I'm not coding, you can find me exploring
                nature or experimenting with new creative projects.
              </p>

              <div className="pt-6" style={t.borderT}>
                <p className="font-semibold mb-4" style={t.text}>INTERESTS</p>
                <ul className="space-y-2" style={t.soft}>
                  <li>• Frontend Development</li>
                  <li>• UI/UX Design</li>
                  <li>• Photography</li>
                  <li>• Digital Art</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-3 order-3">
          <div className="lg:sticky lg:top-24">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-wider mb-4" style={t.muted}>LOCATION</p>
                <p className="text-sm" style={t.soft}>Bangkok, Thailand</p>
              </div>

              <div className="pt-6" style={t.borderT}>
                <p className="text-xs uppercase tracking-wider mb-4" style={t.muted}>STATUS</p>
                <p className="text-sm" style={t.soft}>Available for opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
