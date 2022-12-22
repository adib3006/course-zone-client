import React, { useContext } from 'react';
import { AuthContext } from './../contexts/UserContext';
import { toast } from 'react-hot-toast';

const Footer = () => {
    const {isDark} = useContext(AuthContext)
    const handleSubmitFeedback = (e) => {
        e.preventDefault();
        toast.success('Thanks for your feedback');
        e.target.reset();
    }
    return (
        <div className={`${isDark ? 'bg-gray-100 text-center py-5 mt-2 md:mt-5':'bg-slate-400 text-center py-5 mt-2 md:mt-5'}`}>
            <div>
                <form
                    onSubmit={handleSubmitFeedback}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid mb-2'>
                    <div>
                        <input
                            type='text'
                            name='feedback'
                            id='feedback'
                            placeholder='Feel free to give us your suggestions.'
                            className='w-4/5 md:w-full lg:w-1/3 px-3 py-1 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900 mx-2'
                            data-temp-mail-org='0'
                            required
                        />
                        <button
                            type='submit'
                            className='mt-2 md:mt-0 px-4 py-1 font-semibold rounded-md bg-sky-900 hover:bg-sky-700 hover:text-white text-gray-100'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <p className='text-gray-800'>© Course Zone</p>
        </div>
    );
};

export default Footer;