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
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
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
            <Header onToggleSidebar={toggleSidebar} isAdmin showMarketplaceButton showLogoutButton showLoginButton />
            <div className="flex flex-col min-h-screen relative">
                <div className="flex flex-1">
                    <Sidebar isOpen={isSidebarOpen} />
                    <Content className="flex-1">{children}</Content>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default AdminLayout;
