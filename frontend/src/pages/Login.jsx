import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();

            if (response.ok) {
                // Store JWT token to simulate production-ready authenticated session
                localStorage.setItem('venuxlane_token', data.token);
                localStorage.setItem('venuxlane_user', JSON.stringify(data.user));

                setSuccess('Logged in successfully!');
                console.log('Login success:', data);

                // Usually we'd redirect to a dashboard here
                // setTimeout(() => window.location.href = '/', 1000);
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('Server error connecting to backend.');
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-12 flex items-center justify-center font-sans">
            <div className="container mx-auto px-4 max-w-5xl flex items-center justify-center">

                {/* Main Card */}
                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden w-full flex flex-col md:flex-row border border-slate-100">

                    {/* Left Side: Branding / Visual (Hidden on mobile) */}
                    <div className="hidden md:flex md:w-5/12 bg-slate-900 relative p-10 flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>

                        <div className="relative z-10">
                            <Link to="/" className="flex items-center gap-3 mb-16">
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#2563EB] text-xl font-bold shadow-md">
                                    Q
                                </div>
                                <span className="text-2xl font-bold text-white tracking-tight">
                                    Qythera Group
                                </span>
                            </Link>

                            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
                                Welcome back to your <br /><span className="text-blue-300">future.</span>
                            </h2>
                            <p className="text-blue-100/90 font-medium leading-relaxed">
                                Pick up right where you left off. Continue your journey towards mastering tech with our industry-driven curriculum.
                            </p>
                        </div>

                        <div className="relative z-10 flex items-center gap-4 mt-8">
                            <div className="flex -space-x-3">
                                <img className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
                                <img className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="User" />
                                <img className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" />
                            </div>
                            <p className="text-sm font-medium text-white">Join 10k+ learners</p>
                        </div>
                    </div>

                    {/* Right Side: Login Form */}
                    <div className="w-full md:w-7/12 p-8 sm:p-12 lg:p-16">
                        <div className="mb-10 text-center md:text-left">
                            <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Sign in</h1>
                            <p className="text-slate-500 font-medium">New to Qythera Group? <Link to="/signup" className="text-[#2563EB] font-bold hover:underline">Create an account</Link></p>
                        </div>

                        {error && <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-600 font-medium">{error}</div>}
                        {success && <div className="mb-6 p-4 rounded-xl bg-green-50 text-green-600 font-medium">{success}</div>}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Email address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 placeholder-slate-400 hover:bg-white"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-bold text-slate-700">Password</label>
                                    <a href="#" className="text-sm font-bold text-[#2563EB] hover:underline">Forgot password?</a>
                                </div>
                                <div className="relative">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-800 placeholder-slate-400 hover:bg-white"
                                        required
                                    />
                                    {/* Optional: Add eye icon for show/hide password here */}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-5 h-5 bg-slate-50 border border-slate-300 rounded focus:ring-3 focus:ring-blue-300 accent-[#2563EB] cursor-pointer"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="font-medium text-slate-600 cursor-pointer">Remember me for 30 days</label>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-[#2563EB] text-white font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Sign In
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
