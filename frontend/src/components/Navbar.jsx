import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/', id: 'home' },
        { name: 'About Us', href: '/about', id: 'about' },
        { name: 'Domains', href: '/domains', id: 'domains' },
        { name: 'Internship', href: '/internship', id: 'internship' },
        { name: 'Verify', href: '/verify', id: 'verify' },
        { name: 'Contact Us', href: '/contact', id: 'contact' },
    ];

    return (
        <>
            <div className={`h-24 transition-all duration-300 ${isScrolled ? 'block' : 'hidden'}`} />

            <nav
                className={`fixed z-50 transition-all duration-300 ease-in-out inset-x-0 mx-auto
          ${(isScrolled || isMobileMenuOpen)
                        ? `top-0 w-full rounded-none bg-white py-4 ${!isMobileMenuOpen ? 'shadow-md' : ''}`
                        : 'top-6 w-[95%] max-w-7xl bg-white rounded-2xl py-4 px-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
                    }`}
            >
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 relative z-50 group">
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB] to-[#60A5FA] rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform shadow-md"></div>
                            <div className="absolute inset-0 bg-white rounded-xl transform -rotate-3 group-hover:-rotate-6 transition-transform border border-blue-100/50 flex items-center justify-center shadow-sm">
                                <span className="text-[#2563EB] text-xl font-black italic tracking-tighter ml-0.5 mt-0.5">
                                    Qg
                                </span>
                            </div>
                        </div>
                        <span className="text-2xl font-black text-slate-900 tracking-tight whitespace-nowrap">
                            Qythera<span className="text-[#2563EB]"> Group</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-4 xl:gap-8">
                        <ul className="flex items-center gap-2 xl:gap-6">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.href;
                                const isInternship = link.id === 'internship';
                                return (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className={`text-[15px] font-semibold transition-all duration-300 px-3 py-2 rounded-xl whitespace-nowrap
                                            ${isInternship
                                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] border border-blue-400/30 hover:-translate-y-0.5'
                                                    : isActive
                                                        ? 'bg-blue-50 text-[#2563EB] shadow-sm font-bold'
                                                        : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                                                }
                                        `}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        {/* Auth Buttons */}
                        <div className="flex items-center ml-2 border-l border-slate-200 pl-4 h-[42px]">
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <button className="px-6 py-2.5 rounded-xl bg-[#2563EB] text-white text-[15px] font-bold hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap cursor-pointer">
                                        Sign In
                                    </button>
                                </SignInButton>
                            </SignedOut>
                            <SignedIn>
                                <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
                            </SignedIn>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden relative z-50 p-2 text-slate-600 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`fixed inset-0 z-40 bg-white lg:hidden transition-transform duration-300 ease-in-out pt-24 px-6
            ${isMobileMenuOpen ? 'translate-x-[0%]' : 'translate-x-[100%]'}
          `}
                >
                    <ul className="flex flex-col gap-6 text-lg">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.href;
                            const isInternship = link.id === 'internship';
                            return (
                                <li key={link.name} className="border-b border-slate-100 pb-4">
                                    <Link
                                        to={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block font-bold px-4 py-3 rounded-xl transition-all ${isInternship
                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg border border-blue-400/30'
                                            : isActive ? 'bg-blue-50 text-[#2563EB]' : 'text-slate-600 active:bg-slate-50'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })}
                        <li className="pt-4 flex flex-col gap-4">
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex justify-center w-full px-5 py-3.5 rounded-xl bg-[#2563EB] text-white font-bold cursor-pointer"
                                    >
                                        Sign In
                                    </button>
                                </SignInButton>
                            </SignedOut>
                            <SignedIn>
                                <div className="flex items-center justify-center py-2" onClick={() => setIsMobileMenuOpen(false)}>
                                    <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: "w-12 h-12 border-2 border-[#2563EB]" } }} />
                                </div>
                            </SignedIn>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
