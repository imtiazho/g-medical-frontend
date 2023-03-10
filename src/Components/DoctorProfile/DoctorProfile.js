import React from 'react';
import { useParams } from 'react-router-dom';
import DoctorProfileIntro from '../DoctorProfileIntro/DoctorProfileIntro';

const DoctorProfile = () => {
    const { doctorId } = useParams();

    return (
        <div>
            <DoctorProfileIntro />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default DoctorProfile;