import Content from '@/components/Content';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const AdminLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1 mt-16">
                <Sidebar />
                <main className="flex-1 ml-64 p-4"> {/* ml-64 para ajustar el margen izquierdo */}
                    <Content title="Panel de Administración">
                        {children}
                    </Content>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
