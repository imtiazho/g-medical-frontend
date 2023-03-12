import React from 'react';
import { useParams } from 'react-router-dom';
import DoctorProfileDetailsContainer from '../DoctorProfileDetailsContainer/DoctorProfileDetailsContainer';
import DoctorProfileIntro from '../DoctorProfileIntro/DoctorProfileIntro';

const DoctorProfile = () => {
    const { doctorId } = useParams();

    return (
        <div>
            <DoctorProfileIntro />
            <DoctorProfileDetailsContainer />
        </div>
    );
};

export default DoctorProfile;