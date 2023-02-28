import React from 'react';
import AllDoctors from '../AllDoctors/AllDoctors';
import CirtifiedTheJoin from '../CirtifiedTheJoin/CirtifiedTheJoin';
import DirectionMap from '../DirectionMap/DirectionMap';
import DoctorBanner from '../DoctorBanner/DoctorBanner';
import FAQ from '../FAQ/FAQ';

const OurDoctor = () => {
    return (
        <div>
            <DoctorBanner />
            <AllDoctors />
            <CirtifiedTheJoin />
            <FAQ />
            <DirectionMap />
        </div>
    );
};

export default OurDoctor;