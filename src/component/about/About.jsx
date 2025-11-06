import React from 'react';

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-3 order-2 lg:order-1">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-xs uppercase tracking-wider mb-6 font-mono text-gray-600">ABOUT & ORIGIN</h2>
            <div className="font-mono text-xs leading-relaxed text-gray-800 space-y-4">
              <p>
                Personal background and professional journey. 
                Exploring the intersection of technology and creativity.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold mb-2">BACKGROUND</p>
                <p className="text-gray-600">
                  Passionate developer with a focus on creating 
                  beautiful and functional digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
          <div className="bg-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">ABOUT</h1>
            <p className="text-sm mb-8 text-gray-600">who is kittisak porkha?</p>
            
            <div className="space-y-6 text-sm leading-relaxed">
              <p className="text-gray-800">
                Hi! I'm Kittisak (onfr0y), a passionate developer who loves creating
                beautiful and functional digital experiences.
              </p>
              <p className="text-gray-800">
                I specialize in modern web technologies, with a keen eye for design
                and user experience. When I'm not coding, you can find me exploring
                nature or experimenting with new creative projects.
              </p>
              
              <div className="pt-6 border-t border-gray-100">
                <p className="font-semibold mb-4 text-gray-900">INTERESTS</p>
                <ul className="space-y-2 text-gray-700">
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
                <p className="text-xs uppercase tracking-wider mb-4 text-gray-500">LOCATION</p>
                <p className="text-sm text-gray-700">Bangkok, Thailand</p>
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs uppercase tracking-wider mb-4 text-gray-500">STATUS</p>
                <p className="text-sm text-gray-700">Available for opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;