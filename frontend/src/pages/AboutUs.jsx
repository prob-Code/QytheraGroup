import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-white min-h-screen pt-24">

            {/* 1. Hero Section */}
            <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>

                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-900/50 text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm border border-blue-800/50 backdrop-blur-sm">
                            About Qythera Group
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
                            Empowering The Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Tech Leaders</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium max-w-2xl">
                            We are on a mission to bridge the gap between academic learning and industry expectations, providing students with the real-world experience they need to succeed.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Expanded Mission Section */}
            <section id="mission" className="py-24 relative bg-white overflow-hidden">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* Left Image Side */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] max-w-lg mx-auto lg:mx-0 border-[6px] border-white hover:scale-[1.02] hover:shadow-3xl transition-all duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
                                    alt="Qythera Group office"
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-8 -right-4 lg:-right-8 z-20">
                                <div className="bg-[#2563EB] rounded-2xl px-8 py-5 flex items-center gap-6 shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-default">
                                    <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white border-2 border-white shadow-inner">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-blue-200 uppercase tracking-wider mb-1">PLACEMENTS</p>
                                        <p className="text-3xl font-black text-white leading-none">10k+</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Text Side */}
                        <div className="order-1 lg:order-2 flex flex-col items-start">
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-6 shadow-sm">
                                OUR STORY
                            </div>
                            <h3 className="text-4xl lg:text-[3rem] font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                                Democratizing Access to <span className="text-[#2563EB]">High-Quality</span> Careers
                            </h3>

                            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                                Qythera Group was founded in 2024 by a group of industry veterans who noticed a recurring problem: bright, ambitious students were failing to land jobs simply because they lacked practical, hands-on experience.
                            </p>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                                We decided to change that. By partnering with top tier companies and developing a rigorous, project-based curriculum, we’ve created an ecosystem where talent meets opportunity. We don't just teach theory; we immerse our students in actual industry workflows, ensuring they graduate not just with a certificate, but with a robust portfolio and the confidence to tackle real-world challenges.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 w-full">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-[#2563EB] flex items-center justify-center text-white text-2xl shrink-0 shadow-lg shadow-blue-500/30">
                                        <i className="fa-solid fa-shield-halved"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-lg mb-1">100% Vetted</h4>
                                        <p className="text-sm font-medium text-slate-500 leading-relaxed">Every company we partner with undergoes a strict quality assurance process.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-[#2563EB] flex items-center justify-center text-white text-2xl shrink-0 shadow-lg shadow-blue-500/30">
                                        <i className="fa-solid fa-industry"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-lg mb-1">Industry Oriented</h4>
                                        <p className="text-sm font-medium text-slate-500 leading-relaxed">Our curriculum is continuously updated to reflect the latest market demands.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Values Section */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-4 shadow-sm border border-blue-100">
                            CORE PRINCIPLES
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Our <span className="underline decoration-[#2563EB] underline-offset-[8px] decoration-[4px]">Values</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center text-3xl mb-6">
                                <i className="fa-regular fa-lightbulb"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation First</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                We constantly evolve our platform and curriculum to stay ahead of the curve, ensuring our students learn the most relevant and cutting-edge technologies.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center text-3xl mb-6">
                                <i className="fa-solid fa-handshake-angle"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Unwavering Integrity</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                Transparency and honesty guide every decision we make. We believe in building trust with our students, mentors, and partner companies.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center text-3xl mb-6">
                                <i className="fa-solid fa-arrow-up-right-dots"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Exceptional Quality</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                We are committed to excellence in everything we do, from the caliber of our mentors to the robustness of the projects our students build.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Leadership Team */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-4 shadow-sm">
                                THE MINDS BEHIND QYTHERA GROUP
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                                Meet Our <span className="text-[#2563EB]">Leadership</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 font-medium max-w-md text-lg">
                            Our team consists of passionate educators, experienced engineers, and visionary leaders dedicated to your success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Team Member 1 */}
                        <div className="group text-center">
                            <div className="relative w-full aspect-square mb-6 rounded-3xl overflow-hidden bg-slate-100">
                                <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" alt="CEO" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Rahul Sharma</h3>
                            <p className="text-[#2563EB] font-bold mb-3">Founder & CEO</p>
                            <p className="text-slate-500 font-medium">Former Engineering Director at TechCorp, passionate about democratizing education.</p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="group text-center">
                            <div className="relative w-full aspect-square mb-6 rounded-3xl overflow-hidden bg-slate-100">
                                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="CTO" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Priya Desai</h3>
                            <p className="text-[#2563EB] font-bold mb-3">Chief Technology Officer</p>
                            <p className="text-slate-500 font-medium">15+ years experience building scalable systems and leading global engineering teams.</p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="group text-center">
                            <div className="relative w-full aspect-square mb-6 rounded-3xl overflow-hidden bg-slate-100">
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" alt="COO" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Amit Patel</h3>
                            <p className="text-[#2563EB] font-bold mb-3">Chief Operating Officer</p>
                            <p className="text-slate-500 font-medium">Expert in scaling education startups and optimizing student success pathways.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;
