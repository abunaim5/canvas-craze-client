import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    // CardFooter,
    // Button,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const CraftCategories = () => {
    const [categories, setCategories] = useState([])
    const {setCategoryName} = useContext(AuthContext)
    // const [showBtn, setShowBtn] = useState('hidden')

    // const mouseMove = e => {
    //     if (e.type === 'mouseenter') {
    //         setShowBtn('block');
    //     }
    //     if (e.type === 'mouseout') {
    //         setShowBtn('hidden')
    //     }
    //     console.log(e);
    // }

    useEffect(() => {
        fetch('https://canvas-craze-server.vercel.app/categories')
        .then(res => res.json())
        .then(data =>{
            setCategories(data);
            console.log(data);
        })
    }, [])

    return (
        <div>
            <div className="text-center mb-16">
                <h2 className="text-4xl font-semibold">Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    categories.map(category => <div key={category._id} className="max-w-max">
                    <Link to='/categoryItems'>
                        <Card
                            // onMouseEnter={mouseMove}
                            // onMouseOut={mouseMove}
                            onClick={() => setCategoryName(category.subcategory_name)}
                            shadow={false}
                            className={`relative grid h-[40rem] w-full items-end justify-center overflow-hidden text-center rounded-none cursor-pointer`}
                        >
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                style={{backgroundImage: `url(${category.photo})`}}
                                className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
                            >
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                            </CardHeader>
                            <CardBody className="relative py-14 px-6 md:px-12">
                                <Typography
                                    variant="h2"
                                    color="white"
                                    className="mb-6 font-medium leading-[1.5]"
                                >
                                   {category.subcategory_name}
                                </Typography>
                                <Typography variant="small" className="mb-4 text-gray-400">
                                    {category.description}
                                </Typography>
                                {/* <CardFooter className="pt-3">
                                <Button className={`rounded-none bg-[#a55e3f] glass`} size="lg" fullWidth={true}>
                                    see all
                                </Button>
                            </CardFooter> */}
                            </CardBody>
                        </Card>
                    </Link>
                </div>)
                }
            </div>
            

        </div>
    );
};

export default CraftCategories;