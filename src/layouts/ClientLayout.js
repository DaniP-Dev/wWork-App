import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ClientLayout = ({ children }) => {
    return (
        <div className="client-layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default ClientLayout;
