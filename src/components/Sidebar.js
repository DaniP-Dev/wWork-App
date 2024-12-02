import React from 'react';
import { useRouter } from 'next/router';

const Sidebar = ({ isOpen }) => {
    const router = useRouter();

    const navigateTo = (path) => {
        router.push(path);
    };

    return (
        <div className={`sidebar bg-blue-600 text-white w-64 fixed h-full z-30 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <nav className="p-4">
                <ul>
                    <li className="mb-4">
                        <button className="hover:underline" onClick={() => navigateTo('/')}>
                            Inicio
                        </button>
                    </li>
                    <li className="mb-4">
                        <button className="hover:underline" onClick={() => navigateTo('/admin/agregarP')}>
                            Agregar Producto
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
