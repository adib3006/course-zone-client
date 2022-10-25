import React, { useContext } from 'react';
import { CourseContext } from './Courses';
import { Link } from 'react-router-dom';
import { DetailContext } from './../contexts/CourseDetailContext';

const CoursesLeftSideBar = () => {
    const data = useContext(CourseContext);
    const {setCourse} = useContext(DetailContext);
    return (
        <div>
            <h3 className='text-2xl underline'>Course Names</h3>
            <ul>
                {data.map(d=><li key={d.id} onClick={()=>{setCourse(d)}} className='py-2 text-gray-700 hover:text-gray-900'>
                    <Link key={d.id} to={'/course-details'}>{d.name}</Link></li>)}
            </ul>
        </div>
    );
};

export default CoursesLeftSideBar;