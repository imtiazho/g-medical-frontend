import React from 'react';
import AllService from '../AllService/AllService';
import NewsLetterSubscribers from '../NewsLetterSubscribers/NewsLetterSubscribers';
import ServiceBanner from '../ServiceBanner/ServiceBanner';
import ServiceMoto from '../ServiceMoto/ServiceMoto';
import ServiceQuotes from '../ServiceQuotes/ServiceQuotes';

const Service = () => {
    return (
        <div>
            <ServiceBanner />
            <ServiceMoto />
            <AllService />
            <ServiceQuotes />
            <NewsLetterSubscribers />
        </div>
    );
};

export default Service;