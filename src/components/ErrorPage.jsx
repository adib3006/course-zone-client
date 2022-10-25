import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='pt-40 text-center'>
            <h1 className='text-8xl'>{error.status}</h1>
            <p className='text-4xl'>{error.statusText}</p>
            <p className='text-4xl'>Go to <Link className='text-sky-700' to='/home'>Home</Link></p>
        </div>
    );
};

export default ErrorPage;