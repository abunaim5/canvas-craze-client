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
                fetch(`http://localhost:5000/craftItems/${id}`, {
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

    return (
        <div className="max-w-screen-xl mx-auto mt-28">
            <div className="flex justify-center">
                <Menu
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                    }}
                >
                    <MenuHandler>
                        <Button className="rounded-none">Filter by Customization</Button>
                    </MenuHandler>
                    <MenuList className="">
                        <MenuItem className="text-center">Custom</MenuItem>
                        <MenuItem className="text-center">Yes</MenuItem>
                        <MenuItem className="text-center">No</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    myCrafts?.map(myCraft => <MyArtAndCraftCard
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