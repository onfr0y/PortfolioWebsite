import React from 'react';

const Work = () => {
  const projects = [
    {
      title: "SOUNDTUDYS",
      description: "A sound study platform for exploring and learning about audio. Interactive web application for sound exploration and educational purposes.",
      tech: ["React", "Web Audio", "Frontend", "Interactive"],
      status: "COMPLETED",
      url: "https://soundtudys-onfr0y.vercel.app/",
      featured: true
    },
    {
      title: "FARADAY'S LAW SIMULATION",
      description: "Interactive 3D physics simulation demonstrating electromagnetic induction. Move a magnet through a coil to generate voltage and light up a bulb.",
      tech: ["React", "Three.js", "WebGL", "Physics"],
      status: "COMPLETED",
      url: "https://faradayz-experiment-simulation.vercel.app/",
      featured: true
    },
    {
      title: "SOCIAL MEDIA ENHANCEMENT",
      description: "Self-enhance your social media presence by dressing up your profile. Style your digital identity with curated looks and personalized aesthetics.",
      tech: ["React", "Next.js", "Styling", "Social Media"],
      status: "COMPLETED",
      url: "https://sp-app-fe.vercel.app/",
      featured: true
    },
    {
      title: "AGRICULTURE ASSISTANT",
      description: "AI-powered agriculture assistant app helping farmers with crop management, pest identification, and farming best practices.",
      tech: ["React", "AI", "Machine Learning", "Agriculture"],
      status: "COMPLETED",
      url: "https://ai-comp-app.vercel.app/",
      featured: true
    },
    {
      title: "E-COMMERCE PLATFORM",
      description: "Full-stack e-commerce solution with modern UI, shopping cart functionality, and seamless checkout experience.",
      tech: ["React", "Google Apps Script", "E-commerce", "Full Stack"],
      status: "COMPLETED",
      url: "https://script.google.com/macros/s/AKfycbxLFv5J-1MpBTLbzBstK3IQroVEYr5DQuXypEpwwsHrmA3wNWUXnZ6Dv3tEYi3gEY7n/exec?classId=267d59fd-df53-49e4-a5d6-ba467cd3c652&assignmentId=cbcf264a-bec4-4bee-a3c2-4ec86ae38ce9&submissionId=b2b20fb9-3744-3bf1-dd23-572e7d9d5c5e",
      featured: true
    },
    {
      title: "PORTFOLIO WEBSITE",
      description: "A creative portfolio website with minimalist design and interactive elements",
      tech: ["React", "Tailwind CSS", "Vite"],
      status: "COMPLETED"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-3 order-2 lg:order-1">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-xs uppercase tracking-wider mb-6 font-mono text-gray-600">PROJECTS & WORK</h2>
            <div className="font-mono text-xs leading-relaxed text-gray-800 space-y-4">
              <p>
                Selected projects showcasing design and development capabilities.
                Each project represents a unique challenge and solution.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
          <div className="bg-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">WORK</h1>
            <p className="text-sm mb-8 text-gray-600">projects & creations</p>
            
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={project.title} className={`border-t border-gray-100 pt-6 ${index === 0 ? 'border-t-0 pt-0' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <span className="text-xs uppercase tracking-wide text-gray-500">{project.status}</span>
                  </div>
                  <p className="text-sm mb-4 text-gray-600">{project.description}</p>
                  
                  {/* Interactive Preview for Featured Project */}
                  {project.featured && (
                    <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                      <div className="relative w-full aspect-video">
                        <iframe
                          src={project.url}
                          className="w-full h-full border-0"
                          title={project.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3 bg-white border-t border-gray-200">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-black hover:underline flex items-center gap-2"
                        >
                          Open in new tab
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {/* Link for projects with URLs */}
                  {project.url && !project.featured && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs font-medium text-black hover:underline mb-4 flex items-center gap-2"
                    >
                      View Project
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs px-3 py-1 border border-gray-200 text-gray-700">
                        {tech}
                      </span>
                    ))}
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
                <p className="text-xs uppercase tracking-wider mb-4 text-gray-500">TOTAL PROJECTS</p>
                <p className="text-2xl font-bold">{projects.length}</p>
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs uppercase tracking-wider mb-4 text-gray-500">CATEGORIES</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Web Development</li>
                  <li>• Frontend Design</li>
                  <li>• Mobile Apps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;