import React from 'react';
import CoursesLeftSideBar from './CoursesLeftSideBar';
import CoursesSection from './CoursesSection';

const Courses = () => {
    return (
        <div className='flex'>
            <div className='w-1/4'><CoursesLeftSideBar></CoursesLeftSideBar></div>
            <div className='w-3/4'><CoursesSection></CoursesSection></div>
        </div>
    );
};

export default Courses;