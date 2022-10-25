import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    return (
        <div className='py-24 text-center text-gray-800'>
            <h1 className='text-4xl'>Thanks for Checking out</h1>
            <p className='text-8xl'>Course Name : {course.name}</p>
        </div>
    );
};

export default CheckOut;