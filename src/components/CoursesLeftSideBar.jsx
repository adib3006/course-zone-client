import React, { useContext } from 'react';
import { CourseContext } from './Courses';
import { Link } from 'react-router-dom';

const CoursesLeftSideBar = () => {
    const data = useContext(CourseContext);
    return (
        <div>
            <h3 className='text-2xl underline'>Course Names</h3>
            <ul>
                {data.map(d=><li className='py-2 text-gray-700 hover:text-gray-900'><Link key={d.id} to={`/course/${d.id}`}>{d.name}</Link></li>)}
            </ul>
        </div>
    );
};

export default CoursesLeftSideBar;