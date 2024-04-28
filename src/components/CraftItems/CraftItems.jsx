import { useLoaderData } from "react-router-dom";
import CraftItemsCard from "../CraftItemsCard/CraftItemsCard";

const CraftItems = () => {
    const craftItems = useLoaderData();

    const handleViewDetails = id => {
        fetch(`http://localhost:5000/craftItems/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <div className="text-center mb-16">
                <h1 className="text-4xl font-semibold">Arts & Craft Items</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    craftItems.map(craftItem => <CraftItemsCard
                        key={craftItem._id}
                        craftItem={craftItem}
                        handleViewDetails={handleViewDetails}
                    ></CraftItemsCard>)
                }
            </div>
        </div>
    );
};

export default CraftItems;