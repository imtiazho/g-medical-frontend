import React from 'react';

const TeamOverviewCard = ({ teamOverViewEach }) => {
    const { quantityOrScale, object } = teamOverViewEach;
    return (
        <div className='text-center text-white z-10'>
            <h1 className='text-4xl mb-4'>{quantityOrScale}</h1>
            <p className='text-2xl font-light'>{object}</p>
        </div>
    );
};

export default TeamOverviewCard;