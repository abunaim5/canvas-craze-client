import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import MyArtAndCraftCard from "../../components/MyArtAndCraftCard/MyArtAndCraftCard";
import Swal from "sweetalert2";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";


const MyArtAndCrafts = () => {
    const { user } = useContext(AuthContext) || {};
    const [myCrafts, setMyCrafts] = useState([]);
    const [filteredCrafts, setFilteredCrafts] = useState([]);

    useEffect(() => {
        fetch(`https://canvas-craze-server.vercel.app/myCrafts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyCrafts(data);
                setFilteredCrafts(data);
            });
    }, [user]);

    const handleViewDetails = id => {
        fetch(`https://canvas-craze-server.vercel.app/craftItems/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    const handleUpdateCraft = id => {
        fetch(`https://canvas-craze-server.vercel.app/craftItems/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://canvas-craze-server.vercel.app/craftItems/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remaining = myCrafts.filter(myCraft => myCraft._id !== id)
                        setMyCrafts(remaining);
                    })
            }
        });
    }

    const handleFilterByCustomization = query => {
        if (query === 'Yes') {
            const customizable = myCrafts.filter(myCraft => myCraft.customization === 'Yes')
            setFilteredCrafts(customizable);
        }
        else if(query === 'No'){
            const nonCustomizable = myCrafts.filter(myCraft => myCraft.customization === 'No');
            setFilteredCrafts(nonCustomizable);
        }
        else if(query === 'Custom'){
            setFilteredCrafts(myCrafts);
        }
    }

    return (
        <div className="max-w-screen-xl mx-auto my-28">
            <div className="flex justify-center">
                <Menu
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                    }}
                >
                    <MenuHandler>
                        <Button className="rounded-none glass font-lato bg-[#a55e3f] dark:bg-[#C8CBD0] dark:text-[#000000] tracking-widest">Filter by Customization</Button>
                    </MenuHandler>
                    <MenuList className="rounded-none dark:bg-[#C8CBD0] dark:text-[#000000] font-lato">
                        <MenuItem onClick={() => handleFilterByCustomization('Custom')} className="text-center">Custom</MenuItem>
                        <MenuItem onClick={() => handleFilterByCustomization('Yes')} className="text-center">Yes</MenuItem>
                        <MenuItem onClick={() => handleFilterByCustomization('No')} className="text-center">No</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                {
                    filteredCrafts?.map(myCraft => <MyArtAndCraftCard
                        key={myCraft._id}
                        myCraft={myCraft}
                        handleViewDetails={handleViewDetails}
                        handleUpdateCraft={handleUpdateCraft}
                        handleDelete={handleDelete}
                    ></MyArtAndCraftCard>)
                }
            </div>
        </div>
    );
};

export default MyArtAndCrafts;