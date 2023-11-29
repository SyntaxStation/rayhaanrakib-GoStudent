import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import SectionTitle from '../../shared/SectionTitle';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Helmet } from 'react-helmet';

const stripePromise = loadStripe('');

const Payment = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const payId = pathname.slice(pathname.lastIndexOf('/') + 1);
    const axiosSecure = useAxiosSecure();
    const [courseInfo, setCourseInfo] = useState([]);
    const url = `/api/v1/course/payment/${payId}`
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
            setCourseInfo(res.data)
        })

    }, [url, axiosSecure, payId])
    return (
        <div className='container mx-auto my-10'>
            <Helmet title='Payment | GS Classroom' />
            <SectionTitle heading="Payment Details" subheading="Seamless Transactions for Instant Access to Premium Learning" ></SectionTitle>

            <div className='p-20 flex flex-col items-center'>
                <div>
                    <h2 className='text-xl font-semibold'>{courseInfo.courseName}</h2>
                    <p className='text-gray-700 my-10 '>{courseInfo.detailedDescription}</p>
                </div>
                <div>
                    <Elements stripe={stripePromise}>

                    </Elements>
                </div>
                <button className="btn w-80 text-white bg-primary hover:bg-accent">Pay Now</button>
            </div>
            <div className='w-full px-10 md:px-20'>
                <div className='flex flex-col gap-4 my-1 md:my-3 lg:my-0'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-left text-gray-700 capitalize font-medium'>Category:</h3>
                        <p className='text-left text-gray-800 font-medium'>{courseInfo?.courseCategory}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-left text-gray-700 capitalize font-medium'>Enrollment:</h3>
                        <p className='text-left text-gray-800 font-medium'>{courseInfo?.totalEnrollment} Students</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-left text-gray-700 capitalize font-medium'>language:</h3>
                        <p className='text-left text-gray-800 font-medium'>{courseInfo?.language}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-left text-gray-700 capitalize font-medium'>lectures:</h3>
                        <p className='text-left text-gray-800 font-medium'>{courseInfo?.lectures}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-left text-gray-700 capitalize font-medium'>certificate:</h3>
                        <p className='text-left text-gray-800 font-medium'>{courseInfo?.certificate}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-left text-gray-700 capitalize font-medium'>instructor Email:</h3>
                        <p className='text-left text-gray-800 font-medium'>{courseInfo?.instructorEmail}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-left text-gray-700 capitalize font-medium'>instructor Experience:</h3>
                        <p className='text-left text-gray-800 font-medium'>{courseInfo?.instructorExperience}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;