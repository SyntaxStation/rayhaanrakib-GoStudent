import React from 'react';
import OurTeam from './../../components/OurTeam/OurTeam';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return (
        <div data-aos="fade-up" className='container mx-auto mt-10'>
            <Helmet><title>About Us | GS Classroom</title></Helmet>
            <OurTeam></OurTeam>
        </div>
    );
};

export default AboutUs;