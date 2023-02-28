import React from 'react';
import GetStarted from '../GetStarted/GetStarted';
import HealthProfessional from '../HealthProfessional/HealthProfessional';
import HomeBanner from '../HomeBanner/HomeBanner';
import HospitalOverView from '../HospitalOverView/HospitalOverView';
import PricingPlan from '../PricingPlan/PricingPlan';
import QualitySection from '../QualitySection/QualitySection';
import QuestionAndAns from '../QuestionAndAns/QuestionAndAns';
import Services from '../Services/Services';
import ShortIntro from '../ShortIntro/ShortIntro';
import TeamOverview from '../TeamOverview/TeamOverview';

const Home = () => {
    return (
        <div>
            <div className='hidden sm:hidden xl:block lg:block md:hidden'>
                <HomeBanner />
            </div>
            <ShortIntro />
            <HospitalOverView />
            <TeamOverview />
            <Services />
            <QualitySection />
            <QuestionAndAns />
            <HealthProfessional />
            <GetStarted />
            <PricingPlan />
        </div>
    );
};

export default Home;