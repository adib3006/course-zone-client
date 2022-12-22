import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './../contexts/UserContext';

const Navbar = () => {
    const { user, logOut, isDark, setIsDark } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('user logged out');
            })
            .catch((error) => { console.error(error) })
    }
    return (
        <div className={`${isDark ? 'bg-gray-100' : 'bg-slate-400'}`}>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className='relative flex items-center justify-between'>
                    <Link
                        to='/'
                        aria-label='courseZone'
                        title='courseZone'
                    >
                        <div className='flex items-center'>
                            <img className='w-10' src="https://i.ibb.co/Tc4z6Hg/logo48.png" alt="" />
                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                                <span className='text-sky-900'>Course</span> Zone
                            </span>
                        </div>
                    </Link>
                    <ul className='items-center hidden space-x-8 lg:flex'>
                        <li>
                            {
                                isDark ?
                                    <img className='w-8' onClick={() => { setIsDark(!isDark) }} src="https://i.ibb.co/PQG2VFr/dark.png" alt="" />
                                    :
                                    <img className='w-8' onClick={() => { setIsDark(!isDark) }} src="https://i.ibb.co/0ssLfYt/light.png" alt="" />
                            }
                        </li>
                        <li>
                            <NavLink
                                to='/courses'
                                aria-label='courses'
                                title='courses'
                                className={({ isActive }) => isActive ? 'font-medium tracking-wide text-sky-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                            >
                                Courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/faq'
                                aria-label='faq'
                                title='faq'
                                className={({ isActive }) => isActive ? 'font-medium tracking-wide text-sky-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                            >
                                FAQs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blog'
                                aria-label='blog'
                                title='blog'
                                className={({ isActive }) => isActive ? 'font-medium tracking-wide text-sky-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/team'
                                aria-label='team'
                                title='team'
                                className={({ isActive }) => isActive ? 'font-medium tracking-wide text-sky-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                            >
                                Team
                            </NavLink>
                        </li>
                        <li className='flex'>
                            {user?.uid ?
                                <><div className='flex'>
                                    <div className="w-10 rounded">
                                        <img data-bs-toggle="tooltip" title={user.displayName} className='rounded-full' src={user.photoURL} alt='' />
                                    </div>
                                    <button onClick={handleLogout} className='mx-2 px-2 border rounded bg-slate-300 text-gray-900 hover:bg-slate-500'>Log Out</button>
                                </div></>
                                :
                                <NavLink
                                    to='/login'
                                    aria-label='login'
                                    title='login'
                                    className={({ isActive }) => isActive ? 'font-medium tracking-wide text-sky-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                                >
                                    Login
                                </NavLink>
                            }
                        </li>
                    </ul>
                    <div className='lg:hidden'>
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                <path
                                    fill='currentColor'
                                    d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link
                                                to='/'
                                                aria-label='courseZone'
                                                title='courseZone'
                                            >
                                                <div className='flex items-center'>
                                                    <img className='w-10' src="https://i.ibb.co/Tc4z6Hg/logo48.png" alt="" />
                                                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                                                        <span className='text-sky-900'>Course</span> Zone
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                    <path
                                                        fill='currentColor'
                                                        d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        {

                                        }
                                        <ul className='space-y-4'>
                                            <li>
                                                {
                                                    isDark ?
                                                        <img className='w-8' onClick={() => { setIsDark(!isDark) }} src="https://i.ibb.co/PQG2VFr/dark.png" alt="" />
                                                        :
                                                        <img className='w-8' onClick={() => { setIsDark(!isDark) }} src="https://i.ibb.co/0ssLfYt/light.png" alt="" />
                                                }
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/courses'
                                                    aria-label='courses'
                                                    title='courses'
                                                    className={({ isActive }) => isActive ? 'font-medium tracking-wide text-sky-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                                                >
                                                    Courses
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/faq'
                                                    aria-label='faq'
                                                    title='faq'
                                                    className={({ isActive }) => isActive ? 'font-medium tracking-wide text-sky-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                                                >
                                                    FAQs
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/blog'
                                                    aria-label='blog'
                                                    title='blog'
                                                    className={({ isActive }) => isActive ? 'font-medium tracking-wide text-sky-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/team'
                                                    aria-label='team'
                                                    title='team'
                                                    className={({ isActive }) => isActive ? 'font-medium tracking-wide text-sky-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                                                >
                                                    Team
                                                </NavLink>
                                            </li>
                                            <li>
                                                {user?.uid ?
                                                    <><div className='flex flex-col justify-center'>
                                                        <div className="w-10 rounded">
                                                            {user.photoURL ? <img data-bs-toggle="tooltip" title={user.displayName} className='rounded-full' src={user.photoURL} alt='' /> : <img data-bs-toggle="tooltip" title={user.displayName} className='rounded-full' src='https://i.ibb.co/YWzBXhs/user.png' alt='' />}
                                                        </div>
                                                        <button onClick={handleLogout} className='mt-2 px-2 border rounded text-gray-700 w-20'>Log Out</button>
                                                    </div></>
                                                    :
                                                    <NavLink
                                                        to='/login'
                                                        aria-label='login'
                                                        title='login'
                                                        className={({ isActive }) => isActive ? 'font-medium tracking-wide text-sky-700 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                                                    >
                                                        Login
                                                    </NavLink>
                                                }
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;