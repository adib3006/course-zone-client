import React, { useContext } from 'react';
import { DetailContext } from './../contexts/CourseDetailContext';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    const { course } = useContext(DetailContext);

    return (
        <div>
            {course ?
                <div className='px-20 py-10 flex flex-col justify-center'>
                    <div className='flex justify-between'>
                        <h1 className='text-3xl font-bold text-gray-800'>{course?.name}</h1>
                        <button className='px-4 py-1 m-4 hover:shadow font-semibold rounded-md bg-sky-900 hover:bg-sky-700 hover:text-white text-gray-100'>PDF</button>
                    </div>
                    <img className='w-1/4 mx-auto' src={course?.image} alt="" />
                    <h3 className='text-xl text-center mb-5'>{course?.description}</h3>
                    <Link to={`/course/${course.id}`} className='px-4 py-1 m-4 mx-auto hover:shadow font-semibold rounded-md bg-sky-900 hover:bg-sky-700 hover:text-white text-gray-100'>Get Premium Access</Link>
                </div> 
                : 
                <div>
                    <h2 className='text-xl text-center'>Please select a course to proceed. Visit <Link className='text-sky-900 hover:text-sky-700' to='/courses'>Courses</Link>.</h2>
                </div>}
        </div>
    );
};

export default CourseDetails;