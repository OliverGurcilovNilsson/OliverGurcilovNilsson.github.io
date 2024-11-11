import React from 'react';

const WorkCard = ({ title, image }) => {
    return (
        <div className="work-card">
            <img src={image} alt={title} />
        </div>
    );
};

export default WorkCard;