import Banner from "../../components/Banner/Banner";
import CraftItems from "../../components/CraftItems/CraftItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mt-28">
                <CraftItems></CraftItems>
            </div>
        </div>
    );
};

export default Home;