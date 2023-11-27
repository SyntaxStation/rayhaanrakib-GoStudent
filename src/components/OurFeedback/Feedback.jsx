import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
import SectionTitle from './../../shared/SectionTitle';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([])
    const axiosSecure = useAxiosSecure();
    const url = '/api/v1/feedbacks'
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setFeedbacks(res.data)
            })
    }, [axiosSecure, url])

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className='py-10'>
            <SectionTitle heading="Success Stories" subheading="Real Feedback, Real Growth." />
            <div className='flex flex-col lg:flex-row gap-x-10 mt-5'>
                <div className='lg:relative m-10'>
                    <img className='w-[800px]' src="https://eduvibe.react.devsvibe.com/images/testimonial-section/testimonial-01.jpg" alt="" />
                    <div className='hidden lg:block absolute -left-12 -bottom-12 '>
                        <img src="https://eduvibe.react.devsvibe.com/images/shapes/shape-02-01.png" alt="" />
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper my-20"
                >


                    {
                        feedbacks.map(feedback => <SwiperSlide key={feedback._id}>
                            <div className='px-10 lg:px-0'>
                                <div className='w-20'>
                                    <img className='' src="https://eduvibe.react.devsvibe.com/images/testimonial/testimonial-01/quote.png" alt="" />
                                </div>
                                <p className='my-10 text-start text-gray-700 text-2xl'>{feedback?.feedbackText}</p>
                                <div className='flex items-center gap-4 mb-20'>
                                    <div className='h-20 w-20 object-cover rounded-full'>
                                        <img className='rounded-full' src={feedback?.image} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='text-start font-semibold'>{feedback?.name}</h2>
                                        <h2 className='text-start text-sm'>{feedback?.title}</h2>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        )
                    }



                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>

        </div>
    );
};

export default Feedback;