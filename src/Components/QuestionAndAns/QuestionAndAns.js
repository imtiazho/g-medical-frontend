import React from 'react';
import QAPic from '../../assets/Question.png';
import EachAccordionCard from '../EachAccordionCard/EachAccordionCard';


const QuestionAndAns = () => {
    const data = [
        {
            _id: 1,
            title: "Wellness and prevention",
            mainTheme: "We’ll help you get healthy and stay that way with state-of-the art screening, disease prevention, and lifestyle advice.",
            pointes: ["Sports medicine and exercise counseling", "Diet and nutrition counseling", "Contraception and family planning", "Cardiovascular disease screening"]
        },
        {
            _id: 2,
            title: "Everyday care",
            mainTheme: "We’ll help you get healthy and stay that way with state-of-the art screening, disease prevention, and lifestyle advice.",
            pointes: ["Sports medicine and exercise counseling", "Diet and nutrition counseling", "Contraception and family planning", "Cardiovascular disease screening"]
        },
        {
            _id: 3,
            title: "Chronic conditions",
            mainTheme: "We’ll help you get healthy and stay that way with state-of-the art screening, disease prevention, and lifestyle advice.",
            pointes: ["Sports medicine and exercise counseling", "Diet and nutrition counseling", "Contraception and family planning", "Cardiovascular disease screening"]
        }
    ]
    return (
        <div className='w-[90%] lg:w-5/6 mx-auto xl:mt-24 lg:mt-24 md:mt-18 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-20 items-center'>
            <div className='xl:p-16 lg:p-8 md:p-24'>
                <img src={QAPic} alt="" />
            </div>
            <div>
                <p className='text-accent text-xl font-medium text-center'>We’ll help you manage a range of conditions</p>
                <h1 className='text-black xl:text-4xl lg:text-4xl sm:text-3xl text-3xl md:text-4xl font-bold mt-4 text-center'>We’ll connect you to world-class specialists</h1>

                <div className='mt-8 text-secondary'>
                    {
                        data.map((eachData) => <EachAccordionCard eachData={eachData} key={eachData._id}></EachAccordionCard>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default QuestionAndAns;