import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const MyArtAndCraftCard = () => {
    const {_id, item_name, description, price, photo} = craftItem;

    return (
        <div>
            <Card className="glass rounded-none">
                <CardHeader shadow={false} floated={false} className="h-96 m-0 rounded-none">
                    <img
                        src={photo}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium text-2xl font-alegreya text-[#a55e3f]">
                            {item_name}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium font-alegreya text-xl text-[#a55e3f]">
                            $ {price}
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75 text-pretty"
                    >
                        {description}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Link to={`/details/${_id}`}><Button
                        onClick={() => handleViewDetails(_id)}
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-white font-lato shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 rounded-none bg-[#a55e3f] glass"
                    >
                        View Details
                    </Button></Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default MyArtAndCraftCard;