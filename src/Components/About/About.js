import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import Cirtificated from '../Cirtificated/Cirtificated';
import ClientAndDoctorCount from '../ClientAndDoctorCount/ClientAndDoctorCount';
import GetStartedAbout from '../GetStartedAbout/GetStartedAbout';
import HeartAndSeicence from '../HeartAndSeicence/HeartAndSeicence';
import OwnerCard from '../OwnerCard/OwnerCard';
import Partner from '../Partner/Partner';

const About = () => {
    return (
        <div>
            <AboutBanner />
            <OwnerCard />
            <Cirtificated />
            <HeartAndSeicence />
            <ClientAndDoctorCount />
            <Partner />
            <GetStartedAbout />
        </div>
    );
};

export default About;