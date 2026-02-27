import React from 'react';
import { Link } from 'react-router-dom';

const Internship = () => {
    return (
        <div className="bg-[#0b0c10] min-h-screen pt-32 pb-24 relative overflow-hidden font-sans text-white">
            {/* Immersive Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-10000"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vh] bg-indigo-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
                <div className="absolute top-[30%] left-[50%] w-[40vw] h-[40vh] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Hero / Header Section */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-blue-900/40 text-blue-300 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-[0_0_15px_rgba(37,99,235,0.3)] border border-blue-500/30 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2"></span>
                        Qythera Group Presents
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white mb-8 tracking-tight leading-[1.1]">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Venux Lane</span> <br className="hidden md:block" />
                        Internship Experience
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
                        Step into the future of scalable applications. An elite program engineered to transform beginners into highly-sought-after tech professionals through real-world execution.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <a href="https://forms.gle/i4X5pDwVM6FGWdrTA" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] overflow-hidden">
                            <span className="relative z-10">Apply Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </a>
                        <a href="#overview" className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg backdrop-blur-md hover:bg-white/15 transition-all text-center">
                            Explore Curriculum
                        </a>
                    </div>
                </div>

                {/* Glassmorphism Feature Cards */}
                <div id="overview" className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-32">
                    {[
                        { icon: 'fa-laptop-code', title: 'Modern Tech Stack', color: 'from-blue-500 to-cyan-400', shadow: 'shadow-blue-500/20', desc: 'Master React, Next.js, Node, and Tailwind. Build blazing fast applications.' },
                        { icon: 'fa-layer-group', title: 'Beautiful UI/UX', color: 'from-purple-500 to-pink-500', shadow: 'shadow-purple-500/20', desc: 'Craft stunning interfaces with glassmorphism, dynamic animations, and shadcn-ui concepts.' },
                        { icon: 'fa-server', title: 'Scalable Backend', color: 'from-emerald-500 to-teal-400', shadow: 'shadow-emerald-500/20', desc: 'Architect robust databases, secure APIs, and handle complex real-time data.' }
                    ].map((feature, idx) => (
                        <div key={idx} className="relative group bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-3xl mb-8 shadow-lg ${feature.shadow} group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                                <i className={`fa-solid ${feature.icon}`}></i>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-medium relative z-10">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Dashboard Showcase & Metrics */}
                <div className="relative rounded-[3rem] bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-white/10 overflow-hidden backdrop-blur-xl p-2 lg:p-4 shadow-2xl">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 p-8 lg:p-12">
                        {/* Text Side */}
                        <div className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-bold mb-6 border border-indigo-500/20 backdrop-blur-md">
                                <i className="fa-solid fa-wand-magic-sparkles text-indigo-400"></i>
                                Hands-on Development
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.2]">
                                Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Dashboards</span>, <br />
                                Not Just Scripts.
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Learn to construct complex, modern user interfaces inspired by top-tier libraries like Flowbite, Material Tailwind, and shadcn-ui. You will utilize component-driven architecture to deliver high-performance, aesthetically exceptional web apps.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur-sm shadow-xl">
                                    <h4 className="text-4xl font-black text-white mb-1 drop-shadow-md">50+</h4>
                                    <p className="text-sm text-slate-400 font-medium">UI Components built</p>
                                </div>
                                <div className="border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur-sm shadow-xl">
                                    <h4 className="text-4xl font-black text-white mb-1 drop-shadow-md">100%</h4>
                                    <p className="text-sm text-slate-400 font-medium">Practical Code</p>
                                </div>
                            </div>
                        </div>

                        {/* 3D/Dashboard Mockup Side */}
                        <div className="w-full lg:w-1/2 flex justify-center relative py-10 lg:py-0">
                            {/* Glow behind the dashboard */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-[100px] rounded-full"></div>

                            <div className="relative w-full max-w-lg [transform:perspective(1200px)_rotateY(-15deg)_rotateX(8deg)] hover:[transform:perspective(1200px)_rotateY(-5deg)_rotateX(2deg)] transition-transform duration-700 ease-out z-10 group">
                                {/* Glass Dashboard Panel */}
                                <div className="bg-white/[0.05] backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                                    {/* Browser/Window Header */}
                                    <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
                                        <div className="w-3.5 h-3.5 bg-red-400/80 rounded-full"></div>
                                        <div className="w-3.5 h-3.5 bg-yellow-400/80 rounded-full"></div>
                                        <div className="w-3.5 h-3.5 bg-green-400/80 rounded-full"></div>
                                        <div className="ml-4 h-4 w-32 bg-white/10 rounded-full"></div>
                                    </div>

                                    {/* Dashboard Content */}
                                    <div className="space-y-6">
                                        {/* Chart Area */}
                                        <div className="h-40 w-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl border border-white/10 flex items-end justify-between p-4 overflow-hidden relative group-hover:border-blue-500/30 transition-colors shadow-inner">
                                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-blue-500/10 to-transparent"></div>

                                            <div className="w-[12%] bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg relative z-10 shadow-lg shadow-blue-500/50" style={{ height: '60%' }}></div>
                                            <div className="w-[12%] bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg relative z-10 shadow-lg shadow-blue-500/50" style={{ height: '40%' }}></div>
                                            <div className="w-[12%] bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-lg relative z-10 shadow-lg shadow-indigo-500/50" style={{ height: '80%' }}></div>
                                            <div className="w-[12%] bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-lg relative z-10 shadow-lg shadow-indigo-500/50" style={{ height: '50%' }}></div>
                                            <div className="w-[12%] bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg relative z-10 shadow-lg shadow-purple-500/50" style={{ height: '90%' }}></div>
                                            <div className="w-[12%] bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg relative z-10 shadow-lg shadow-purple-500/50" style={{ height: '70%' }}></div>
                                        </div>

                                        {/* Cards / Data points */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-white/5 rounded-2xl border border-white/10 p-5 shadow-lg group-hover:bg-white/10 transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 mb-3 border border-teal-500/30">
                                                    <i className="fa-solid fa-chart-pie"></i>
                                                </div>
                                                <div className="h-2 w-16 bg-white/20 rounded-full mb-3"></div>
                                                <div className="h-5 w-24 bg-white/40 rounded-full"></div>
                                            </div>
                                            <div className="bg-white/5 rounded-2xl border border-white/10 p-5 shadow-lg group-hover:bg-white/10 transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 mb-3 border border-pink-500/30">
                                                    <i className="fa-solid fa-bolt"></i>
                                                </div>
                                                <div className="h-2 w-16 bg-white/20 rounded-full mb-3"></div>
                                                <div className="h-5 w-24 bg-white/40 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating elements around mockup */}
                                <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl transform rotate-12 flex flex-col items-center justify-center group-hover:-translate-y-4 group-hover:rotate-6 transition-all duration-700 z-20">
                                    <div className="text-2xl font-black text-white border-b border-white/20 pb-1 mb-1">UI</div>
                                    <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Mastery</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Internship;
