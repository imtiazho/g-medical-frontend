import React from 'react';
import s1 from '../../assets/lungs.png';
import s2 from '../../assets/heart.png';
import s3 from '../../assets/orthopedic.png';
import s4 from '../../assets/general-sergery.png';
import s5 from '../../assets/pharmecy.png';
import s6 from '../../assets/sports-injury.png';
import s7 from '../../assets/fever-flu.png';
import s8 from '../../assets/dental.png';
import s9 from '../../assets/eye-care.png';
import { Link } from 'react-router-dom';

const AllService = () => {
    return (
        <div className='w-5/6 mx-auto mt-20'>
            <div className='grid grid-cols-3 gap-16'>
                <div className='flex flex flex-col gap-6'>
                    <div className='w-1/2'>
                        <img src={s1} alt="" />
                    </div>
                    <h3 className='text-2xl text-black font-medium'>Lung Diseases</h3>
                    <p className='text-secondary'>One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.</p>
                    <Link to='/service/1' className='text-primary text-lg font-medium'>Learn More </Link>
                </div>

                <div className='flex flex flex-col gap-6'>
                    <div className='w-1/2'>
                        <img src={s2} alt="" />
                    </div>
                    <h3 className='text-2xl text-black font-medium'>Lung Diseases</h3>
                    <p className='text-secondary'>One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.</p>
                    <Link to='/service/2' className='text-primary text-lg font-medium'>Learn More </Link>
                </div>

                <div className='flex flex flex-col gap-6'>
                    <div className='w-1/2'>
                        <img src={s3} alt="" />
                    </div>
                    <h3 className='text-2xl text-black font-medium'>Lung Diseases</h3>
                    <p className='text-secondary'>One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.</p>
                    <Link to='/service/3' className='text-primary text-lg font-medium'>Learn More </Link>
                </div>

                <div className='flex flex flex-col gap-6'>
                    <div className='w-1/2'>
                        <img src={s3} alt="" />
                    </div>
                    <h3 className='text-2xl text-black font-medium'>Lung Diseases</h3>
                    <p className='text-secondary'>One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.</p>
                    <Link to='/service/4' className='text-primary text-lg font-medium'>Learn More </Link>
                </div>

                <div className='flex flex flex-col gap-6'>
                    <div className='w-1/2'>
                        <img src={s3} alt="" />
                    </div>
                    <h3 className='text-2xl text-black font-medium'>Lung Diseases</h3>
                    <p className='text-secondary'>One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.</p>
                    <Link to='/service/5' className='text-primary text-lg font-medium'>Learn More </Link>
                </div>

                <div className='flex flex flex-col gap-6'>
                    <div className='w-1/2'>
                        <img src={s3} alt="" />
                    </div>
                    <h3 className='text-2xl text-black font-medium'>Lung Diseases</h3>
                    <p className='text-secondary'>One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.</p>
                    <Link to='/service/6' className='text-primary text-lg font-medium'>Learn More </Link>
                </div>

                <div className='flex flex flex-col gap-6'>
                    <div className='w-1/2'>
                        <img src={s3} alt="" />
                    </div>
                    <h3 className='text-2xl text-black font-medium'>Lung Diseases</h3>
                    <p className='text-secondary'>One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.</p>
                    <Link to='/service/7' className='text-primary text-lg font-medium'>Learn More </Link>
                </div>

                <div className='flex flex flex-col gap-6'>
                    <div className='w-1/2'>
                        <img src={s3} alt="" />
                    </div>
                    <h3 className='text-2xl text-black font-medium'>Lung Diseases</h3>
                    <p className='text-secondary'>One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.</p>
                    <Link to='/service/8' className='text-primary text-lg font-medium'>Learn More </Link>
                </div>

                <div className='flex flex flex-col gap-6'>
                    <div className='w-1/2'>
                        <img src={s3} alt="" />
                    </div>
                    <h3 className='text-2xl text-black font-medium'>Lung Diseases</h3>
                    <p className='text-secondary'>One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.</p>
                    <Link to='/service/9' className='text-primary text-lg font-medium'>Learn More </Link>
                </div>
            </div>
        </div>
    );
};

export default AllService;