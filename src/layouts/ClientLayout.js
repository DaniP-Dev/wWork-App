import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Content from "@/components/Content";

const ClientLayout = ({ children }) => {
    return (
        <>
            <Header showMarketplaceButton={false} showLogoutButton={false} showLoginButton={false} />
            <Content> {children} </Content>
            <Footer />
        </>
    );
};

export default ClientLayout;
