import Lottie from "lottie-react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import error404 from '../../../public/lotties/error404.json'

const ErrorPage = () => {
    return (
        <div className="dark:bg-[#0F172A]">
            <Header></Header>
            <div>
                <Lottie
                    animationData={error404}
                    style={{height: 850}}
                ></Lottie>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;