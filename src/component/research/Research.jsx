import React, { useState } from 'react';

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
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-3 order-2 lg:order-1">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-xs uppercase tracking-wider mb-6 font-mono text-gray-600">RESEARCH & STUDIES</h2>
            <div className="font-mono text-xs leading-relaxed text-gray-800 space-y-4">
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">RESEARCH</h1>
            <p className="text-sm mb-8 text-gray-600">studies & explorations</p>
            
            <div className="space-y-8">
              {researchProjects.map((project, index) => (
                <div key={project.title} className={`border-t border-gray-100 pt-6 ${index === 0 ? 'border-t-0 pt-0' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                      {project.titleThai && (
                        <h4 className="text-base font-medium text-gray-700">{project.titleThai}</h4>
                      )}
                    </div>
                    <span className="text-xs uppercase tracking-wide text-gray-500 ml-4">{project.status}</span>
                  </div>
                  <p className="text-sm mb-4 text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.focus.split(', ').map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-3 py-1 border border-gray-200 text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.previewUrl && (
                    <div className="mt-4">
                      <button
                        onClick={() => setShowPreview(!showPreview)}
                        className="text-xs px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors uppercase tracking-wide"
                      >
                        {showPreview ? 'Close Preview' : 'Open Preview'}
                      </button>
                      {showPreview && (
                        <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
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
                <p className="text-xs uppercase tracking-wider mb-4 text-gray-500">RESEARCH AREAS</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Web Development</li>
                  <li>• UX/UI Design</li>
                  <li>• Psychology</li>
                  <li>• Fashion Technology</li>
                </ul>
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs uppercase tracking-wider mb-4 text-gray-500">STATUS</p>
                <p className="text-sm text-gray-700">Active Research</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
