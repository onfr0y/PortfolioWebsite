import SwarmPortrait from '../swarm/SwarmPortrait';
import SkillsGlobe from '../globe/SkillsGlobe';

const App = () => {
    return (
        <div className="w-full min-h-screen bg-white">
            {/* Three-column layout similar to e-commerce reference */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
                {/* Left Column - Skills label */}
                <div className="col-span-12 lg:col-span-3 order-3 lg:order-1">
                    <div className="lg:sticky lg:top-24">
                        <h2 className="text-xs uppercase tracking-wider mb-4 sm:mb-6 font-mono text-gray-600">SKILLS & STACK</h2>
                        <div className="font-mono text-xs leading-relaxed text-gray-800 space-y-4">
                            <div>
                                <p className="font-semibold mb-2">OVERVIEW</p>
                                <p className="text-gray-600">
                                    Modern web stack with focus on clean code,
                                    responsive design, and great user experience.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                                <p className="font-semibold mb-2">INTERACTION</p>
                                <p className="text-gray-600">
                                    Drag the globe to spin it.<br/>
                                    Use the buttons below the portrait to rebuild it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center Column - Main Photo Display */}
                <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 flex items-center justify-center">
                    <div className="w-full flex flex-col items-center">
                        <SwarmPortrait />

                        {/* Skills Globe */}
                        <div className="flex flex-col items-center">
                            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-2">drag to rotate</p>
                            <SkillsGlobe radius={130} />
                        </div>
                    </div>
                </div>

                {/* Right Column - Photo Thumbnails & Info */}
                <div className="col-span-12 lg:col-span-3 order-2 lg:order-3">
                    <div className="lg:sticky lg:top-24">
                        {/* Name & Title */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">KITTISAK PORKHA</h3>
                                <p className="text-sm text-gray-600 mb-4">Developer · TwoTeenStory Co-founder & Podcaster</p>
                                <p className="text-2xl font-bold">onfr0y.</p>
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

export default App;