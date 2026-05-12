import React, { useState, useRef } from 'react';
import profileImage from '../../assets/profile.PNG';
import SkillsGlobe from '../globe/SkillsGlobe';

const App = () => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;
        const rotateX = -(mouseY / (rect.height / 2)) * 12;
        const rotateY = (mouseX / (rect.width / 2)) * 12;
        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;
        setTilt({ x: rotateX, y: rotateY });
        setGlare({ x: glareX, y: glareY, opacity: 0.18 });
    };

    const handleMouseEnter = () => setIsHovering(true);

    const handleMouseLeave = () => {
        setIsHovering(false);
        setTilt({ x: 0, y: 0 });
        setGlare({ x: 50, y: 50, opacity: 0 });
    };

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
                                    Hover the photo to tilt it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center Column - Main Photo Display */}
                <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 flex items-center justify-center">
                    <div className="w-full flex flex-col items-center">
                        {/* Large Photo - 3D tilt on hover */}
                        <div
                            style={{ perspective: '1000px' }}
                            className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-2xl mb-8 sm:mb-10 lg:mb-12"
                        >
                            <div
                                ref={cardRef}
                                onMouseMove={handleMouseMove}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className="relative aspect-[3/4] bg-white overflow-hidden"
                                style={{
                                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovering ? 1.03 : 1}, ${isHovering ? 1.03 : 1}, 1)`,
                                    transition: isHovering ? 'transform 0.08s ease-out, box-shadow 0.3s ease' : 'transform 0.5s ease, box-shadow 0.5s ease',
                                    transformStyle: 'preserve-3d',
                                    cursor: 'crosshair',
                                    boxShadow: isHovering
                                        ? `${-tilt.y * 2.5}px ${tilt.x * 2.5}px 50px rgba(0,0,0,0.25), 0 20px 60px rgba(0,0,0,0.1)`
                                        : '0 4px 20px rgba(0,0,0,0.08)',
                                    willChange: 'transform',
                                }}
                            >
                                {/* Main Photo Display */}
                                <img
                                    src={profileImage}
                                    alt="Kittisak Porkha"
                                    className="w-full h-full object-cover object-center"
                                    loading="eager"
                                    style={{ pointerEvents: 'none' }}
                                />
                                {/* Glare overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(ellipse at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 65%)`,
                                        transition: isHovering ? 'none' : 'opacity 0.5s ease',
                                    }}
                                />
                            </div>
                        </div>
                        
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
                                <p className="text-sm text-gray-600 mb-4">Fullstack Engineer, AI Engineer, Electrical Engineer (hopefully)</p>
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