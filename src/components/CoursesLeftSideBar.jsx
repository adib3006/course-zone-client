import React, { useContext } from 'react';
import { CourseContext } from './Courses';
import { Link } from 'react-router-dom';

const CoursesLeftSideBar = () => {
    const data = useContext(CourseContext);
    return (
        <div>
            <h3>Course Names</h3>
            <ul>
                {data.map(d=><li><Link key={d.id} to={`/course/${d.id}`}>{d.name}</Link></li>)}
            </ul>
        </div>
    );
};

export default CoursesLeftSideBar;