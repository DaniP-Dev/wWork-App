import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Content from '@/components/Content';

const AdminLayout = ({children}) => {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar className="flex-1" />
                <Content className="flex-1"> {children} </Content>
            </div>
            <Footer />
        </>
    );
};

export default AdminLayout;