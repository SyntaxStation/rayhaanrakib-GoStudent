import React from 'react';
import Banner from './../../components/Banner/Banner';
import AboutCourses from './../../components/AboutCourses/AboutCourses';
import ScrollToTop from 'react-scroll-to-top';
import { Helmet } from 'react-helmet';
import Partners from './../../components/OurPartnerships/Partners';
import Feedback from '../../components/OurFeedback/Feedback';

const Home = () => {
    return (
        <div>
            <Helmet title='GoStudent | Empower Learning, Ignite Futures' />
            <div className='py-0 lg:py-5'>
                <Banner></Banner>
            </div>
            <div data-aos="fade-up" className='container mx-auto mt-20'>
                <Partners />
            </div>
            <div data-aos="fade-up" className='container mx-auto mt-20'>
                <Feedback />
            </div>
            <div className='bg-gradient-to-r from-white to-base-200 mt-20'>
                <AboutCourses></AboutCourses>
            </div>
            <ScrollToTop className='flex justify-center items-center' smooth />
        </div>


    );
};

export default Home;