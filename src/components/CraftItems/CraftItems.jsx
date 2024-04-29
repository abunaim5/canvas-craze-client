import { useLoaderData } from "react-router-dom";
import CraftItemsCard from "../CraftItemsCard/CraftItemsCard";

const CraftItems = () => {
    const craftItems = useLoaderData();

    const handleViewDetails = id => {
        fetch(`https://canvas-craze-server.vercel.app/craftItems/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <div className="text-center mb-16">
                <h1 className="text-4xl font-semibold tracking-widest uppercase text-[#a55e3f] dark:text-[#C8CBD0]">Art & Craft Items</h1>
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