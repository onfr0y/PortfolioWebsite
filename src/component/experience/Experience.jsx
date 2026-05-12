import React from 'react';

const t = {
  bg: { backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' },
  text: { color: 'var(--theme-text)' },
  soft: { color: 'var(--theme-soft)' },
  muted: { color: 'var(--theme-muted)' },
  borderT: { borderTop: '1px solid var(--theme-border)' },
};

const Experience = () => {
  const experiences = [
    {
      title: "FREELANCE",
      company: "Freelance hahahah",
      period: "Present",
      description: "Working as a freelance developer, taking on various projects and building cool stuff.",
      achievements: [
        "Working on interesting projects",
        "Learning new technologies",
        "Having fun hahahah"
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen py-8 sm:py-12 lg:py-16" style={t.bg}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-3 order-2 lg:order-1">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-xs uppercase tracking-wider mb-6 font-mono" style={t.muted}>EXPERIENCE & CAREER</h2>
            <div className="font-mono text-xs leading-relaxed space-y-4" style={t.soft}>
              <p>
                Professional journey and career milestones.
                Building expertise through diverse projects and challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight" style={t.text}>EXPERIENCE</h1>
            <p className="text-sm mb-8" style={t.muted}>professional journey</p>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.title} className={`pt-6 ${index === 0 ? 'pt-0' : ''}`} style={index !== 0 ? t.borderT : undefined}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold" style={t.text}>{exp.title}</h3>
                    <span className="text-xs" style={t.muted}>{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium mb-3" style={t.text}>{exp.company}</p>
                  <p className="text-sm mb-4 leading-relaxed" style={t.soft}>{exp.description}</p>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-3" style={t.muted}>KEY ACHIEVEMENTS</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm" style={t.soft}>• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-3 order-3">
          <div className="lg:sticky lg:top-24">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-wider mb-4" style={t.muted}>YEARS OF EXPERIENCE</p>
                <p className="text-2xl font-bold" style={t.text}>4+</p>
              </div>

              <div className="pt-6" style={t.borderT}>
                <p className="text-xs uppercase tracking-wider mb-4" style={t.muted}>FOCUS AREAS</p>
                <ul className="space-y-2 text-sm" style={t.soft}>
                  <li>• Frontend Development</li>
                  <li>• UI/UX Design</li>
                  <li>• Web Applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
