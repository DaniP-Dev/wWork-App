import React from 'react';

const Content = ({ title, children }) => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <div>{children}</div>
        </div>
    );
};

export default Content;