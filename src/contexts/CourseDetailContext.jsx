import React, { createContext, useState } from 'react';

export const DetailContext = createContext();

const CourseDetailContext = ({children}) => {
    const [course,setCourse] = useState(null);
    const courseInfo = {course,setCourse};
    return (
        <DetailContext.Provider value={courseInfo}>
            {children}
        </DetailContext.Provider>
    );
};

export default CourseDetailContext;