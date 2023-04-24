import React from 'react';
import { useParams } from 'react-router-dom';
import doctor6 from '../../assets/6.jpg';
import homeSerPic from '../../assets/servicehome.jpg';
import { useQuery } from '@tanstack/react-query';

const HomePageServiceDetails = () => {
    const { serDetails } = useParams();
    const { portfolioLoading, portfolioError, data: portfolioData } = useQuery({
        queryKey: ['portfolio'],
        queryFn: () =>
            fetch('http://localhost:5000/all-portfolio').then(
                (res) => res.json(),
            ),
    })
    if (portfolioLoading) {
        return <p>Loading...</p>
    }
    if (portfolioError) {
        console.log(portfolioError)
    }

    const targetedproject = portfolioData.find(project => project._id === serDetails);

    return (
        <div>
            <div style={{ background: `url(${targetedproject.bannerImg})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full lg:h-96 xl:h-96 md:h-auto relative'>
                <div className='absolute w-full h-full bg-[#000074] opacity-60 z-1'></div>

                <div className='flex justify-center items-center h-full z-10'>
                    <span>
                        <h1 className='text-center text-6xl mb-4 text-white z-10 relative'>{targetedproject.projectName}</h1>
                        <p className='text-center text-white z-10 relative'>The most powerful theme on earth</p>
                    </span>
                </div>
            </div>

            {/* Project details that will be dynamic component */}
            <div className='w-5/6 mx-auto mt-14 grid grid-cols-2 gap-10 text-secondary'>
                <div className='h-[500px] overflow-hidden rounded-lg'>
                    <img src={doctor6} alt="" />
                </div>
                <div className='mt-8 flex flex-col gap-8'>
                    <h2 className='text-black font-bold text-3xl'>Project Detail</h2>
                    <p className='text-lg'>{targetedproject.projectMainThemeDetails}</p>
                    <div className='flex flex-col gap-8 w-1/2'>
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
            <div className='w-5/6 mx-auto mt-24 grid grid-cols-2 gap-10 text-secondary'>
                <div className='text-center px-20 flex items-center'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-bold text-6xl text-black'>01</h1>
                        <p className='text-primary text-3xl'>Planning</p>
                        <p>{targetedproject.PlanOneDetails}</p>
                    </div>
                </div>
                <div className='p-10'>
                    <img className='rounded-lg overflow-hidden' src={homeSerPic} alt="" />
                </div>
            </div>

            {/* Procedure Counter */}
            <div className='w-5/6 mx-auto mt-24 grid grid-cols-2 gap-10 text-secondary'>
                <div className='p-10'>
                    <img className='rounded-lg overflow-hidden' src={homeSerPic} alt="" />
                </div>
                <div className='text-center px-20 flex items-center'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-bold text-6xl text-black'>02</h1>
                        <p className='text-primary text-3xl'>Analyze</p>
                        <p>{targetedproject.PlanTwoDetails}</p>
                    </div>
                </div>
            </div>

            {/* Procedure Counter */}
            <div className='w-5/6 mx-auto mt-24 grid grid-cols-2 gap-10 text-secondary'>
                <div className='text-center px-20 flex items-center'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-bold text-6xl text-black'>03</h1>
                        <p className='text-primary text-3xl'>Implementation</p>
                        <p>{targetedproject.PlanThreeDetails}</p>
                    </div>
                </div>
                <div className='p-10'>
                    <img className='rounded-lg overflow-hidden' src={homeSerPic} alt="" />
                </div>
            </div>

            {/* Summary and client feedback */}
            <div className='w-5/6 mx-auto mt-24'>
                <div className='border-t py-10 grid grid-cols-4'>
                    <h1 className='text-primary text-2xl font-bold'>Summary</h1>
                    <p className='col-span-3 text-secondary leading-relaxed'>{targetedproject.projectSummary}</p>
                </div>
                <div className='border-t py-10 grid grid-cols-4'>
                    <h1 className='text-primary text-2xl font-bold'>Client’s Feedback</h1>
                    <p className='col-span-3 text-secondary leading-relaxed'>{targetedproject.ClientsFeedback}</p>
                </div>
            </div>
        </div>
    );
};

export default HomePageServiceDetails;