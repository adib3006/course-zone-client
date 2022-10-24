import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    return (
        <div>
            <h1>This is checkout</h1>
            <p>{course.name}</p>
            <p>{course.title}</p>
            <p>{course.description}</p>
        </div>
    );
};

export default CheckOut;