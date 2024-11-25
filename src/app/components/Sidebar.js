import React from 'react';

const Sidebar = () => {
    return (
        <aside className="bg-gray-700 w-64 h-full">
            <ul className="p-4 text-white">
                <li><a href="/dashboard/admin" className="block py-2">Dashboard Admin</a></li>
                <li><a href="/dashboard/cliente" className="block py-2">Dashboard Cliente</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;