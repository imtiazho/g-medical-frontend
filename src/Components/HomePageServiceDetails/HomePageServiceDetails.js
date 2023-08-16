import React from 'react';
import { useParams } from 'react-router-dom';
import doctor6 from '../../assets/6.jpg';
import homeSerPic from '../../assets/servicehome.jpg';
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
import SectionBanner from '../SectionBanner/SectionBanner';
import thoorthExtra from '../../assets/thhoth-extra.jpg';
import plan2 from '../../assets/serD2.jpg';
import plan3 from '../../assets/serD3.jpg';


const HomePageServiceDetails = () => {
    const { serDetails } = useParams();
    const portfolioData = [
        {
            _id: "644585b1ee52035939d75787",
            serviceImg: dentalCare,
            bannerImg: "https://i.ibb.co/sFXjgdz/our-doctor.jpg",
            projectName: "Dental Care",
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
            projectName: "Primary Care",
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
            projectName: "Eye Care",
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
            projectName: "Orthodontics",
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
            projectName: "Oral Surgery",
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
            projectName: "Tooth Extraction",
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

    const targetedproject = portfolioData.find(project => project._id === serDetails);

    return (
        <div>
            <SectionBanner banner={targetedproject.bannerImg} moto={targetedproject.projectName} subTitle="The most powerful theme on earth" />

            {/* Project details that will be dynamic component */}
            <div className='w-[90%] lg:w-5/6 mx-auto mt-10 md:mt-14 grid md:grid-cols-2 items-center gap-6 md:gap-10 text-secondary'>
                <div className='overflow-hidden rounded-lg'>
                    <img src={targetedproject?.projectDoctorImg} alt="" />
                </div>
                <div className='mt-8 flex flex-col gap-5 lg:gap-8'>
                    <h2 className='text-black font-bold text-3xl'>Project Detail</h2>
                    <p className='text-lg'>{targetedproject.projectMainThemeDetails}</p>
                    <div className='flex flex-col gap-5 lg:gap-8 w-[80%] lg:w-1/2'>
                        <span className='grid grid-cols-3 gap-4'>
                            <p className="font-bold text-black">Client</p>
                            <p className='col-span-2'>{targetedproject.clientName}</p>
                        </span>
                        <span className='grid grid-cols-3 gap-4'>
                            <p className="font-bold text-black">Skills</p>
                            <p className='col-span-2'>{targetedproject.skills}</p>
                        </span>
                        <span className='grid grid-cols-3 gap-4'>
                            <p className="font-bold text-black">Manager</p>
                            <p className='col-span-2'>{targetedproject.projectManager}</p>
                        </span>
                    </div>
                </div>
            </div>

            {/* Procedure Counter */}
            <div className='w-[90%] lg:w-5/6 mx-auto lg:mt-24 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 text-secondary'>
                <div className='text-center lg:px-20 px-4 flex items-center order-2 lg:order-1'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-bold text-6xl text-black'>01</h1>
                        <p className='text-primary text-3xl'>Planning</p>
                        <p>{targetedproject.PlanOneDetails}</p>
                    </div>
                </div>
                <div className='lg:p-10 p-2  order-1 lg:order-2'>
                    <img className='rounded-lg overflow-hidden' src={targetedproject.PlanOneImg} alt="" />
                </div>
            </div>

            {/* Procedure Counter */}
            <div className='w-[90%] lg:w-5/6 mx-auto lg:mt-24 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 text-secondary'>
                <div className='lg:p-10 p-2 '>
                    <img className='rounded-lg overflow-hidden' src={targetedproject.PlanTwoImg} alt="" />
                </div>
                <div className='text-center lg:px-20 px-4 flex items-center'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-bold text-6xl text-black'>02</h1>
                        <p className='text-primary text-3xl'>Analyze</p>
                        <p>{targetedproject.PlanTwoDetails}</p>
                    </div>
                </div>
            </div>

            {/* Procedure Counter */}
            <div className='w-[90%] lg:w-5/6 mx-auto lg:mt-24 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 text-secondary'>
                <div className='text-center lg:px-20 px-4 flex items-center order-2 lg:order-1'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-bold text-6xl text-black'>03</h1>
                        <p className='text-primary text-3xl'>Implementation</p>
                        <p>{targetedproject.PlanThreeDetails}</p>
                    </div>
                </div>
                <div className='lg:p-10 p-2  order-1 lg:order-2'>
                    <img className='rounded-lg overflow-hidden' src={targetedproject.PlanThreeImg} alt="" />
                </div>
            </div>

            {/* Summary and client feedback */}
            <div className='w-[90%] lg:w-5/6 mx-auto lg:mt-24 mt-12'>
                <div className='border-t py-10 grid grid-cols-1 lg:grid-cols-4 text-center lg:text-start gap-4 lg:gap-0'>
                    <h1 className='text-primary text-2xl font-bold'>Summary</h1>
                    <p className='lg:col-span-3 text-secondary leading-relaxed'>{targetedproject.projectSummary}</p>
                </div>
                <div className='border-t py-10 grid grid-cols-1 lg:grid-cols-4 text-center lg:text-start gap-4 lg:gap-0'>
                    <h1 className='text-primary text-2xl font-bold'>Client’s Feedback</h1>
                    <p className='lg:col-span-3 text-secondary leading-relaxed'>{targetedproject.ClientsFeedback}</p>
                </div>
            </div>
        </div>
    );
};

export default HomePageServiceDetails;