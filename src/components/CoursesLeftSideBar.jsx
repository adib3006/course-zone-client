import React, { useContext } from 'react';
import { CourseContext } from './Courses';
import { Link } from 'react-router-dom';
import { DetailContext } from './../contexts/CourseDetailContext';

const CoursesLeftSideBar = () => {
    const data = useContext(CourseContext);
    const {setCourse} = useContext(DetailContext);
    return (
        <div>
            <h3 className='text-3xl text-gray-800 mb-4'>Course Names</h3>
            <hr className='px-5'/>
            <ul>
                {data.map(d=><li key={d.id} onClick={()=>{setCourse(d)}} className='py-2 hover:bg-slate-400 hover:rounded text-gray-600 hover:text-gray-800'>
                    <Link key={d.id} to={'/course-details'}>{d.name}</Link></li>)}
            </ul>
        </div>
    );
};

export default CoursesLeftSideBar;