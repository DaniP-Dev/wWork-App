export async function getServerSideProps(context) {
    return {
        redirect: {
            destination: '/marketplace',
            permanent: false,
        },
    };
}

const HomePage = () => {
    return null;
};

export default HomePage;