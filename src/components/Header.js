import React from 'react';

const Header = ({ onToggleSidebar, isAdmin }) => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-lg flex justify-between items-center">
            <div className="flex items-center space-x-4">
                {isAdmin && (
                    <button onClick={onToggleSidebar} className="p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                )}
                <img src="https://via.placeholder.com/50" alt="Logo" className="h-10 w-10" />
                <a className="text-lg font-semibold" href="#">Mi Sitio</a>
            </div>
            <nav className="hidden md:flex space-x-6">
                <a className="hover:underline" href="#">Inicio</a>
                <a className="hover:underline" href="#">Marketplace</a>
                <a className="hover:underline" href="#">Acerca de</a>
                {isAdmin && <a className="hover:underline" href="#">Admin</a>}
                <a className="hover:underline" href="#">Contacto</a>
            </nav>
            <div className="hidden md:block">
                <button className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200">
                    Iniciar Sesión
                </button>
            </div>
            {!isAdmin && (
                <div className="md:hidden">
                    <button className="text-white" onClick={onToggleSidebar}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
