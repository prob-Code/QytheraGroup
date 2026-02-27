import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen pt-40 pb-20 overflow-hidden flex flex-col justify-center bg-gradient-to-br from-blue-50/50 via-white to-pink-50/30">

            <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col items-start xl:pr-12">

                        {/* Top Badge
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                            <span className="text-sm font-bold text-slate-600">Internship Program <span className="text-[#2563EB]">Venux Lane</span></span>
                        </div> */}

                        <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
                            Inventing the <span className="text-[#2563EB]">Future</span>
                        </h1>

                        <p className="text-xl text-slate-500 mb-10 max-w-xl leading-relaxed font-medium">
                            Designing a Scalable Agentic AI Society for Tomorrow. Join Venux Lane internships to be part of the revolution in AI and Technology.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a
                                href="https://forms.gle/i4X5pDwVM6FGWdrTA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-xl bg-[#2563EB] text-white font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                            >
                                Explore Internships <i className="fa-solid fa-arrow-right"></i>
                            </a>
                            <a
                                href="#how-it-works"
                                className="px-8 py-4 rounded-xl bg-white text-slate-700 font-bold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center shadow-sm"
                            >
                                How It Works
                            </a>
                        </div>

                        {/* Bottom Companies Bar */}
                        <div className="mt-16 pt-8 max-w-md w-full relative">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-slate-200 to-transparent"></div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-transparent inline-block pb-1">
                                CURRICULUM VETTED BY INDUSTRY EXPERTS
                            </p>
                            <div className="flex items-center gap-6 text-slate-400">
                                <i className="fa-brands fa-google text-2xl hover:text-slate-600 transition-colors"></i>
                                <i className="fa-brands fa-amazon text-2xl hover:text-slate-600 transition-colors"></i>
                                <i className="fa-brands fa-microsoft text-2xl hover:text-slate-600 transition-colors"></i>
                                <i className="fa-brands fa-spotify text-2xl hover:text-slate-600 transition-colors"></i>
                                <i className="fa-brands fa-airbnb text-2xl hover:text-slate-600 transition-colors"></i>
                            </div>
                        </div>

                    </div>

                    {/* Right Image/Graphic area */}
                    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none flex items-center justify-center xl:pl-8">

                        {/* Main Image Container */}
                        <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-[6px] border-white hover:scale-[1.02] hover:shadow-3xl transition-all duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                                alt="Students collaborating"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Top Right Floating Badge */}
                        <div className="absolute -top-6 -right-6 lg:-right-4 z-20">
                            <div className="bg-white rounded-2xl px-5 py-3 flex items-center gap-4 shadow-xl border border-slate-100 hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-default">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#2563EB]">
                                    <i className="fa-solid fa-star text-lg"></i>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Rating</span>
                                    <p className="font-black text-slate-900 text-lg leading-none">4.9/5.0</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Left Floating Badge */}
                        <div className="absolute -bottom-8 -left-8 lg:-left-12 z-20">
                            <div className="bg-white rounded-3xl p-5 flex items-center gap-4 shadow-xl border border-slate-100 pr-8 hover:scale-110 hover:translate-y-2 transition-all duration-300 cursor-default">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Placements</span>
                                    <p className="font-black text-slate-900 text-xl leading-none">500+ Hired</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
