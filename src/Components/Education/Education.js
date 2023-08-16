import React, { useState } from 'react';
import doctor6 from '../../assets/6.jpg';
import homeSerPic from '../../assets/servicehome.jpg';
import s1 from '../../assets/dental.jpg'
import s2 from '../../assets/2.jpg';
import s3 from '../../assets/eye.jpg';
import s4 from '../../assets/orthodontist.jpg';
import s5 from '../../assets/oral.jpg';
import s6 from '../../assets/6.jpg';
import ourDoctorBanner from '../../assets/our-doctor.jpg';
import PortfolioCard from '../PortfolioCard/PortfolioCard';

import dentalCare from '../../assets/dental.jpg';
import primaryCare from '../../assets/primary-care.jpg';
import eyeCare from '../../assets/eye.jpg';
import orthodonticsPic from '../../assets/orthodontist.jpg';
import oral from '../../assets/oral.jpg';
import dentalDoc1 from '../../assets/1.jpg';
import dentalDoc2 from '../../assets/2.jpg';
import dentalDoc3 from '../../assets/3.jpg';
import dental4 from '../../assets/4.jpg';
import dental5 from '../../assets/5.jpg';
import dental6 from '../../assets/6.jpg';
import thoorthExtra from '../../assets/thhoth-extra.jpg';
import plan2 from '../../assets/serD2.jpg';
import plan3 from '../../assets/serD3.jpg';


const Education = () => {
    const portfolioData = [
        {
            _id: "644585b1ee52035939d75787",
            serviceImg: dentalCare,
            bannerImg: "https://i.ibb.co/sFXjgdz/our-doctor.jpg",
            projectName: "Dental Care From Education",
            portfolioName: "Using ALD Films to Coat Medical Devices and Implants one template",
            projectMoto: "The most powerful theme on earth",
            projectDoctorImg: dentalDoc1,
            projectMainThemeDetails: "1 A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense.",
            clientName: "Apple Corp.",
            skills: "Marketing, Photoshop",
            projectManager: "Allan Smith",
            PlanOneDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanOneImg: "https://i.ibb.co/JK1Sz64/servicehome.jpg",
            PlanTwoDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanTwoImg: plan2,
            PlanThreeDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanThreeImg: plan3,
            projectSummary: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            ClientsFeedback: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, whi"
        },
        {
            _id: "644585b1ee52035939d75788",
            serviceImg: primaryCare,
            bannerImg: "https://i.ibb.co/sFXjgdz/our-doctor.jpg",
            projectName: "Primary Care From Education",
            portfolioName: "Using ALD Films to Coat Medical Devices and Implants one template",
            projectMoto: "The most powerful theme on earth",
            projectDoctorImg: dentalDoc2,
            projectMainThemeDetails: "2 A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense.",
            clientName: "Apple Corp.",
            skills: "Marketing, Photoshop",
            projectManager: "Allan Smith",
            PlanOneDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanOneImg: "https://i.ibb.co/JK1Sz64/servicehome.jpg",
            PlanTwoDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanTwoImg: plan2,
            PlanThreeDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanThreeImg: plan3,
            projectSummary: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            ClientsFeedback: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, whi"
        },
        {
            _id: "644585b1ee52035939d75789",
            serviceImg: eyeCare,
            bannerImg: "https://i.ibb.co/sFXjgdz/our-doctor.jpg",
            projectName: "Eye Care From Education",
            portfolioName: "Using ALD Films to Coat Medical Devices and Implants one template",
            projectMoto: "The most powerful theme on earth",
            projectDoctorImg: dentalDoc3,
            projectMainThemeDetails: "3 A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense.",
            clientName: "Apple Corp.",
            skills: "Marketing, Photoshop",
            projectManager: "Allan Smith",
            PlanOneDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanOneImg: "https://i.ibb.co/JK1Sz64/servicehome.jpg",
            PlanTwoDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanTwoImg: plan2,
            PlanThreeDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanThreeImg: plan3,
            projectSummary: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            ClientsFeedback: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, whi"
        },
        {
            _id: "644585b1ee52035939d7578a",
            serviceImg: orthodonticsPic,
            bannerImg: "https://i.ibb.co/sFXjgdz/our-doctor.jpg",
            projectName: "Orthodontics From Education",
            portfolioName: "Using ALD Films to Coat Medical Devices and Implants one template",
            projectMoto: "The most powerful theme on earth",
            projectDoctorImg: dental4,
            projectMainThemeDetails: "4 A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense.",
            clientName: "Apple Corp.",
            skills: "Marketing, Photoshop",
            projectManager: "Allan Smith",
            PlanOneDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanOneImg: "https://i.ibb.co/JK1Sz64/servicehome.jpg",
            PlanTwoDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanTwoImg: plan2,
            PlanThreeDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanThreeImg: plan3,
            projectSummary: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            ClientsFeedback: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, whi"
        },
        {
            _id: "644585b1ee52035939d7578b",
            serviceImg: oral,
            bannerImg: "https://i.ibb.co/sFXjgdz/our-doctor.jpg",
            projectName: "Oral Surgery From Education",
            portfolioName: "Using ALD Films to Coat Medical Devices and Implants one template",
            projectMoto: "The most powerful theme on earth",
            projectDoctorImg: dental5,
            projectMainThemeDetails: "5 A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense.",
            clientName: "Apple Corp.",
            skills: "Marketing, Photoshop",
            projectManager: "Allan Smith",
            PlanOneDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanOneImg: "https://i.ibb.co/JK1Sz64/servicehome.jpg",
            PlanTwoDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanTwoImg: plan2,
            PlanThreeDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanThreeImg: plan3,
            projectSummary: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            ClientsFeedback: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, whi"
        },
        {
            _id: "644585b1ee52035939d7578c",
            serviceImg: thoorthExtra,
            bannerImg: "https://i.ibb.co/sFXjgdz/our-doctor.jpg",
            projectName: "Tooth Extraction From Education",
            portfolioName: "Using ALD Films to Coat Medical Devices and Implants one template",
            projectMoto: "The most powerful theme on earth",
            projectDoctorImg: dental6,
            projectMainThemeDetails: "6 A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense.",
            clientName: "Apple Corp.",
            skills: "Marketing, Photoshop",
            projectManager: "Allan Smith",
            PlanOneDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanOneImg: "https://i.ibb.co/JK1Sz64/servicehome.jpg",
            PlanTwoDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanTwoImg: plan2,
            PlanThreeDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanThreeImg: plan3,
            projectSummary: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            ClientsFeedback: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, whi"
        }
    ]

    return (
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8'>
            {
                portfolioData.map(eachPortfolio => <PortfolioCard eachPortfolio={eachPortfolio} key={eachPortfolio._id}></PortfolioCard>)
            }
        </div>
    );
};

export default Education;