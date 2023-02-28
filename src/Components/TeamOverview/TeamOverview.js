import React from 'react';
import teamOverview from '../../assets/teamOverview.jpg';
import TeamOverviewCard from '../TeamOverviewCard/TeamOverviewCard';

const TeamOverview = () => {
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
        <div style={{ background: `url(${teamOverview})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full lg:h-96 xl:h-96 md:h-auto mt-20 relative'>
            <div className='absolute w-full h-full bg-[#000074] opacity-80'></div>

            <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 items-center w-5/6 mx-auto h-full xl:gap-6 lg:gap-6 xl:gap-6 md:gap-6 gap-[3rem] p-8'>
                {
                    teamOverViewData.map(teamOverViewEach => <TeamOverviewCard key={teamOverViewEach._id} teamOverViewEach={teamOverViewEach}></TeamOverviewCard>)
                }

            </div>
        </div>
    );
};

export default TeamOverview;