import React, { useContext } from 'react';
import CourseCard from './CourseCard';
import { CourseContext } from './Courses';

const CoursesSection = () => {
    const data = useContext(CourseContext);
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                data.map(item=><CourseCard key={item.id} item={item}></CourseCard>)
            }
        </div>
    );
};

export default CoursesSection;