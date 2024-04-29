import { Button, Card, Typography } from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";

const TABLE_HEAD = ["", "Name", "Subcategory", "Status", "Price", ""];

// const TABLE_ROWS = [
//     {
//         name: "John Michael",
//         job: "Manager",
//         date: "23/04/18",
//     },
//     {
//         name: "Alexa Liras",
//         job: "Developer",
//         date: "23/04/18",
//     },
//     {
//         name: "Laurent Perrier",
//         job: "Executive",
//         date: "19/09/17",
//     },
//     {
//         name: "Michael Levi",
//         job: "Developer",
//         date: "24/12/08",
//     },
//     {
//         name: "Richard Gran",
//         job: "Manager",
//         date: "04/10/21",
//     },
// ];

const AllArtAndCraft = () => {
    const artAndCrafts = useLoaderData();

    const handleViewDetails = id => {
        fetch(`https://canvas-craze-server.vercel.app/craftItems/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className="max-w-screen-xl mx-auto my-28">
            <Card className="h-full w-full overflow-auto rounded-none bg-transparent">
                <table className="w-full min-w-max table-auto text-left bg-transparent">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, idx) => (
                                <th key={idx} className="border-b border-blue-gray-100 font-lato dark:text-[#C8CBD0] p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70 font-lato dark:text-[#C8CBD0]"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {artAndCrafts.map(({ _id, item_name, subcategory_name, stock_status, price }, index) => (
                            <tr key={_id} className="even:bg-blue-gray-50/50 dark:even:bg-transparent">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal font-lato dark:text-[#C8CBD0]">
                                        {index + 1}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal font-lato dark:text-[#C8CBD0]">
                                        {item_name}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal font-lato dark:text-[#C8CBD0]">
                                        {subcategory_name}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal font-lato dark:text-[#C8CBD0]">
                                        {stock_status}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal font-lato dark:text-[#C8CBD0]">
                                        ${price}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Link to={`/details/${_id}`}><Button onClick={() => handleViewDetails(_id)} className="rounded-none font-lato tracking-widest bg-[#a55e3f] dark:bg-[#C8CBD0] dark:text-[#000000] glass" fullWidth>Details</Button></Link>
                                    {/* <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                        
                                    </Typography> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default AllArtAndCraft;