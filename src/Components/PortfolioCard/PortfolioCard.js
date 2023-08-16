import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ eachPortfolio }) => {
    const [mousein, setMousein] = useState(false);
    const { serviceImg, _id, portfolioName, projectName } = eachPortfolio;

    return (
        <div onMouseLeave={() => setMousein(false)} onMouseEnter={() => setMousein(parseInt(_id))} className='flex flex-col gap-4'>
            <div className="overflow-hidden relative">
                <img className={`${mousein === parseInt(_id) && "scale-110"} w-full lg:h-[400px] h-[300px] object-cover duration-500`} src={serviceImg} alt="" />
                {mousein === parseInt(_id) && <span className='absolute bg-black opacity-50 w-full h-full bottom-0 rounded duration-500'></span>}
            </div>
            <Link to={`/ser-details/${_id}`} className='text-center px-3 text-black font-medium text-xl'>{projectName}</Link>
        </div>
    );
};

export default PortfolioCard;