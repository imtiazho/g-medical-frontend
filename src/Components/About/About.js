import React from 'react';
import Cirtificated from '../Cirtificated/Cirtificated';
import ClientAndDoctorCount from '../ClientAndDoctorCount/ClientAndDoctorCount';
import GetStartedAbout from '../GetStartedAbout/GetStartedAbout';
import HeartAndSeicence from '../HeartAndSeicence/HeartAndSeicence';
import OwnerCard from '../OwnerCard/OwnerCard';
import Partner from '../Partner/Partner';
import SectionBanner from '../SectionBanner/SectionBanner';
import aboutBanner from '../../assets/about-banner.jpg';

const About = () => {
    return (
        <div>
            <SectionBanner banner={aboutBanner} moto={"About Us"} subTitle={"Some details of us"} />
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