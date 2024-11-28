import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Content from '@/components/Content';

const AdminLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = (e) => {
        e.stopPropagation(); 
        setIsSidebarOpen(!isSidebarOpen);
        console.log("Toggle Sidebar");
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        console.log("Close Sidebar");
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.sidebar') && isSidebarOpen) {
                closeSidebar();
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [isSidebarOpen]);

    return (
        <>
            <Header onToggleSidebar={toggleSidebar} isAdmin />
            <div className="flex relative">
                <Sidebar isOpen={isSidebarOpen} />
                <Content className="flex-1">{children}</Content>
            </div>
            <Footer />
        </>
    );
};

export default AdminLayout;
