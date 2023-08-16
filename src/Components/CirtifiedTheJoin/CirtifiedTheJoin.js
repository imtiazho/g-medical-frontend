import React from 'react';
import CirtifiedTheJoinPic from '../../assets/cirtified-the-join.jpg';
import TeamOverviewCard from '../TeamOverviewCard/TeamOverviewCard';

const CirtifiedTheJoin = () => {
    const teamOverViewData = [
        {
            _id: 1,
            quantityOrScale: "120+",
            object: "Health Section"
        },
        {
            _id: 2,
            quantityOrScale: "400+",
            object: "Professinals"
        },
        {
            _id: 3,
            quantityOrScale: "22000",
            object: "Satisfied Patients"
        },
        {
            _id: 4,
            quantityOrScale: "100+",
            object: "Health Plans"
        }
    ]
    return (
        <div style={{ background: `url(${CirtifiedTheJoinPic})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full lg:h-auto xl:h-auto md:h-auto relative mt-20'>
            <div className='absolute w-full h-full bg-[#000074] opacity-60 z-1'></div>
            <div className='lg:w-9/12 w-[95%] h-full mx-auto'>
                <div className='flex flex-col justify-center items-center h-full z-10 text-center gap-10 py-14'>
                    <span>
                        <h1 className='text-center font-bold text-4xl mb-2 text-white z-10 relative'>Certified by the Joint Commission</h1>
                        <p className='text-center text-[#a1a1a1] z-10 relative mb-4'>the largest and most respected accreditation agencies</p>
                        <p className='lg:w-9/12 w-[90%] mx-auto text-white z-10 relative font-light'>One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small</p>
                    </span>

                    <div className="bg-white h-10 w-0.5 text-white relative z-10"></div>

                    <span className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full'>
                        {
                            teamOverViewData.map(teamOverViewEach => <TeamOverviewCard key={teamOverViewEach._id} teamOverViewEach={teamOverViewEach}></TeamOverviewCard>)
                        }
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CirtifiedTheJoin;