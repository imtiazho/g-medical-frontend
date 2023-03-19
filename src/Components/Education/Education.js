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

const Education = () => {
    const portfolioData = [
        {
            _id: "1",
            serviceImg: s1,
            bannerImg: ourDoctorBanner,
            projectName: "Dental Care",
            portfolioName: "Using ALD Films to Coat Medical Devices and Implants two template",
            projectMoto: "The most powerful theme on earth",
            projectDoctorImg: doctor6,
            projectMainThemeDetails: "1 A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense.",
            clientName: "Apple Corp.",
            skills: "Marketing, Photoshop",
            projectManager: "Allan Smith",
            PlanOneDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanOneImg: homeSerPic,
            PlanTwoDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanTwoImg: homeSerPic,
            PlanThreeDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanThreeImg: homeSerPic,
            projectSummary: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            ClientsFeedback: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, whi"
        },
        {
            _id: "2",
            serviceImg: s2,
            bannerImg: ourDoctorBanner,
            projectName: "Primary Care",
            portfolioName: "Using ALD Films to Coat Medical Devices and Implants two template",
            projectMoto: "The most powerful theme on earth",
            projectDoctorImg: doctor6,
            projectMainThemeDetails: "2 A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense.",
            clientName: "Apple Corp.",
            skills: "Marketing, Photoshop",
            projectManager: "Allan Smith",
            PlanOneDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanOneImg: homeSerPic,
            PlanTwoDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanTwoImg: homeSerPic,
            PlanThreeDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanThreeImg: homeSerPic,
            projectSummary: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            ClientsFeedback: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, whi"
        },
        {
            _id: "3",
            serviceImg: s3,
            bannerImg: ourDoctorBanner,
            projectName: "Eye Care",
            portfolioName: "Using ALD Films to Coat Medical Devices and Implants two template",
            projectMoto: "The most powerful theme on earth",
            projectDoctorImg: doctor6,
            projectMainThemeDetails: "3 A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense.",
            clientName: "Apple Corp.",
            skills: "Marketing, Photoshop",
            projectManager: "Allan Smith",
            PlanOneDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanOneImg: homeSerPic,
            PlanTwoDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanTwoImg: homeSerPic,
            PlanThreeDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanThreeImg: homeSerPic,
            projectSummary: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            ClientsFeedback: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, whi"
        },
        {
            _id: "4",
            serviceImg: s4,
            bannerImg: ourDoctorBanner,
            projectName: "Orthodontics",
            portfolioName: "Using ALD Films to Coat Medical Devices and Implants two template",
            projectMoto: "The most powerful theme on earth",
            projectDoctorImg: doctor6,
            projectMainThemeDetails: "4 A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense.",
            clientName: "Apple Corp.",
            skills: "Marketing, Photoshop",
            projectManager: "Allan Smith",
            PlanOneDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanOneImg: homeSerPic,
            PlanTwoDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanTwoImg: homeSerPic,
            PlanThreeDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanThreeImg: homeSerPic,
            projectSummary: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            ClientsFeedback: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, whi"
        },
        {
            _id: "5",
            serviceImg: s5,
            bannerImg: ourDoctorBanner,
            projectName: "Oral Surgery",
            portfolioName: "Using ALD Films to Coat Medical Devices and Implants two template",
            projectMoto: "The most powerful theme on earth",
            projectDoctorImg: doctor6,
            projectMainThemeDetails: "5 A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense.",
            clientName: "Apple Corp.",
            skills: "Marketing, Photoshop",
            projectManager: "Allan Smith",
            PlanOneDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanOneImg: homeSerPic,
            PlanTwoDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanTwoImg: homeSerPic,
            PlanThreeDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanThreeImg: homeSerPic,
            projectSummary: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            ClientsFeedback: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, whi"
        },
        {
            _id: "6",
            serviceImg: s6,
            bannerImg: ourDoctorBanner,
            projectName: "Tooth Extraction",
            portfolioName: "Using ALD Films to Coat Medical Devices and Implants two template",
            projectMoto: "The most powerful theme on earth",
            projectDoctorImg: doctor6,
            projectMainThemeDetails: "6 A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense.",
            clientName: "Apple Corp.",
            skills: "Marketing, Photoshop",
            projectManager: "Allan Smith",
            PlanOneDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanOneImg: homeSerPic,
            PlanTwoDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanTwoImg: homeSerPic,
            PlanThreeDetails: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.",
            PlanThreeImg: homeSerPic,
            projectSummary: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            ClientsFeedback: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, whi"
        },
    ]

    return (
        <div className='grid grid-cols-3 gap-8'>
            {
                portfolioData.map(eachPortfolio => <PortfolioCard eachPortfolio={eachPortfolio} key={eachPortfolio._id}></PortfolioCard>)
            }
        </div>
    );
};

export default Education;