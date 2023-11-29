import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { Helmet } from 'react-helmet';

const Error = () => {
    return (
        <div className=''>
            <Helmet title='Error | GS Classroom' />
            <div className='flex flex-col justify-center justify-items-center items-center min-h-screen'>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://i.ibb.co/LNbVYkZ/error.png" alt="404" className="text-2xl w-full md:w-[85%]" />
                    <h2 className='text-2xl md:text-4xl my-3 capitalize  font-bold text-slate-800'>Oops... Page Not Found!</h2>
                    <Link to="/">{<button className="rounded-md text-lg md:text-xl px-3 py-2 md:px-5 md:py-4 flex gap-2 items-center my-6 bg-primary text-white transition hover:bg-black">Back To Home <FaArrowRight /> </button>}</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;