import React from 'react';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './../../../hooks/useAuth';
import AddedClassesCard from './AddedClassesCard';

const AddedClasses = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();
    const loggedEmail = user?.email;
    const { data: addedClasses = [], refetch,isLoading } = useQuery({
        queryKey: ['addedClasses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/instructor/classes/${loggedEmail}`);
            return res.data;
        },
    })

    console.log(addedClasses);
    return (
        <div>
            <Helmet title={`My Courses | GS Classroom`} />

            <div>
                <div class="w-full py-6 px-4 sm:px-6 md:py-10 md:px-8">
                    <div class="mx-auto">
                        <h1 class="text-2xl max-w-md md:max-w-xl text-secondary font-bold md:text-2xl md:leading-tight lg:text-4xl lg:leading-tight">
                            My Added Classes : {addedClasses.length}
                        </h1>
                        <p class="my-3 text-sm lg:text-base text-slate-500">
                            Empower learners globally. Share your expertise. Shape the future of education.
                        </p>
                        <div>
                            {
                                isLoading ? (<div className='w-full flex justify-center items-center justify-items-center'><img className='w-80' src="https://i.ibb.co/TqhV9yt/loading.gif" alt="" /></div>)
                                    :
                                    (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                                        {
                                            addedClasses?.map(course => <AddedClassesCard key={course._id} course={course} refetch={refetch} ></AddedClassesCard>)
                                        }
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedClasses;