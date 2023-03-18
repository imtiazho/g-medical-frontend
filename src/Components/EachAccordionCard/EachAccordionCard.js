import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';


const EachAccordionCard = ({ eachData }) => {
    const { _id, title, mainTheme, pointes } = eachData;
    return (
        <div tabIndex={_id} className="collapse collapse-plus border-b-2 border- bg-base-100">
            <div className="collapse-title text-xl font-bold">
                {title}
            </div>
            <div className="collapse-content">
                <div><p className='hidden'>{_id}</p>
                    <p className='mb-8 text-lg'>{mainTheme}</p>

                    <div>
                        {
                            pointes.map(point =>
                                <p className='flex items-center gap-2'>
                                    <span className='text-accent'><AiOutlineCheckCircle /></span>
                                    <span>
                                        {point}
                                    </span>
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachAccordionCard;