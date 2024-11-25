import React from 'react';

const Card = (props) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold">{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
};

export default Card;