import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Content from "@/components/Content";

const ClientLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Content> {children} </Content>
        </>
    );
};

export default ClientLayout;

