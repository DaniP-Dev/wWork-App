import React from 'react';

const Content = ({ children, className = '' }) => {
    return (
        <div className={`p-4 bg-red-500 ${className} flex flex-col flex-1`} style={{ border: "2px solid white" }}>
            <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
            {children}
        </div>
    );
};

export default Content;
