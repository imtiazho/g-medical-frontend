import React from 'react';
import s1 from '../../assets/dental.jpg'
import s2 from '../../assets/2.jpg';
import s3 from '../../assets/eye.jpg';
import s4 from '../../assets/orthodontist.jpg';
import s5 from '../../assets/oral.jpg';
import s6 from '../../assets/6.jpg'
import ServiceCard from '../ServiceCard/ServiceCard';
import ourDoctorBanner from '../../assets/our-doctor.jpg';
import doctor6 from '../../assets/6.jpg';
import homeSerPic from '../../assets/servicehome.jpg';

const Services = () => {
    const homeServiceSecData = [
        {
            _id: "1",
            serviceImg: s1,
            bannerImg: ourDoctorBanner,
            projectName: "Dental Care",
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
        <div className='w-5/6 mx-auto mt-24'>
            <span className='text-center'>
                <p className='text-accent text-xl font-bold mb-4'>We can provide health insurance certificates</p>
                <h1 className='xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl font-bold text-black'>Whatever your healthcare needs, <br /> we are here to help</h1>
            </span>

            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10  mt-12'>
                {
                    homeServiceSecData.map((ServicesDataEach) => <ServiceCard key={ServicesDataEach._id} ServicesDataEach={ServicesDataEach}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;