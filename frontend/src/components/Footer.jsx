import React from 'react';

const Footer = () => {
    return (
        <>
            {/* CTA Section */}
            <section className="w-full bg-white flex flex-col items-center pt-24 pb-32 px-6">
                <div className="w-20 h-20 rounded-3xl bg-[#2563EB] flex items-center justify-center text-white text-3xl mb-8 shadow-lg shadow-blue-500/40">
                    <i className="fa-solid fa-headset"></i>
                </div>
                <h2 className="text-[2.5rem] md:text-5xl font-black text-[#1A1F2C] mb-6 tracking-tight text-center">
                    Still have questions?
                </h2>
                <p className="text-[#4A5568] text-lg lg:text-xl text-center max-w-2xl mb-10 leading-relaxed font-medium">
                    Whether you're a student looking for opportunities or a<br className="hidden md:block" /> partner company ready to hire, we're here to help.
                </p>
                <a
                    href="#contact"
                    className="bg-[#2563EB] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-500/40 hover:bg-blue-700 transition-colors flex items-center gap-2 mb-8"
                >
                    Contact Support Team <i className="fa-solid fa-arrow-right text-sm"></i>
                </a>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-400">
                    PREFER EMAIL? REACH US DIRECTLY AT <a href="mailto:CONTACT@VENUXLANE.COM" className="text-[#2563EB] hover:text-blue-700 transition-colors">CONTACT@VENUXLANE.COM</a>
                </p>
            </section>

            {/* Main Footer */}
            <footer className="bg-[#0f172a] text-white w-full border-t-4 border-[#2563EB]">
                <div className="container mx-auto px-8 lg:px-16 pt-20 pb-8 max-w-[90rem]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                        {/* Column 1: Brand Info (Takes up 4 cols) */}
                        <div className="lg:col-span-4 pr-4">
                            <a href="#home" className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-900 text-xl font-black">
                                    Q
                                </div>
                                <span className="text-2xl font-black tracking-tight">
                                    Qythera Group
                                </span>
                            </a>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                                Empowering career growth through global internship opportunities at VenuxLane, a Qythera Group initiative based in Mangalore, Karnataka.
                            </p>
                        </div>

                        {/* Column 2: Quick Links (Takes up 3 cols) */}
                        <div className="lg:col-span-3">
                            <h4 className="font-black text-lg mb-8 tracking-wider">QUICK LINKS</h4>
                            <ul className="space-y-4">
                                <li><a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm font-medium inline-block">About VenuxLane</a></li>
                                <li><a href="#group" className="text-slate-400 hover:text-white transition-colors text-sm font-medium inline-block">About Qythera Group</a></li>
                                <li><a href="#opportunities" className="text-slate-400 hover:text-white transition-colors text-sm font-medium inline-block">Opportunities</a></li>
                                <li><a href="/verify.html" className="text-slate-400 hover:text-white transition-colors text-sm font-medium inline-block">Verify Certificate</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Contact (Takes up 3 cols) */}
                        <div className="lg:col-span-3">
                            <h4 className="font-black text-lg mb-8 tracking-wider">CONTACT</h4>
                            <ul className="space-y-6">
                                <li>
                                    <a href="mailto:hello@venuxlane.in" className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex gap-2 w-max">
                                        Email: hello@venuxlane.in
                                    </a>
                                </li>
                                <li>
                                    <span className="text-slate-400 text-sm font-medium flex gap-2">
                                        Phone: +91 8431220992
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Follow Us (Takes up 2 cols) */}
                        <div className="lg:col-span-2">
                            <h4 className="font-black text-lg mb-8 tracking-wider">FOLLOW US</h4>
                            <div className="flex gap-5">
                                <a href="#" className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white transition-colors group">
                                    <i className="fa-brands fa-linkedin-in text-2xl group-hover:scale-110 transition-transform"></i>
                                </a>
                                <a href="#" className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white transition-colors group">
                                    <i className="fa-brands fa-instagram text-2xl group-hover:scale-110 transition-transform"></i>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Copyright Text */}
                    <div className="pt-8 border-t border-slate-800/80 flex justify-center text-center">
                        <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">
                            &copy; 2026 QYTHERA GROUP'S VENUXLANE. ALL RIGHTS RESERVED.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
