import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });
            const data = await response.json();

            if (response.ok) {
                setSuccess('Account created successfully! You can now log in.');
                console.log('Signup success:', data);
            } else {
                setError(data.error || 'Signup failed');
            }
        } catch (err) {
            setError('Server error connecting to backend.');
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-12 flex items-center justify-center font-sans">
            <div className="container mx-auto px-4 max-w-5xl flex items-center justify-center">

                {/* Main Card */}
                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden w-full flex flex-col md:flex-row-reverse border border-slate-100">

                    {/* Right Side: Branding / Visual (Hidden on mobile) */}
                    <div className="hidden md:flex md:w-5/12 bg-slate-900 relative p-10 flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>

                        <div className="relative z-10 text-right w-full flex justify-end">
                            <Link to="/" className="flex items-center gap-3 mb-16">
                                <span className="text-2xl font-bold text-white tracking-tight">
                                    Qythera Group
                                </span>
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#2563EB] text-xl font-bold shadow-md">
                                    Q
                                </div>
                            </Link>
                        </div>

                        <div className="relative z-10 text-right">
                            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
                                Start your <span className="text-blue-300">journey</span> <br />with us today.
                            </h2>
                            <p className="text-blue-100/90 font-medium leading-relaxed ml-auto max-w-sm">
                                Join a community of ambitious learners. Gain real-world experience, build your portfolio, and land your dream job faster.
                            </p>
                        </div>

                        <div className="relative z-10 flex items-center justify-end gap-3 mt-8">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm border border-white/20">
                                <i className="fa-solid fa-code text-xl"></i>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm border border-white/20">
                                <i className="fa-solid fa-chart-line text-xl"></i>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-[#2563EB] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                                <i className="fa-solid fa-rocket text-xl"></i>
                            </div>
                        </div>
                    </div>

                    {/* Left Side: Signup Form */}
                    <div className="w-full md:w-7/12 p-8 sm:p-12 lg:p-16">
                        <div className="mb-10 text-center md:text-left">
                            <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Create an account</h1>
                            <p className="text-slate-500 font-medium">Already have an account? <Link to="/login" className="text-[#2563EB] font-bold hover:underline">Log in</Link></p>
                        </div>

                        {error && <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-600 font-medium">{error}</div>}
                        {success && <div className="mb-6 p-4 rounded-xl bg-green-50 text-green-600 font-medium">{success}</div>}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Full Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="e.g. Jane Doe"
                                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 placeholder-slate-400 hover:bg-white"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Email address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 placeholder-slate-400 hover:bg-white"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Create a strong password"
                                        className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 placeholder-slate-400 hover:bg-white"
                                        required
                                    />
                                </div>
                                <p className="text-xs text-slate-500 font-medium mt-1">Must be at least 8 characters long.</p>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 mt-4 rounded-xl bg-[#2563EB] text-white font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Create Account
                            </button>

                            <p className="text-center text-xs text-slate-400 font-medium mt-4">
                                By signing up, you agree to our <a href="#" className="text-[#2563EB] hover:underline">Terms of Service</a> and <a href="#" className="text-[#2563EB] hover:underline">Privacy Policy</a>.
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
