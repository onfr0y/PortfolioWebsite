import React from 'react';

const Contact = () => {
  const contactInfo = [
    { label: "EMAIL", value: "kittijustsaid@gmail.com", href: "mailto:kittijustsaid@gmail.com" },
    { label: "GITHUB", value: "github.com/onfr0y/PortfolioWebsite", href: "https://github.com/onfr0y/PortfolioWebsite" },
    { label: "LOCATION", value: "Bangkok, Thailand", href: null }
  ];

  return (
    <div className="w-full min-h-screen bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-3 order-2 lg:order-1">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-xs uppercase tracking-wider mb-6 font-mono text-gray-600">CONTACT & CONNECT</h2>
            <div className="font-mono text-xs leading-relaxed text-gray-800 space-y-4">
              <p>
                Let's connect and explore opportunities for collaboration.
                Always open to discussing new projects and ideas.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
          <div className="bg-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">CONTACT</h1>
            <p className="text-sm mb-8 text-gray-600">let's connect!</p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={info.label} className={`flex justify-between items-center py-4 ${index > 0 ? 'border-t border-gray-100' : ''}`}>
                  <span className="text-sm uppercase tracking-wider text-gray-500">{info.label}</span>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-900 hover:opacity-70 transition-opacity"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-900">{info.value}</span>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-600 text-center">
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
                <p className="text-xs uppercase tracking-wider mb-4 text-gray-500">RESPONSE TIME</p>
                <p className="text-sm text-gray-700">Within 24 hours</p>
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs uppercase tracking-wider mb-4 text-gray-500">AVAILABLE FOR</p>
                <ul className="space-y-2 text-sm text-gray-700">
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
  );
};

export default Contact;