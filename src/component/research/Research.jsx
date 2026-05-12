import React, { useState } from 'react';
import harvestaiPoster from '../../assets/harvestai-poster.png';

const t = {
  bg: { backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' },
  text: { color: 'var(--theme-text)' },
  soft: { color: 'var(--theme-soft)' },
  muted: { color: 'var(--theme-muted)' },
  faint: { color: 'var(--theme-faint)' },
  borderT: { borderTop: '1px solid var(--theme-border)' },
  chip: { border: '1px solid var(--theme-border)', borderRadius: '999px', color: 'var(--theme-soft)' },
  btn: { border: '1px solid var(--theme-text)', borderRadius: '999px', color: 'var(--theme-text)' },
  iframeBox: { border: '1px solid var(--theme-border)', borderRadius: '14px' },
};

const Research = () => {
  const [showPreview, setShowPreview] = useState(false);

  const researchProjects = [
    {
      title: "DEVELOPMENT OF WEBSITE TO ENHANCE SELF-CONFIDENCE THROUGH FASHION FOR THAI TEENAGERS",
      titleThai: "การพัฒนาเว็บไซต์ส่งเสริมความมั่นใจผ่านการแต่งกายสำหรับวัยรุ่นไทย",
      description: "Research on developing a website platform that enhances self-confidence among Thai teenagers through fashion and personal styling. The study explores the relationship between digital fashion platforms, self-expression, and confidence building in adolescent development.",
      focus: "Web Development, UX/UI Design, Psychology",
      status: "ONGOING",
      date: "Recent",
      previewUrl: "https://drive.google.com/file/d/1TOprEK2xUynNO_HgBWrEaldh_nfr3Lez/preview"
    },
    {
      title: "HARVESTAI — AI-DRIVEN SUSTAINABLE AGRICULTURE FOR THAILAND",
      titleThai: "ระบบ AI เพื่อการเกษตรยั่งยืน",
      description: "A sustainable agriculture initiative addressing soil degradation from continuous monoculture farming (cassava, corn, sugarcane) in Thailand. HarvestAI combines an LLM for personalized crop-rotation planning, ML-based weather forecasting (OpenWeatherMap, FarmWeather), time-series market-price prediction, and satellite-based land monitoring to guide farmers toward profitable, soil-restoring decisions. Aligned with UN SDGs 2, 9, and 12, and built around UNESCO AI ethics principles of transparency, explainability, and privacy.",
      focus: "LLM, Machine Learning, Time-Series Forecasting, Satellite Data, AI Ethics",
      status: "IN DEVELOPMENT",
      date: "Recent",
      previewUrl: null,
      image: harvestaiPoster,
      imageAlt: "HarvestAI research poster"
    }
  ];

  return (
    <div className="w-full min-h-screen py-8 sm:py-12 lg:py-16" style={t.bg}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-3 order-2 lg:order-1">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-xs uppercase tracking-wider mb-6 font-mono" style={t.muted}>RESEARCH & STUDIES</h2>
            <div className="font-mono text-xs leading-relaxed space-y-4" style={t.soft}>
              <p>
                Ongoing research and studies in technology, design, and development.
                Exploring new ideas and methodologies.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight" style={t.text}>RESEARCH</h1>
            <p className="text-sm mb-8" style={t.muted}>studies & explorations</p>

            <div className="space-y-8">
              {researchProjects.map((project, index) => (
                <div key={project.title} className={`pt-6 ${index === 0 ? 'pt-0' : ''}`} style={index !== 0 ? t.borderT : undefined}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1" style={t.text}>{project.title}</h3>
                      {project.titleThai && (
                        <h4 className="text-base font-medium" style={t.soft}>{project.titleThai}</h4>
                      )}
                    </div>
                    <span className="text-xs uppercase tracking-wide ml-4" style={t.muted}>{project.status}</span>
                  </div>
                  <p className="text-sm mb-4" style={t.soft}>{project.description}</p>

                  {project.image && (
                    <figure className="group relative mb-5">
                      <a
                        href={project.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative overflow-hidden"
                        style={{
                          borderRadius: '14px',
                          border: '1px solid var(--theme-border)',
                          boxShadow: '0 18px 50px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.08)',
                          backgroundColor: 'color-mix(in srgb, var(--theme-bg), #000 6%)',
                        }}
                      >
                        <img
                          src={project.image}
                          alt={project.imageAlt || project.title}
                          loading="lazy"
                          className="w-full h-auto block transition-transform duration-[600ms] ease-out group-hover:scale-[1.015]"
                          style={{ display: 'block' }}
                        />
                        <div
                          className="absolute inset-0 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background:
                              'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 55%)',
                          }}
                        >
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
                            Poster
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/90 border border-white/40 rounded-full px-3 py-1">
                            View full ↗
                          </span>
                        </div>
                      </a>
                      <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em]" style={t.muted}>
                        {project.imageAlt || 'Project poster'}
                      </figcaption>
                    </figure>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.focus.split(', ').map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-3 py-1" style={t.chip}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.previewUrl && (
                    <div className="mt-4">
                      <button
                        onClick={() => setShowPreview(!showPreview)}
                        className="text-xs px-4 py-2 uppercase tracking-wide hover:opacity-70 transition-opacity"
                        style={t.btn}
                      >
                        {showPreview ? 'Close Preview' : 'Open Preview'}
                      </button>
                      {showPreview && (
                        <div className="mt-4 overflow-hidden" style={t.iframeBox}>
                          <iframe
                            src={project.previewUrl}
                            className="w-full h-[600px] border-0"
                            title="Research Preview"
                            allow="autoplay"
                          />
                        </div>
                      )}
                    </div>
                  )}
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
                <p className="text-xs uppercase tracking-wider mb-4" style={t.muted}>RESEARCH AREAS</p>
                <ul className="space-y-2 text-sm" style={t.soft}>
                  <li>• Web Development</li>
                  <li>• UX/UI Design</li>
                  <li>• Psychology</li>
                  <li>• Fashion Technology</li>
                  <li>• Machine Learning</li>
                  <li>• AI Ethics</li>
                  <li>• Sustainable Agriculture</li>
                </ul>
              </div>

              <div className="pt-6" style={t.borderT}>
                <p className="text-xs uppercase tracking-wider mb-4" style={t.muted}>STATUS</p>
                <p className="text-sm" style={t.soft}>Active Research</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
