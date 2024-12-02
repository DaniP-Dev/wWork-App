import React from 'react';

const Sidebar = ({ isOpen }) => {
    console.log(isOpen);
    return (
        <div className={`sidebar bg-blue-600 text-white w-64 fixed h-full z-30 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <nav className="p-4">
                <ul>
                    <li className="mb-4"><a className="hover:underline" href="#">Inicio</a></li>
                    <li className="mb-4"><a className="hover:underline" href="#">agregar producto</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
