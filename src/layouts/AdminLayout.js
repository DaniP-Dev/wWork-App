import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const AdminLayout = ({ children }) => {
    return (
        <div className="admin-layout">
            <Sidebar />
            <div className="main-content">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default AdminLayout;
