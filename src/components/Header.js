import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Header = ({ onToggleSidebar, isAdmin, showMarketplaceButton, showLogoutButton, showLoginButton }) => {
    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-blue-600 text-white p-4 shadow-lg flex justify-between items-center sticky top-0 z-50">
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
                {isAdmin && <button className="hover:underline" onClick={() => router.push('/marketplace')}>Marketplace</button>}
                <a className="hover:underline" href="#">Acerca de</a>
                <a className="hover:underline" href="#">Contacto</a>
            </nav>
            <div className="hidden md:block">
                {showLogoutButton ? (
                    <button className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200">
                        Cerrar Sesión
                    </button>
                ) : showLoginButton ? (
                    <button className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200">
                        Iniciar Sesión
                    </button>
                ) : null}
            </div>
            <div className="md:hidden">
                <button className="text-white" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-blue-600 text-white flex flex-col items-start p-4 z-40">
                        <a className="hover:underline py-2" href="#">Inicio</a>
                        {showMarketplaceButton && <button className="hover:underline py-2" onClick={() => router.push('/marketplace')}>Marketplace</button>}
                        <a className="hover:underline py-2" href="#">Acerca de</a>
                        <a className="hover:underline py-2" href="#">Contacto</a>
                        {isAdmin && <a className="hover:underline py-2" href="#">Admin</a>}
                        {showLogoutButton ? (
                            <button className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200 my-2 w-full">
                                Cerrar Sesión
                            </button>
                        ) : showLoginButton ? (
                            <button className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200 my-2 w-full">
                                Iniciar Sesión
                            </button>
                        ) : null}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
