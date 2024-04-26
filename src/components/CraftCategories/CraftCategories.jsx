import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    CardFooter,
    Button,
} from "@material-tailwind/react";

const CraftCategories = () => {
    return (
        <div>
            <Card
                shadow={false}
                className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center rounded-none"
            >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
                >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                        variant="h2"
                        color="white"
                        className="mb-6 font-medium leading-[1.5]"
                    >
                        Landscape Painting
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-gray-400">
                        Tania Andrew
                    </Typography>
                    <CardFooter className="pt-3">
                        <Button className="rounded-none  glass" size="lg" fullWidth={true}>
                            View Details
                        </Button>
                    </CardFooter>
                </CardBody>
            </Card>
        </div>
    );
};

export default CraftCategories;