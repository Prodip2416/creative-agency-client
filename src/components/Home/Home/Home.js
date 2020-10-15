import React from 'react';
import Brand from '../Brand/Brand';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header />
            <Brand />
            <Services />
            <Works />
            <ClientFeedback />
            <Contact />
        </div>
    );
};

export default Home;