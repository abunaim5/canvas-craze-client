import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import PropTypes from 'prop-types';

const CraftItemsCard = ({craftItem}) => {
    const {item_name, description, price, photo} = craftItem;

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
                        <Typography color="blue-gray" className="font-medium">
                            {item_name}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            ${price}
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                    >
                        {description}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 rounded-none"
                    >
                        View Details
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

CraftItemsCard.propTypes = {
    craftItem: PropTypes.object.isRequired,
}

export default CraftItemsCard;