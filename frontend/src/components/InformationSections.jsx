import React from 'react';
import { Link } from 'react-router-dom';

const InformationSections = () => {

    const domains = [
        {
            icon: 'fa-globe',
            title: 'Web Development',
            subtitle: 'Build modern, responsive websites and web applications.',
        },
        {
            icon: 'fa-terminal',
            title: 'Python Programming',
            subtitle: 'Scripting, automation, data processing, and more.',
        },
        {
            icon: 'fa-mug-hot',
            title: 'Java Programming',
            subtitle: 'Enterprise applications and robust backend systems.',
        },
        {
            icon: 'fa-microchip',
            title: 'C++ Programming',
            subtitle: 'System-level programming and performance-critical code.',
        },
        {
            icon: 'fa-brain',
            title: 'Machine Learning',
            subtitle: 'AI models, data pipelines, and intelligent systems.',
        },
        {
            icon: 'fa-palette',
            title: 'UI/UX Design',
            subtitle: 'User-centered design, prototyping, and visual systems.',
        }
    ];

    return (
        <div className="bg-slate-50 overflow-hidden">

            {/* 1. Why Choose Us Section */}
            <section id="why-us" className="py-24 relative overflow-hidden bg-slate-900 z-10">
                {/* Dark tech background image overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>

                <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative z-10">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-900/50 text-[#60A5FA] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-lg border border-blue-500/20 backdrop-blur-md">
                            EXPLORE BENEFITS
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white mb-4 leading-tight">
                            Why Choose <span className="underline decoration-[#3B82F6] underline-offset-[8px] decoration-[4px] md:decoration-[6px]">Qythera Group?</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <a href="https://forms.gle/i4X5pDwVM6FGWdrTA" target="_blank" rel="noopener noreferrer" className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left border border-slate-100 relative z-10 group cursor-pointer block">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#3B82F6] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
                                <i className="fa-solid fa-user-group"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">Industry Mentors</h3>
                            <p className="text-slate-500 text-[15px] leading-relaxed font-medium">Learn directly from seasoned professionals with years of real-world experience in top tech companies.</p>
                        </a>

                        {/* Card 2 */}
                        <a href="https://forms.gle/i4X5pDwVM6FGWdrTA" target="_blank" rel="noopener noreferrer" className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left border border-slate-100 relative z-10 group cursor-pointer block">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#3B82F6] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
                                <i className="fa-regular fa-building"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">Verified Companies</h3>
                            <p className="text-slate-500 text-[15px] leading-relaxed font-medium">All partner companies are thoroughly vetted to ensure quality placements and genuine work environments.</p>
                        </a>

                        {/* Card 3 */}
                        <a href="https://forms.gle/i4X5pDwVM6FGWdrTA" target="_blank" rel="noopener noreferrer" className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left border border-slate-100 relative z-10 group cursor-pointer block">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#3B82F6] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
                                <i className="fa-regular fa-folder-open"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">Real-World Projects</h3>
                            <p className="text-slate-500 text-[15px] leading-relaxed font-medium">Work on live projects that impact real businesses — not just practice exercises or simulated tasks.</p>
                        </a>

                        {/* Card 4 */}
                        <a href="https://forms.gle/i4X5pDwVM6FGWdrTA" target="_blank" rel="noopener noreferrer" className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left border border-slate-100 relative z-10 group cursor-pointer block">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#3B82F6] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
                                <i className="fa-solid fa-award"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">Certification</h3>
                            <p className="text-slate-500 text-[15px] leading-relaxed font-medium">Receive an industry-recognized internship certificate and letter of recommendation upon completion.</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. About Us Section (Exactly matching original description) */}
            <section id="about" className="py-24 relative bg-white overflow-hidden">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        {/* Left Side: Images & Graphics */}
                        <div className="relative order-2 lg:order-1 mt-10 lg:mt-0">
                            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] max-w-lg mx-auto lg:mx-0 border-[8px] border-white hover:scale-[1.02] hover:shadow-3xl transition-all duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                    alt="Students collaborating"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold text-lg">Collaborative Space</p>
                                    <p className="text-sm opacity-80 text-blue-100 border-l-2 border-[#2563EB] pl-2 mt-1">Real world environments</p>
                                </div>
                            </div>

                            {/* Floating "98.5% Success Rate" Badge from Walkthrough Description */}
                            <div className="absolute -bottom-8 -right-4 lg:-right-8 z-20">
                                <div className="bg-[#2563EB] rounded-2xl px-6 py-4 md:px-8 md:py-6 flex items-center gap-4 shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm border-2 border-white/30 text-xl shadow-inner">
                                        <i className="fa-solid fa-chart-line"></i>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-black text-white leading-none">98.5%</p>
                                        <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest mt-1">Success Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Text Content */}
                        <div className="order-1 lg:order-2 flex flex-col items-start">
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-6 shadow-sm">
                                ABOUT US
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
                                Empowering Careers Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Real Experience</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                                We bridge the gap between academic learning and industry expectations. We believe true mastery comes from building real applications, not just watching tutorials.
                            </p>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                                By connecting ambitious minds with verified tech partner companies, we ensure our interns gain the production-level experience and mentorship necessary to thrive in today's competitive job market.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-2">
                                <Link to="/domains" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    Explore Domains
                                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                                </Link>
                                <Link to="/about" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                                    More About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Process Section */}
            <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#f0f4f8]">
                <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative z-10">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white text-[#2563EB] text-[10px] font-bold tracking-[0.15em] uppercase mb-6 shadow-sm border border-blue-100">
                            SIMPLE WORKFLOW
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-slate-900 tracking-tight leading-none mb-4">
                            How It <span className="underline decoration-[#2563EB] underline-offset-[8px] decoration-[4px] md:decoration-[6px]">Works</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
                        {/* Step 1 */}
                        <div className="relative pt-4">
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 group relative">
                                <div className="absolute top-0 right-0 w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-lg font-bold shadow-lg transform translate-x-3 -translate-y-3 border-[3px] border-white z-10 group-hover:scale-110 transition-transform">
                                    1
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-blue-50/80 flex items-center justify-center text-[#2563EB] text-2xl mb-6 shadow-sm border border-blue-100/50 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                                    <i className="fa-solid fa-magnifying-glass font-light"></i>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-3">Apply</h3>
                                <p className="text-slate-500 text-[15px] font-medium leading-relaxed">Browse our diverse domains, find your perfect fit, and submit your application in minutes.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative pt-4">
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 group relative">
                                <div className="absolute top-0 right-0 w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-lg font-bold shadow-lg transform translate-x-3 -translate-y-3 border-[3px] border-white z-10 group-hover:scale-110 transition-transform">
                                    2
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-blue-50/80 flex items-center justify-center text-[#2563EB] text-2xl mb-6 shadow-sm border border-blue-100/50 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                                    <i className="fa-solid fa-phone font-light"></i>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-3">Reach Out</h3>
                                <p className="text-slate-500 text-[15px] font-medium leading-relaxed">Our team reviews your profile and reaches out. Qualified candidates are onboarded to partner companies.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative pt-4">
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 group relative">
                                <div className="absolute top-0 right-0 w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-lg font-bold shadow-lg transform translate-x-3 -translate-y-3 border-[3px] border-white z-10 group-hover:scale-110 transition-transform">
                                    3
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-blue-50/80 flex items-center justify-center text-[#2563EB] text-2xl mb-6 shadow-sm border border-blue-100/50 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                                    <i className="fa-solid fa-desktop font-light"></i>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-3">Live Projects</h3>
                                <p className="text-slate-500 text-[15px] font-medium leading-relaxed">Work on real-world tasks that impact actual businesses — gain the experience that employers value.</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative pt-4">
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 group relative">
                                <div className="absolute top-0 right-0 w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-lg font-bold shadow-lg transform translate-x-3 -translate-y-3 border-[3px] border-white z-10 group-hover:scale-110 transition-transform">
                                    4
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-blue-50/80 flex items-center justify-center text-[#2563EB] text-2xl mb-6 shadow-sm border border-blue-100/50 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                                    <i className="fa-solid fa-award font-light"></i>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-3">Get Certified</h3>
                                <p className="text-slate-500 text-[15px] font-medium leading-relaxed">Receive your internship certificate and a letter of recommendation to supercharge your resume.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. Domains Section */}
            <section id="domains" className="py-24 relative bg-[#0f172a] z-10 overflow-hidden border-t-4 border-blue-900/50">
                {/* Tech background overlay: Coding screen */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 mix-blend-color-dodge"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/60 to-[#0f172a]/90 backdrop-blur-[1px]"></div>

                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
                    <div className="flex flex-col items-center text-center mb-16 gap-4">
                        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-900/30 text-[#60A5FA] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 border border-blue-500/20 backdrop-blur-md shadow-inner">
                            AVAILABLE ROLES
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-white tracking-tight leading-none mb-2">
                            Explore Our <span className="underline decoration-white underline-offset-[12px] decoration-[6px]">Domains</span>
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mt-4">
                            Select a track that matches your passion and start building your career today.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {domains.map((domain, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-start cursor-pointer border border-transparent hover:border-blue-100 relative"
                            >
                                <div className="w-full flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center text-xl">
                                        <i className={`fa-solid ${domain.icon}`}></i>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#2563EB] group-hover:border-[#2563EB] group-hover:bg-[#EFF6FF] transition-all duration-300">
                                        <i className="fa-solid fa-arrow-right -rotate-45 text-sm"></i>
                                    </div>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">{domain.title}</h3>
                                <p className="text-slate-500 text-[14px] leading-relaxed font-medium">{domain.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default InformationSections;
