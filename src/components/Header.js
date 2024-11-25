import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4 w-full fixed top-0 z-10">
            <nav className="container mx-auto flex justify-between">
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Inicio</a></li>
                    <li><a href="/marketplace" className="hover:underline">Marketplace</a></li>
                    <li><a href="/about" className="hover:underline">Acerca de</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
