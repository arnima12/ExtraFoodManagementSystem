import React from 'react';
import Banner from '../Banner/Banner';
import Benefit from '../Benefit/Benefit';
import About from '../About/About';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <Benefit />
            <About />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;