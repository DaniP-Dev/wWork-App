import React from 'react';

const Sidebar = () => {
    return (
        <div className='bg-blue-600 text-white w-64 h-screen p-4'>
            <nav>
                <ul>
                    <li className='mb-4'>
                        <a href='#' className='hover:underline'>Inicio</a>
                    </li>
                    <li className='mb-4'>
                        <a href='#' className='hover:underline'>Perfil</a>
                    </li>
                    <li className='mb-4'>
                        <a href='#' className='hover:underline'>Configuración</a>
                    </li>
                    <li className='mb-4'>
                        <a href='#' className='hover:underline'>Ayuda</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
