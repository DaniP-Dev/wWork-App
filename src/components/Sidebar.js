import React from 'react';

const Sidebar = () => {
    return (
        <aside className="bg-gray-800 text-white w-64 h-full fixed top-16 left-0"> {/* top-16 para ajustar debajo del Header */}
            <nav className="p-4">
                <ul className="space-y-4">
                    <li><a href="/admin" className="hover:underline">Dashboard</a></li>
                    <li><a href="/admin/reports" className="hover:underline">Reports</a></li>
                    <li><a href="/admin/settings" className="hover:underline">Settings</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
