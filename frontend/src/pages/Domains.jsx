import React from 'react';

const Domains = () => {
    // Array of domain data for richer rendering
    const domainTracks = [
        {
            id: 'web-dev',
            icon: 'fa-globe',
            title: 'Web Development',
            description: 'Master the art of building scalable, responsive, and robust web applications from scratch.',
            skills: ['React.js', 'Node.js', 'TailwindCSS', 'Databases'],
            roles: ['Frontend Developer', 'Full Stack Engineer', 'Backend Specialist']
        },
        {
            id: 'python',
            icon: 'fa-brands fa-python',
            title: 'Python Programming',
            description: 'Dive deep into automation, scripting, and backend logic with one of the most versatile languages in the industry.',
            skills: ['Django/Flask', 'Data Structures', 'Automation', 'APIs'],
            roles: ['Backend Engineer', 'Automation Lead', 'Python Developer']
        },
        {
            id: 'java',
            icon: 'fa-mug-hot',
            title: 'Java Programming',
            description: 'Learn enterprise-level software engineering focusing on robust architecture, multithreading, and security.',
            skills: ['Spring Boot', 'OOP Principles', 'Microservices', 'SQL'],
            roles: ['Enterprise Software Engineer', 'Java Backend Dev']
        },
        {
            id: 'cpp',
            icon: 'fa-microchip',
            title: 'C++ Programming',
            description: 'Get down to the metal. Focus on system-level code, game engines, and performance-critical applications.',
            skills: ['Memory Management', 'Algorithms', 'STL', 'Systems Design'],
            roles: ['Systems Engineer', 'Game Developer', 'High-Frequency Trading Dev']
        },
        {
            id: 'ml',
            icon: 'fa-brain',
            title: 'Machine Learning',
            description: 'Build intelligent systems that learn from data. From predictive modeling to natural language processing.',
            skills: ['TensorFlow/PyTorch', 'Data Processing', 'Neural Networks', 'Math'],
            roles: ['ML Engineer', 'Data Scientist', 'AI Researcher']
        },
        {
            id: 'design',
            icon: 'fa-palette',
            title: 'UI/UX Design',
            description: 'Craft intuitive, beautiful, and user-centered digital experiences that users love to interact with.',
            skills: ['Figma', 'Wireframing', 'User Research', 'Prototyping'],
            roles: ['Product Designer', 'UX Researcher', 'UI Developer']
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-24">

            {/* 1. Career Tracks Hero */}
            <section className="relative py-20 bg-[#0f172a] overflow-hidden rounded-b-[3rem] shadow-2xl z-10 mx-4 lg:mx-8">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-900/40 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-800/50 backdrop-blur-md">
                        Explore VenuxLane Domains
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Launch Your Career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Tech</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                        Industry-vetted curriculums designed to take you from a curious beginner to a hirable professional. Find the track that ignites your passion.
                    </p>
                </div>
            </section>

            {/* 2. Specialized Domains List */}
            <section className="container mx-auto px-6 lg:px-8 max-w-7xl relative -mt-10 z-20">
                <div className="grid lg:grid-cols-2 gap-8">
                    {domainTracks.map((track) => (
                        <div
                            key={track.id}
                            onClick={() => window.open('https://forms.gle/i4X5pDwVM6FGWdrTA', '_blank', 'noopener,noreferrer')}
                            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full cursor-pointer"
                        >

                            {/* Header */}
                            <div className="flex items-center gap-6 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[2rem] text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm border border-blue-100/50">
                                    <i className={`fa-solid ${track.icon}`}></i>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-none group-hover:text-[#2563EB] transition-colors">
                                    {track.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-slate-600 font-medium text-[15px] leading-relaxed mb-8 flex-grow">
                                {track.description}
                            </p>

                            {/* Skills & Roles Wrapper */}
                            <div className="space-y-6 mt-auto">
                                {/* Skills */}
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Core Skills Covered</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {track.skills.map((skill, index) => (
                                            <span key={index} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium border border-slate-200/60">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Roles */}
                                <div className="pt-6 border-t border-slate-100">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Potential Career Paths</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {track.roles.map((role, idx) => (
                                            <span key={idx} className="flex items-center gap-2 text-sm font-bold text-[#2563EB]">
                                                <i className="fa-solid fa-check text-blue-400 text-xs"></i>
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Apply button local to card */}
                                <button className="w-full mt-6 py-3.5 rounded-xl bg-slate-50 text-slate-700 font-bold border border-slate-200 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-transparent transition-all duration-300 pointer-events-none">
                                    Apply for {track.title}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Why Choose Our Tracks */}
            <section className="py-24 mt-12 bg-white">
                <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12">
                        Beyond Just <span className="underline decoration-[#2563EB] decoration-[4px] underline-offset-[8px]">Curriculum</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100">
                            <div className="w-12 h-12 rounded-xl bg-white text-[#2563EB] flex items-center justify-center text-xl shadow-sm mb-6">
                                <i className="fa-solid fa-code-branch"></i>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Live Production Code</h4>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">Stop building to-do lists. Work on features that are deployed to real users.</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100">
                            <div className="w-12 h-12 rounded-xl bg-white text-[#2563EB] flex items-center justify-center text-xl shadow-sm mb-6">
                                <i className="fa-solid fa-users-gear"></i>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">1-on-1 Mentorship</h4>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">Weekly syncs with senior engineers to unblock your code and plan your career.</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100">
                            <div className="w-12 h-12 rounded-xl bg-white text-[#2563EB] flex items-center justify-center text-xl shadow-sm mb-6">
                                <i className="fa-solid fa-arrow-trend-up"></i>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Interview Prep</h4>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">Mock interviews, resume reviews, and direct referrals to hiring partners.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Domains;
