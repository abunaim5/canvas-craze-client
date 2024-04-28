import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Root = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
        return <h1>Loading.....</h1>
    }

    return (
        <div className="dark:bg-[#0F172A]">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;