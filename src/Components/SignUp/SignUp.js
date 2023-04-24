import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <div className='w-1/2 mx-auto my-20 flex flex-col gap-6 border shadow-lg bg-primary p-8 pb-16 rounded'>
                <form className='flex flex-col gap-6'>
                    <p className='bg-primary py-3 text-center font-bold text-3xl text-white'>Sign Up</p>
                    <input placeholder='Email' type="You Name" className='w-full focus:outline-0 h-full bg-white rounded p-[1rem] text-black text-md text-black' />
                    <input placeholder='Email' type="email" className='w-full focus:outline-0 h-full bg-white rounded p-[1rem] text-black text-md text-black' />
                    <input placeholder='Password' type="password" className='w-full focus:outline-0 h-full bg-white rounded p-[1rem] text-black text-md text-black' />
                    <input placeholder='Confirm Password' type="password" className='w-full focus:outline-0 h-full bg-white rounded p-[1rem] text-black text-md text-black' />
                    <input className='btn bg-white text-primary border-0 hover:bg-white outline-0' type="submit" value='LOGIN' />
                    <p className='text-center text-white'>Already have account? <Link to='/login-sec'>Login</Link></p>
                    <div className='flex justfify-center gap-4 items-center text-white'>
                        <div className='bg-white w-full h-[1px]'></div>
                        <div>OR</div>
                        <div className='bg-white w-full h-[1px]'></div>
                    </div>
                </form>
                <button className='btn bg-white text-primary border-0 hover:bg-white outline-0'>Continue with google</button>
            </div>
        </div>
    );
};

export default SignUp;