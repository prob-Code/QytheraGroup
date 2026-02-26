import React from 'react';
import Hero from '../components/Hero';
import InformationSections from '../components/InformationSections';
import Carousel from '../components/Carousel';

const Home = () => {
    return (
        <main>
            <Hero />
            <InformationSections />
            <Carousel />
        </main>
    );
};

export default Home;
