import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import MyArtAndCraftCard from "../../components/MyArtAndCraftCard/MyArtAndCraftCard";

const MyArtAndCrafts = () => {
    const { user } = useContext(AuthContext) || {};
    const [myCrafts, setMyCrafts] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:5000/myCrafts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyCrafts(data);
            });
    }, [user])

    return (
        <div>
            <h1>What happend</h1>
            {
                myCrafts?.map(myCraft => <MyArtAndCraftCard key={myCraft._id} myCraft={myCraft}></MyArtAndCraftCard>)
            }
        </div>
    );
};

export default MyArtAndCrafts;