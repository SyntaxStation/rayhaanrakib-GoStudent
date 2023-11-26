import React from 'react';
import { Fade } from 'react-awesome-reveal';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-base md:text-lg uppercase font-secondary text-center text-primary font-semibold opacity-75 mb-5'><Fade cascade damping={1e-1}>{heading}</Fade></h2>
            <h3 className='text-2xl md:text-4xl capitalize font-primary text-center px-4 md:px-0 max-w-xl text-secondary font-bold'>{subheading}</h3>
        </div>
    );
};

export default SectionTitle;