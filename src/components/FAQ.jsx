import React from 'react';

const FAQ = () => {

    return (
        <div className='p-2 md:p-5 md:w-2/3 mx-auto text-gray-800'>
            <div className='p-5 border shadow rounded mb-5'>
                <h1 className='text-3xl font-semibold pb-3'>What are we?</h1>
                <p className='text-xl'>We are a group of courious people who are keen to learn and spread our knowledge.</p>
            </div>
            <div className='p-5 border shadow rounded mb-5'>
                <h1 className='text-3xl font-semibold pb-3'>What do we offer?</h1>
                <p className='text-xl'>We offer top of the line online resources with our extraordinary instructors guidelines.</p>
            </div>
            <div className='p-5 border shadow rounded mb-5'>
                <h1 className='text-3xl font-semibold pb-3'>Are our courses free?</h1>
                <p className='text-xl'>Almost 80% of our courses are free and will remain free of cost. Only a handful of courses are paid but we offer scholarship on regular basis.</p>
            </div>
            <div className='p-5 border shadow rounded mb-5'>
                <h1 className='text-3xl font-semibold pb-3'>How long it usually takes to finish a course?</h1>
                <p className='text-xl'>The average time of our course is 5/6 months. It can highly depend on the student's dedication and hardwork.</p>
            </div>
        </div>
    );
};

export default FAQ;