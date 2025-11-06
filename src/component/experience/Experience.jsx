import React from 'react';

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
    <div className="w-full min-h-screen bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-3 order-2 lg:order-1">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-xs uppercase tracking-wider mb-6 font-mono text-gray-600">EXPERIENCE & CAREER</h2>
            <div className="font-mono text-xs leading-relaxed text-gray-800 space-y-4">
              <p>
                Professional journey and career milestones.
                Building expertise through diverse projects and challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
          <div className="bg-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">EXPERIENCE</h1>
            <p className="text-sm mb-8 text-gray-600">professional journey</p>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.title} className={`border-t border-gray-100 pt-6 ${index === 0 ? 'border-t-0 pt-0' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <span className="text-xs text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 mb-3">{exp.company}</p>
                  <p className="text-sm mb-4 text-gray-600 leading-relaxed">{exp.description}</p>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-3 text-gray-500">KEY ACHIEVEMENTS</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-700">• {achievement}</li>
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
                <p className="text-xs uppercase tracking-wider mb-4 text-gray-500">YEARS OF EXPERIENCE</p>
                <p className="text-2xl font-bold">4+</p>
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs uppercase tracking-wider mb-4 text-gray-500">FOCUS AREAS</p>
                <ul className="space-y-2 text-sm text-gray-700">
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