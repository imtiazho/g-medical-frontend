import React from 'react';
import AllService from '../AllService/AllService';
import NewsLetterSubscribers from '../NewsLetterSubscribers/NewsLetterSubscribers';
import ServiceMoto from '../ServiceMoto/ServiceMoto';
import ServiceQuotes from '../ServiceQuotes/ServiceQuotes';
import serviceBanner from '../../assets/service-banner.jpg';
import SectionBannerAnotherType from '../SectionBannerAnotherType/SectionBannerAnotherType';


const Service = () => {
    return (
        <div>
            <SectionBannerAnotherType serviceBanner={serviceBanner} />
            <ServiceMoto />
            <AllService />
            <ServiceQuotes />
            <NewsLetterSubscribers />
        </div>
    );
};

export default Service;