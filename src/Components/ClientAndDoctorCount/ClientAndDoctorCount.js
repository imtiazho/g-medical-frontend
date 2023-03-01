import React from 'react';
import ClientAndDoctorCountPic from '../../assets/cirtifi-standard-bg.png';
import TeamOverviewCard from '../TeamOverviewCard/TeamOverviewCard';

const ClientAndDoctorCount = () => {
    const ClientAndDoctorCountData = [
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
        <div className='relative w-5/6 mx-auto '>
            <div style={{ background: `url(${ClientAndDoctorCountPic})`, backgroundPosition: "center", backgroundSize: "cover" }} className='grid w-full grid-cols-4 items-center py-10 px-20 rounded-lg absolute top-[-5rem]'>
                {
                    ClientAndDoctorCountData.map(eachData => <TeamOverviewCard key={eachData._id} teamOverViewEach={eachData}></TeamOverviewCard>)
                }
            </div>
        </div>
    );
};

export default ClientAndDoctorCount;