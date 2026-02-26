import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import MobileBackButton from './components/MobileBackButton';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Domains from './pages/Domains';
import Verify from './pages/Verify';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Internship from './pages/Internship';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Hide main content from screen readers until loaded, but render it so layout calculations work */}
      <div
        className={`transition-opacity duration-1000 ${loadingComplete ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden={!loadingComplete}
      >
        <ScrollToTop />
        <Navbar />
        <MobileBackButton />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </>
  );
}

export default App;
