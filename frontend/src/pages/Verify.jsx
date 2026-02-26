import React, { useState } from 'react';

const Verify = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "Where can I find my Certificate ID?",
            answer: "Your unique Certificate ID is located at the bottom right corner of your digital or printed VenuxLane completion certificate. It typically starts with 'VL-' followed by the year and a unique alphanumeric code."
        },
        {
            question: "Why does the verification show 'Invalid ID'?",
            answer: "Please ensure you have entered the ID exactly as it appears on your certificate, including any hyphens or uppercase letters. If you continue to experience issues, please contact our support team."
        },
        {
            question: "How long are the certificates valid?",
            answer: "VenuxLane internship certificates do not expire. They serve as a permanent record of your project completion and the practical skills you acquired during your time with us."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-24 font-sans">

            {/* Split Screen Layout Header */}
            <section className="relative overflow-hidden bg-white border-b border-slate-200">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 min-h-[600px]">

                        {/* Left Side - Image/Abstract */}
                        <div className="relative hidden lg:block bg-slate-900 p-12 overflow-hidden items-center justify-center">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                            <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>

                            <div className="relative z-10 w-full h-full flex flex-col justify-center text-left max-w-lg mx-auto">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center text-3xl mb-8 backdrop-blur-md border border-white/20">
                                    <i className="fa-solid fa-shield-halved"></i>
                                </div>
                                <h2 className="text-4xl font-black text-white mb-6 leading-tight">Authenticity You Can Trust.</h2>
                                <p className="text-lg text-blue-100/80 font-medium leading-relaxed">
                                    Our cryptographic verification system ensures that every VenuxLane certificate is genuine, tamper-proof, and instantly verifiable by employers worldwide.
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Verification Form */}
                        <div className="flex items-center justify-center p-6 lg:p-12 bg-slate-50 relative">
                            {/* Decorative background blobs */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

                            <div className="w-full max-w-lg relative z-10">
                                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white">
                                    <div className="text-center mb-10">
                                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-4">
                                            SECURE PORTAL
                                        </div>
                                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                                            Verify <span className="text-[#2563EB]">Internship</span>
                                        </h1>
                                        <p className="text-slate-500 font-medium mt-3">
                                            Enter the verification ID to validate credentials.
                                        </p>
                                    </div>

                                    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                                        <div className="mb-6 relative group">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-focus-within:text-[#2563EB] group-focus-within:bg-blue-50 transition-colors">
                                                <i className="fa-solid fa-barcode text-lg"></i>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="e.g. VL-2024-XXXX"
                                                className="w-full pl-16 pr-4 py-4 rounded-xl bg-slate-50/50 border-2 border-slate-100 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-bold text-slate-700 placeholder-slate-400 text-lg tracking-wide uppercase"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-4 rounded-xl bg-[#2563EB] text-white font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
                                        >
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                            Validate Credentials
                                        </button>

                                        <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-slate-400">
                                            <i className="fa-solid fa-lock text-xs"></i>
                                            256-bit encrypted verification
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* How It Works & FAQ Section */}
            <section className="py-20 container mx-auto px-6 lg:px-8 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-16">

                    {/* How Verification Works */}
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                            <i className="fa-solid fa-list-check text-[#2563EB]"></i>
                            How It Works
                        </h3>
                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-[#2563EB] font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                                    1
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-1">Locate Your ID</h4>
                                    <p className="text-sm text-slate-500 font-medium">Find the unique Certificate ID printed on your document.</p>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-[#2563EB] font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                                    2
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-1">Enter Details</h4>
                                    <p className="text-sm text-slate-500 font-medium">Input the code exactly as shown into the secure portal above.</p>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-[#2563EB] font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                                    3
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-1">Instant Validation</h4>
                                    <p className="text-sm text-slate-500 font-medium">Our system cross-references the database and confirms authenticity instantly.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Accordion */}
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                            <i className="fa-regular fa-circle-question text-[#2563EB]"></i>
                            Frequently Asked Questions
                        </h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-[#2563EB] shadow-md' : 'border-slate-200 hover:border-blue-300'}`}
                                >
                                    <button
                                        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <span className={`font-bold pr-4 ${openFaq === index ? 'text-[#2563EB]' : 'text-slate-800'}`}>
                                            {faq.question}
                                        </span>
                                        <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-[#2563EB]' : 'text-slate-400'}`}></i>
                                    </button>
                                    <div
                                        className={`px-6 pb-5 text-slate-600 font-medium text-sm leading-relaxed ${openFaq === index ? 'block' : 'hidden'}`}
                                    >
                                        {faq.answer}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Verify;
