import React, { useState } from 'react';

const WhatsAppWidget = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 flex-row-reverse md:flex-row pb-2 pr-2">

            {/* Tooltip */}
            <div
                className={`bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-100 transition-all duration-300 transform origin-right whitespace-nowrap lg:block absolute right-[80px] bottom-[10px]
          ${isHovered ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-4 pointer-events-none'}
        `}
            >
                <p className="text-[13px] font-bold text-slate-800">Chat on WhatsApp</p>
                {/* White Arrow pointing right */}
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-t border-r border-slate-100/0"></div>
            </div>

            {/* Button */}
            <a
                href="https://wa.me/918431220992" // Contact number from footer mock
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center text-3xl md:text-[2.5rem] hover:-translate-y-1 transition-all duration-300 relative group z-10"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label="Chat with us on WhatsApp"
            >
                <i className="fa-brands fa-whatsapp relative z-10"></i>
            </a>

        </div>
    );
};

export default WhatsAppWidget;
