import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-24">

            {/* Header Section */}
            <section className="container mx-auto px-6 lg:px-8 max-w-7xl pt-10 pb-16 text-center">
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-6 shadow-sm">
                    GET IN TOUCH
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
                    Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Conversation</span>
                </h1>
                <p className="text-slate-500 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Whether you have a question about our programs, need assistance with your application, or want to partner with us—our team is ready to answer all your questions.
                </p>
            </section>

            {/* Main Contact Grid */}
            <section className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">

                    {/* Left Side - Contact Info & Map Placeholder */}
                    <div className="w-full lg:w-5/12 bg-slate-900 text-white p-10 md:p-12 relative overflow-hidden flex flex-col justify-between">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 text-blue-400 flex items-center justify-center text-xl shrink-0 border border-white/10 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Our Headquarters</h4>
                                        <p className="text-slate-300 font-medium text-sm leading-relaxed">
                                            123 Innovation Drive, Tech District<br />
                                            San Francisco, CA 94107
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 text-blue-400 flex items-center justify-center text-xl shrink-0 border border-white/10 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Email Us</h4>
                                        <p className="text-slate-300 font-medium text-sm leading-relaxed">
                                            support@venuxlane.com<br />
                                            partnerships@venuxlane.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 text-blue-400 flex items-center justify-center text-xl shrink-0 border border-white/10 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Call Us</h4>
                                        <p className="text-slate-300 font-medium text-sm leading-relaxed">
                                            +1 (800) 123-4567<br />
                                            Mon-Fri: 9am - 6pm PST
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links & Map Placeholder */}
                        <div className="relative z-10 mt-16 pt-10 border-t border-white/10">
                            <h4 className="font-bold mb-4 text-sm text-slate-400 uppercase tracking-widest">Connect with us</h4>
                            <div className="flex gap-4 mb-8">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2563EB] transition-colors border border-white/10">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2563EB] transition-colors border border-white/10">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#2563EB] transition-colors border border-white/10">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>

                            {/* Static Map Image Placeholder */}
                            <div className="w-full h-40 rounded-xl overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="Map Location" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                                <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>
                                <div className="absolute top-1/2 left-1/2 -transparent-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-[#2563EB] text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.8)]">
                                    <i className="fa-solid fa-location-dot text-sm"></i>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Side - Dynamic Form */}
                    <div className="w-full lg:w-7/12 p-10 md:p-14 lg:p-16">
                        <h3 className="text-2xl font-black text-slate-900 mb-8">Send us a message</h3>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 placeholder-slate-400 hover:bg-white"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 placeholder-slate-400 hover:bg-white"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 placeholder-slate-400 hover:bg-white"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Phone Number (Optional)</label>
                                    <input
                                        type="tel"
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 placeholder-slate-400 hover:bg-white"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Topic of Inquiry</label>
                                <div className="relative">
                                    <select className="appearance-none w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 cursor-pointer hover:bg-white">
                                        <option value="general">General Question</option>
                                        <option value="application">Application Status</option>
                                        <option value="partnership">Partnership Opportunities</option>
                                        <option value="support">Technical Support</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
                                        <i className="fa-solid fa-chevron-down text-sm"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Your Message</label>
                                <textarea
                                    rows="5"
                                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 placeholder-slate-400 resize-none hover:bg-white"
                                    placeholder="Briefly describe how we can help you..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#2563EB] text-white font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Send Message
                                <i className="fa-regular fa-paper-plane"></i>
                            </button>

                            <p className="text-center text-xs text-slate-400 font-medium mt-4">
                                By submitting this form, you agree to our <a href="#" className="text-[#2563EB] hover:underline">Privacy Policy</a>.
                            </p>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ContactUs;
