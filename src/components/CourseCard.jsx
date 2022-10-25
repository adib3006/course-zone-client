import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({item}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/course/${item.id}`);
    }
    return (
        <div onClick={handleClick} className='border rounded h-96 flex flex-col justify-between items-center py-5'>
            <h4>{item.name}</h4>
            <p>{item.title}</p>
            <img className='w-36 rounded-3xl' src={item.image} alt="" />
            <p>{item.description}</p>
        </div>
    );
};

export default CourseCard;