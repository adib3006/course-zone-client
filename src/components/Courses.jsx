import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesLeftSideBar from './CoursesLeftSideBar';
import CoursesSection from './CoursesSection';

export const CourseContext = createContext();

const Courses = () => {
    const coursesData = useLoaderData();
    console.log(coursesData);
    return (
        <div className='flex p-10'>
            <CourseContext.Provider value={coursesData}>
                <div className='w-1/4'><CoursesLeftSideBar></CoursesLeftSideBar></div>
                <div className='w-3/4'><CoursesSection></CoursesSection></div>
            </CourseContext.Provider>
        </div>
    );
};

export default Courses;