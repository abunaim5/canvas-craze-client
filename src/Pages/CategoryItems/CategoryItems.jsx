import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CategoryItems = () => {
    const { categoryName } = useContext(AuthContext);
    const [categoryItems, setCategoryItems] = useState([]);
    console.log(categoryItems);
    console.log(categoryName);

    useEffect(() => {
        fetch(`https://canvas-craze-server.vercel.app/categoryItems/${categoryName}`)
            .then(res => res.json())
            .then(data => {
                setCategoryItems(data);
            })
    }, [categoryName])

    const handleViewDetails = id => {
        fetch(`https://canvas-craze-server.vercel.app/craftItems/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="max-w-screen-xl mx-auto mt-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    categoryItems.map(item => <Card key={item._id} className="glass rounded-none">
                        <CardHeader shadow={false} floated={false} className="h-96 m-0 rounded-none">
                            <img
                                src={item.photo}
                                alt="card-image"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium text-2xl font-alegreya text-[#a55e3f]">
                                    {item.item_name}
                                </Typography>
                                <Typography color="blue-gray" className="font-medium font-alegreya text-xl text-[#a55e3f]">
                                    $ {item.price}
                                </Typography>
                            </div>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal opacity-75 text-pretty"
                            >
                                {item.description}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Link to={`/details/${item._id}`}><Button
                                onClick={() => handleViewDetails(item._id)}
                                ripple={false}
                                fullWidth={true}
                                className="bg-blue-gray-900/10 text-white font-lato shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 rounded-none bg-[#a55e3f] glass"
                            >
                                View Details
                            </Button></Link>
                        </CardFooter>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default CategoryItems;