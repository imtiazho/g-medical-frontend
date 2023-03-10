import React from 'react';
import ContactBanner from '../ContactBanner/ContactBanner';
import ContactLinks from '../ContactLinks/ContactLinks';
import GetInTouch from '../GetInTouch/GetInTouch';
import SocialLink from '../SocialLink/SocialLink';

const Contact = () => {
    return (
        <div>
            <ContactBanner />
            <ContactLinks />
            <GetInTouch />
            <SocialLink />
        </div>
    );
};

export default Contact;