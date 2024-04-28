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
    }, [user]);

    const handleViewDetails = id => {
        fetch(`http://localhost:5000/craftItems/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    };

    const handleUpdateCraft = id => {
        fetch(`http://localhost:5000/craftItems/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className="max-w-screen-xl mx-auto mt-28 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                {
                    myCrafts?.map(myCraft => <MyArtAndCraftCard
                        key={myCraft._id}
                        myCraft={myCraft}
                        handleViewDetails={handleViewDetails}
                        handleUpdateCraft={handleUpdateCraft}
                    ></MyArtAndCraftCard>)
                }
            </div>
        </div>
    );
};

export default MyArtAndCrafts;