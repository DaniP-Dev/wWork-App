import React from 'react';
import Link from 'next/link';

const Sidebar = ({ isOpen }) => {
    console.log(isOpen);
    return (
        <>
            <div className={`sidebar bg-blue-600 text-white w-64 fixed h-full z-30 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <nav className="p-4">
                    <ul>
                        <li className="mb-4">
                            <Link href="/admin" className="hover:underline">
                                Inicio
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="/admin/agregarP" className="hover:underline">
                                Agregar producto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
