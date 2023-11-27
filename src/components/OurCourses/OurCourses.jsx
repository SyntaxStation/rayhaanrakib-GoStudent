import React from 'react';
import useTopCourses from '../../hooks/useTopCourses';
import SectionTitle from './../../shared/SectionTitle';

const OurCourses = () => {
    const [topCourses] = useTopCourses();

    return (
        <div>
            <SectionTitle heading="Explore Our Popular Courses" subheading="Discover Trending and Highly Recommended Classes" ></SectionTitle>

            <div className='w-1/2 mt-10'>
                <h1 className='text-2xl text-primary'>Most Popular and In-Demand Classes <br /> on Our Platform</h1>
                <p>Unlock a world of knowledge with our most sought-after courses. Explore trending topics and gain valuable skills from the courses that learners like you find most compelling. Enroll today to join the community of learners shaping their futures with our popular courses.</p>
            </div>
        </div>
    );
};

export default OurCourses;