import React from 'react';
import ContactLinks from '../ContactLinks/ContactLinks';
import GetInTouch from '../GetInTouch/GetInTouch';
import SocialLink from '../SocialLink/SocialLink';
import SectionBanner from '../SectionBanner/SectionBanner';
import ourDoctorBanner from '../../assets/our-doctor.jpg';

const Contact = () => {
    return (
        <div>
            <SectionBanner banner={ourDoctorBanner} moto={"Contact with us"} subTitle={"Get in touch here"} />
            <ContactLinks />
            <GetInTouch />
            <SocialLink />
        </div>
    );
};

export default Contact;