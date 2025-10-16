import React, { useEffect, useRef, useCallback } from 'react';

// --- Data for the receipt ---
// You can easily modify this object to change the skills listed.
const skillsData = {
    "Languages": ["HTML", "CSS", "JavaScript", "TypeScript"],
    "Frameworks": ["React", "Next.js"],
    "Styling": ["Tailwind CSS", "Styled Comp."],
    "Tools": ["Git", "Figma", "Vite"]
};

// --- The Scratch-Off Canvas Component ---
// This component handles the logic for a single scratchable item.
const ScratchItem = ({ text, onCanvasReady }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            onCanvasReady(canvas);
        }
    }, [onCanvasReady]);

    return (
        <div className="scratch-item relative select-none">
            <canvas ref={canvasRef} className="scratch-canvas absolute top-0 left-0 w-full h-full z-10"></canvas>
            <span>[x] {text}</span>
        </div>
    );
};

// --- The Main App Component ---
const App = () => {
    // A ref to hold all the canvas elements once they are mounted
    const canvasRefs = useRef(new Set());

    // This callback is passed to each ScratchItem to collect their canvas refs
    const handleCanvasReady = useCallback((canvas) => {
        canvasRefs.current.add(canvas);
        setupCanvas(canvas); 
    }, []);
    
    // --- Canvas Setup and Scratching Logic ---

    // Function to set up a single canvas with its texture
    const setupCanvas = useCallback((canvas) => {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);

        const textureImg = new Image();
        textureImg.onload = () => {
            const pattern = ctx.createPattern(textureImg, 'repeat');
            ctx.fillStyle = pattern;
            ctx.fillRect(0, 0, rect.width, rect.height);
            
            // Re-apply any existing scratch effect after texture is loaded (important for resize)
            const maxScratched = parseFloat(canvas.dataset.maxScratched) || 0;
            if (maxScratched > 0) {
               applyScratch(canvas, maxScratched);
            }
        };
        // SVG for the metallic scratch texture
        textureImg.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cdefs%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='60' height='60' fill='%23b8b8b8'/%3E%3Crect width='60' height='60' filter='url(%23n)' opacity='0.3'/%3E%3C/svg%3E";
    }, []);

    // Function to "erase" a percentage of the scratch layer
    const applyScratch = (canvas, percentage) => {
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillRect(0, 0, canvas.width / dpr, (canvas.height / dpr) * percentage);
        ctx.globalCompositeOperation = 'source-over';
    };

    // --- Event Handlers ---

    // The main scroll handler that calculates and applies the scratch effect
    const handleScroll = useCallback(() => {
        const viewportHeight = window.innerHeight;
        // The "active zone" in the viewport for scratching
        const startLine = viewportHeight * 0.8; 
        const endLine = viewportHeight * 0.4;
        const range = startLine - endLine;

        canvasRefs.current.forEach(canvas => {
            if(!canvas) return;
            const rect = canvas.getBoundingClientRect();
            
            const progress = (startLine - rect.top) / range;
            const clampedProgress = Math.max(0, Math.min(1, progress));
            const maxScratched = parseFloat(canvas.dataset.maxScratched) || 0;

            if (clampedProgress > maxScratched) {
                canvas.dataset.maxScratched = clampedProgress;
                applyScratch(canvas, clampedProgress);
            }
        });
    }, [applyScratch]);

    // Sets up canvases again on resize
    const handleResize = useCallback(() => {
        canvasRefs.current.forEach(canvas => {
            if(canvas) setupCanvas(canvas);
        });
    }, [setupCanvas]);

    // --- Effect to set up and clean up event listeners ---
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);
        
        // Initial check on load
        handleScroll();
        
        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [handleScroll, handleResize]);


    return (
        <>
            {/* This <style> block contains CSS that's hard to replicate with Tailwind alone,
              like custom font families and complex filters. For a real project, you would 
              typically move this to a global CSS file.

              IMPORTANT: You will need to add the Google Fonts link to your project's 
              main public/index.html file for these fonts to work:
              <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Great+Vibes&family=Playfair+Display:wght@900&display=swap" rel="stylesheet">
            */}
            <style jsx global>{`
                body {
                    font-family: 'Courier Prime', monospace;
                }
                .font-receipt-title {
                    font-family: 'Playfair Display', serif;
                    font-weight: 900;
                    letter-spacing: 1px;
                }
                .font-onfroy {
                    font-family: 'Great Vibes', cursive;
                    font-weight: 400;
                    font-size: 5.5rem;
                    line-height: 0.8;
                }
                .paper {
                     box-shadow: 0 8px 25px rgba(0,0,0,0.2);
                     filter: url('#crumple-filter');
                     transform: rotate(-1.5deg);
                }
                .paper h1, .paper p, .paper span {
                    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
                }
                .sticker {
                    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
                }
                .noise-overlay {
                    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><filter id="a"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23a)" opacity="0.07"/></svg>');
                }
            `}</style>
            
            {/* SVG filter for the crumpled paper effect */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <filter id="crumple-filter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02 0.05" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" result="crumpled" />
                    <feSpecularLighting in="noise" surfaceScale="5" specularConstant=".45" specularExponent="20" lightingColor="#fff" result="specular">
                        <fePointLight x="-5000" y="-10000" z="20000" />
                    </feSpecularLighting>
                    <feComposite in="crumpled" in2="specular" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
                </filter>
            </svg>

            <div className="flex flex-col items-center justify-start min-h-screen p-4">
                <div className="noise-overlay fixed top-0 left-0 w-screen h-screen pointer-events-none z-50"></div>

                <div className="h-[80vh]"></div> {/* Top Spacer */}

                <div className="relative w-full max-w-xs flex justify-center items-start">
                    {/* Receipt Paper */}
                    <div className="paper relative w-[200px] h-auto bg-white rounded-lg p-4 z-10">
                        <h1 className="font-receipt-title text-4xl mb-2">receipt.</h1>
                        <p className="text-sm mb-4">hello! kittisak porkha's skill</p>
                        <div className="space-y-1 text-sm">
                            {Object.entries(skillsData).map(([category, skills], index) => (
                                <div key={category} className={index > 0 ? 'pt-3' : ''}>
                                    <p className="font-bold">{category}</p>
                                    {skills.map(skill => (
                                        <ScratchItem key={skill} text={skill} onCanvasReady={handleCanvasReady} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 'onfr0y.' Sticker */}
                    <div className="sticker absolute w-[120px] h-[260px] bg-white rounded-lg flex items-center justify-center top-32 -right-8 rotate-3">
                        <p className="font-onfroy text-black transform -rotate-90">onfr0y.</p>
                    </div>
                </div>
                
                <div className="h-[150vh]"></div> {/* Bottom Spacer */}
            </div>
        </>
    );
};

export default App;

