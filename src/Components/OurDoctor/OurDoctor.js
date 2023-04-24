import React from 'react';
import AllDoctors from '../AllDoctors/AllDoctors';
import CirtifiedTheJoin from '../CirtifiedTheJoin/CirtifiedTheJoin';
import DirectionMap from '../DirectionMap/DirectionMap';
import FAQ from '../FAQ/FAQ';
import ourDoctorBanner from '../../assets/our-doctor.jpg';
import SectionBanner from '../SectionBanner/SectionBanner';
import { useQuery } from '@tanstack/react-query';

const OurDoctor = () => {
    const { doctorLoading, doctorError, data: doctorData } = useQuery({
        queryKey: ['doctors'],
        queryFn: () =>
            fetch('http://localhost:5000/all-doctors').then(
                (res) => res.json(),
            ),
    })
    if (doctorLoading) {
        return <p>Loading...</p>
    }
    console.log(doctorData);

    return (
        <div>
            <SectionBanner banner={ourDoctorBanner} moto={"Meet Our Doctors"} subTitle={"Only best doctors here"} />
            <AllDoctors doctorData={doctorData} />
            <CirtifiedTheJoin />
            <FAQ />
            <DirectionMap />
        </div>
    );
};

export default OurDoctor;