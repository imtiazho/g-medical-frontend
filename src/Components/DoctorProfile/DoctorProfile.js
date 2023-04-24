import React from 'react';
import { useParams } from 'react-router-dom';
import DoctorProfileDetailsContainer from '../DoctorProfileDetailsContainer/DoctorProfileDetailsContainer';
import { useQuery } from '@tanstack/react-query';

const DoctorProfile = () => {
    const { doctorId } = useParams();
    const { doctorLoading, doctorError, data: doctorData } = useQuery({
        queryKey: ['doctors'],
        queryFn: () =>
            fetch('http://localhost:5000/all-doctors').then(
                (res) => res.json(),
            ),
    });
    if (doctorLoading) {
        return <p>Loading...</p>
    }

    else {
        const targetedDoctor = doctorData?.find(doctor => doctor._id === doctorId);
        return (
            <div>
                <DoctorProfileDetailsContainer targetedDoctor={targetedDoctor} />
            </div>
        );
    }

};

export default DoctorProfile;