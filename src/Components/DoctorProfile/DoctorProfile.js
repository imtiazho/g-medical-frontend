import React from 'react';
import { useParams } from 'react-router-dom';
import DoctorProfileDetailsContainer from '../DoctorProfileDetailsContainer/DoctorProfileDetailsContainer';

const DoctorProfile = () => {
    const { doctorId } = useParams();

    return (
        <div>
            <DoctorProfileDetailsContainer />
        </div>
    );
};

export default DoctorProfile;