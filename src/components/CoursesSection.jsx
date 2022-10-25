import React, { useContext } from 'react';
import CourseCard from './CourseCard';
import { CourseContext } from './Courses';

const CoursesSection = () => {
    const data = useContext(CourseContext);
    return (
        <div className='grid lg:grid-cols-3 gap-5'>
            {
                data.map(item=><CourseCard key={item.id} item={item}></CourseCard>)
            }
        </div>
    );
};

export default CoursesSection;