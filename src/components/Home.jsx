import React from 'react';
import Lottie from "lottie-react";
import study1 from "../assets/animation/study1.json";
import study from "../assets/animation/study.json";
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div className='grid grid-cols-2 px-20'>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-3xl text-center font-medium text-gray-800'>Make your dream come true with our top of the line tech courses.</h2>
                <p className='text-xl text-gray-800'>choose from our courses.</p>
                <Link className='px-4 py-1 m-4 hover:shadow font-semibold rounded-md bg-sky-900 hover:bg-sky-700 hover:text-white text-gray-100' to='/courses'>Courses</Link>
            </div>
            <div className='w-2/3'><Lottie animationData={study1} loop={true}></Lottie></div>
            <div className='w-2/3'><Lottie animationData={study} loop={true}></Lottie></div>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-3xl text-center font-medium text-gray-800'>Take guidelines from our best instructors and develop your skills from home.</h2>
                <p className='text-xl text-gray-800'>choose from our courses.</p>
                <Link className='px-4 py-1 m-4 hover:shadow font-semibold rounded-md bg-sky-900 hover:bg-sky-700 hover:text-white text-gray-100'  to='/courses'>Courses</Link>
            </div>
        </div>
    );
};

export default Home;