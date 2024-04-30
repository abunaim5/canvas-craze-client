import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Banner from "../../components/Banner/Banner";
import CraftItems from "../../components/CraftItems/CraftItems";
import CraftCategories from "../../components/CraftCategories/CraftCategories";
import ArtistSpotlight from "../../components/ArtistSpotlight/ArtistSpotlight";
import Counting from "../../components/Counting/Counting";

const Home = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <h1>Loading.....</h1>
    }

    return (
        <div>
            <Banner></Banner>
            <div className="my-32 space-y-32 max-w-screen-xl mx-auto px-4">
                <CraftItems></CraftItems>
                <ArtistSpotlight></ArtistSpotlight>
                <CraftCategories></CraftCategories>
            </div>
            <div className="">
                <Counting></Counting>
            </div>
        </div>
    );
};

export default Home;