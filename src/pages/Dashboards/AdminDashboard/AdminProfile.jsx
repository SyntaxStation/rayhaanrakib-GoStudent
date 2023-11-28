import React from 'react';
import useUsersData from '../../../hooks/useUsersData';
import useAuth from '../../../hooks/useAuth';

const AdminProfile = () => {
    const [users] = useUsersData();
    const { user } = useAuth();
    const { displayName, email, photoURL } = user;
    const admin = users.find(userData => userData?.email == email);
    const imagePath = 'https://images.unsplash.com/photo-1499336315816-097655dcfbda';
    return (
        <div>
            <div className="relative block min-h-[70vh]">
                <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${imagePath})` }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
            </div>
            <div className="relative py-16 bg-blueGray-200">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center items-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex items-center justify-center">
                                    <div className="">
                                        <img alt="..." src={photoURL} className="shadow-xl rounded-full h-28 object-cover align-middle border-none absolute -m-16 w-28" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                                    {displayName}
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    {admin?.title}
                                </div>
                                <div className="mb-2 capitalize text-blueGray-600 mt-10">
                                    Your Role - {admin?.role}
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    Your Email - {email}
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            Unlock the world of web development with our comprehensive course led by industry experts. In our Web Developer program at GoStudent Classroom, you will embark on a journey to master the essential skills needed to thrive in the dynamic field of web development. From HTML and CSS fundamentals to advanced JavaScript and front-end frameworks, our carefully crafted curriculum ensures a holistic understanding of the latest technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;