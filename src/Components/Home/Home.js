import { useQuery } from '@tanstack/react-query';
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
    const { doctorLoading, doctorError, data: doctorData } = useQuery({
        queryKey: ['doctors'],
        queryFn: () =>
            fetch('http://localhost:5000/all-doctors').then(
                (res) => res.json(),
            ),
    })

    const { portfolioLoading, portfolioError, data: portfolioData } = useQuery({
        queryKey: ['portfolio'],
        queryFn: () =>
            fetch('http://localhost:5000/all-portfolio').then(
                (res) => res.json(),
            ),
    })

    if (doctorLoading || portfolioLoading) {
        return <p>Loading...</p>
    }
    if (doctorError || portfolioError) {
        console.log(doctorError, portfolioError)
    }

    return (
        <div>
            <div className='hidden sm:hidden xl:block lg:block md:hidden'>
                <HomeBanner />
            </div>
            <ShortIntro />
            <HospitalOverView />
            <TeamOverview />
            <Services portfolioData={portfolioData} />
            <QualitySection />
            <QuestionAndAns />
            <HealthProfessional doctorData={doctorData} />
            <GetStarted />
            <PricingPlan />
        </div>
    );
};

export default Home;