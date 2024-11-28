import React from 'react';

const Content = ({ children }) => {
    return (
        <div className='bg-red-500 flex-1 p-4 overflow-auto'>
            {children}
        </div>
    );
};

export default Content;
