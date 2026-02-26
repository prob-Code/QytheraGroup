import React, { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState('Initializing Experts...');
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const startTime = Date.now();
        const duration = 1000; // 1 second

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const currentProgress = Math.min((elapsed / duration) * 100, 100);

            setProgress(currentProgress);

            if (currentProgress < 50) {
                setText('Initializing Experts...');
            } else if (currentProgress < 90) {
                setText('Syncing Curriculum...');
            } else {
                setText('Finalizing...');
            }

            if (currentProgress < 100) {
                requestAnimationFrame(updateProgress);
            } else {
                setTimeout(() => {
                    setIsVisible(false);
                    setTimeout(onComplete, 500); // Wait for fade out animation
                }, 200);
            }
        };

        requestAnimationFrame(updateProgress);
    }, [onComplete]);

    if (!isVisible && progress === 100) {
        return null; // Don't render after fade out is complete
    }

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${!isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            <div className="flex flex-col items-center w-full max-w-md px-6">
                {/* Pulsing Logo */}
                <div className="mb-12 animate-pulse flex items-center justify-center">
                    <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Qythera Group
                    </span>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4 shadow-inner">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-75 ease-linear"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Loading Text */}
                <p className="text-slate-500 font-medium text-sm animate-pulse">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Preloader;
