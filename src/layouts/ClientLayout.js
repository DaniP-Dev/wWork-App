import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Content from "@/components/Content";

const ClientLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 mt-16 p-4">
                <Content title="Bienvenido al Marketplace">
                    {children}
                </Content>
            </main>
        </div>
    );
};

export default ClientLayout;

