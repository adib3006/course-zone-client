import React, { useContext, useRef } from 'react';
import { DetailContext } from './../contexts/CourseDetailContext';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';


const CourseDetails = () => {
    const { course } = useContext(DetailContext);
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `${course?.name}`
    });

    return (
        <div>
            {course ?
                <div className='px-3 md:px-20 py-10 flex flex-col justify-center'>
                    <div className='flex justify-between items-center bg-slate-300'>
                        <h1 className='text-3xl font-bold text-gray-800 pl-4'>{course?.name}</h1>
                        <button onClick={handlePrint} className='px-4 py-1 m-4 hover:shadow font-semibold rounded-md bg-sky-900 hover:bg-sky-700 hover:text-white text-gray-100'>PDF</button>
                    </div>
                    <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }} className='flex flex-col justify-around items-center'>
                        <h2 className='text-2xl text-center my-5 text-gray-800'>Title: {course?.name}</h2>
                        <img className='w-1/2 lg:w-1/4 mx-auto mb-5' src={course?.image} alt="" />
                        <h3 className='text-xl text-center mb-5 text-gray-800'>{course?.description}</h3>
                    </div>
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