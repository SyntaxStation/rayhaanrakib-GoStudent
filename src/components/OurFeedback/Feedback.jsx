import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef } from 'react';
import SectionTitle from './../../shared/SectionTitle';
import useFeedbacks from '../../hooks/useFeedbacks';

const Feedback = () => {
    const [feedbacks] = useFeedbacks();
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className='py-10'>
            <SectionTitle heading="Success Stories" subheading="Real Feedback, Real Growth." />
            <div className='flex flex-col lg:flex-row items-center gap-x-10 mt-5'>
                <div className='lg:relative m-10'>
                    <img className='w-[800px] hidden lg:block object-cover' src="https://i.ibb.co/D4ckjdK/user3.jpg" alt="" />
                    <img className='w-[800px] block lg:hidden object-cover rounded-md' src="https://i.ibb.co/rQJM3Vn/user4.jpg" alt="" />
                    <div className='hidden lg:block absolute -left-12 -bottom-12 '>
                        <img src="https://i.ibb.co/nzPxqDh/shape-02.png" alt="" />
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
                        feedbacks?.map(feedback => <SwiperSlide key={feedback._id}>
                            <div className='px-10 lg:px-0'>
                                <div className='w-10 md:w-20'>
                                    <img className='' src="https://i.ibb.co/f2mpwPq/quote.png" alt="" />
                                </div>
                                <p className='my-10 text-start text-gray-700 text-xl md:text-2xl'>{feedback?.feedbackText}</p>
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