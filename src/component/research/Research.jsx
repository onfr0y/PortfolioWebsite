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
  const [showPreview, setShowPreview] = useState(null);

  const researchProjects = [
    {
      title: "DEVELOPMENT OF WEBSITE TO ENHANCE SELF-CONFIDENCE THROUGH FASHION FOR THAI TEENAGERS",
      titleThai: "การพัฒนาเว็บไซต์ส่งเสริมความมั่นใจผ่านการแต่งกายสำหรับวัยรุ่นไทย",
      description: "Designed, built and evaluated a fashion community for Thai teenagers aged 12–18 as a self-directed research project at Thammasat Secondary School. In a pre-test/post-test study of 31 students, mean self-confidence increased from 3.91 to 4.31 (paired-samples t-test: t = 3.66, p = 0.001). Satisfaction averaged 4.49/5. This small study measured change within the group; it does not establish causation or wider generalisability.",
      focus: "Web Development, UX/UI Design, Psychology",
      status: "COMPLETED",
      date: "2025",
      previewUrl: "https://drive.google.com/file/d/1eLEUXC34yY0Jl8dgjYT11u9Q4bf9qrtl/preview",
      sourceUrl: "https://drive.google.com/drive/folders/1AYExZEA0ieagDKOaGRb3tbZP00pLmzi8",
      codeUrl: "https://github.com/onfr0y/Sp-app"
    },
    {
      title: "HARVESTAI — AI-DRIVEN SUSTAINABLE AGRICULTURE FOR THAILAND",
      titleThai: "ระบบ AI เพื่อการเกษตรยั่งยืน",
      description: "Represented TSS Coder with HarvestAI, a smart-farming and soil-restoration project selected as one of 10 finalists from more than 300 international entries in Beyond Green: AI for a Thriving Future, held during the 3rd UNESCO Global Forum on the Ethics of Artificial Intelligence in Bangkok, 24–27 June 2025. Built a custom weather forecasting API using Ridge Regression and a Node.js/React application integrating n8n and an LLM to answer user queries.",
      focus: "LLM, Machine Learning, Time-Series Forecasting, Satellite Data, AI Ethics",
      status: "TOP 10 FINALIST",
      date: "2025",
      previewUrl: "https://drive.google.com/file/d/1slu7KIKb964KZ5DElfiWIVBDmNCFtJd5/preview",
      sourceUrl: "https://drive.google.com/drive/folders/1V_WQyrfkF3BTsjuZ5XlPr6LsjSSOqlAr",
      codeUrl: "https://github.com/onfr0y/Ai_comp_app",
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
                Research and applied projects in technology, design, and development.
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
                  <div className="flex flex-wrap gap-5 text-xs mb-4">
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Project documents ↗</a>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Source code ↗</a>
                    <span style={t.muted}>{project.date}</span>
                  </div>
                  {project.previewUrl && (
                    <div className="mt-4">
                      <button
                        onClick={() => setShowPreview(showPreview === project.title ? null : project.title)}
                        className="text-xs px-4 py-2 uppercase tracking-wide hover:opacity-70 transition-opacity"
                        style={t.btn}
                      >
                        {showPreview === project.title ? 'Close Preview' : 'Open Preview'}
                      </button>
                      {showPreview === project.title && (
                        <div className="mt-4 overflow-hidden" style={t.iframeBox}>
                          <iframe
                            src={project.previewUrl}
                            className="w-full h-[600px] border-0"
                            title={`${project.title} — document preview`}
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
                <p className="text-sm" style={t.soft}>Research & applied projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
