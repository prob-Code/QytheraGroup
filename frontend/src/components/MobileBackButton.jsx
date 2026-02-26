import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileBackButton = () => {
    const location = useLocation();

    // Hide on desktop (md:hidden)
    // Only show on specific pages, not on home, login, or signup
    const hiddenPaths = ['/', '/login', '/signup'];

    if (hiddenPaths.includes(location.pathname)) {
        return null;
    }

    return (
        <div className="md:hidden w-full bg-slate-50 pt-24 pb-4 px-4 sticky top-0 z-40 border-b border-slate-200 shadow-sm">
            <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-slate-700 font-bold text-sm rounded-xl shadow-sm border border-slate-200 hover:bg-slate-50 active:bg-slate-100 transition-colors"
            >
                <i className="fa-solid fa-arrow-left text-[#2563EB]"></i>
                Return to Home
            </Link>
        </div>
    );
};

export default MobileBackButton;
