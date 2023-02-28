import React from 'react';
import { RiHeartPulseLine, RiUserHeartLine } from 'react-icons/ri';
import { RiFirstAidKitLine } from 'react-icons/ri';
import img1 from '../../assets/family-care.svg';
import img2 from '../../assets/health-care.svg';
import img3 from '../../assets/first-aid.svg';
import ShortIntroCard from '../ShortIntroCard/ShortIntroCard';


const ShortIntro = () => {
    const shortIntroData = [
        {
            _id: 1,
            img: img1,
            title: "Family Care",
            decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
        },
        {
            _id: 2,
            img: img2,
            title: "Health Care",
            decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
        },
        {
            _id: 3,
            img: img3,
            title: "First Aid",
            decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
        }
    ]

    return (
        <div className='relative lg:w-5/6 xl:w-5/6 md:w-11/12 mx-auto'>
            <div className='xl:absolute lg:mt-20 xl:mt-0 md:mt-12 sm:mt-10 mt-7 top-6 md:flex flex sm:flex lg:flex xl:flex justify-center md:flex-wrap flex-wrap sm:flex-wrap lg:flex-nowrap xl:flex-nowrap w-full gap-6 xl:top-[-7rem]'>
                {
                    shortIntroData.map(eachIntro => <ShortIntroCard key={eachIntro._id} eachIntro={eachIntro}></ShortIntroCard>)
                }
            </div>
        </div>
    );
};

export default ShortIntro;