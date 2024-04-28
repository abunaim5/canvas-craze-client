import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Banner from "../../components/Banner/Banner";
import CraftItems from "../../components/CraftItems/CraftItems";

const Home = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
        return <h1>Loading.....</h1>
    }

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