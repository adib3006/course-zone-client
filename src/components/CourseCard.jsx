import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailContext } from '../contexts/CourseDetailContext';

const CourseCard = ({item}) => {
    const navigate = useNavigate();
    const {setCourse} = useContext(DetailContext);
    const handleClick = () => {
        navigate('/course-details');
        setCourse(item);
    }
    return (
        <div onClick={handleClick} className='border hover:shadow-2xl hover:cursor-pointer rounded-xl h-80 flex flex-col justify-between items-center p-5'>
            <img className='w-36 rounded-3xl' src={item.image} alt="" />
            <h4 className='text-2xl font-semibold text-gray-800'>{item.name}</h4>
            <p className='text-gray-800'>{item.title}</p>
            <p className='text-gray-800'>{item.short_detail}</p>
        </div>
    );
};

export default CourseCard;