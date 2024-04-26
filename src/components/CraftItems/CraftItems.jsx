import CraftItemsCard from "../CraftItemsCard/CraftItemsCard";

const CraftItems = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div>
                <h1 className="text-2xl font-bold">Arts & Craft Items</h1>
            </div>
            <CraftItemsCard></CraftItemsCard>
        </div>
    );
};

export default CraftItems;