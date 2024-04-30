// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography,
//     Button,
// } from "@material-tailwind/react";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoPencilSharp } from "react-icons/io5";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const MyArtAndCraftCard = ({ myCraft, handleViewDetails, handleUpdateCraft, handleDelete }) => {
    const { _id, item_name, price, rating, photo, customization, stock_status } = myCraft;

    return (
        <div>
            <div className="shadow-md gap-6">
                <div className="">
                    <img className="h-full" src={photo} alt="" />
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="space-y-1">
                        <p className="text-xl"><span className="font-semibold text-[#a55e3f] dark:text-[#C8CBD0]">Name: </span> <span className="text-[#5C5B5B] dark:text-[#C8CBD0] font-lato text-base">{item_name}</span></p>
                        <p className="text-xl"><span className="font-semibold text-[#a55e3f] dark:text-[#C8CBD0]">Price: </span> <span className="text-[#5C5B5B] dark:text-[#C8CBD0] font-lato text-base">${price}</span></p>
                        <p className="text-xl"><span className="font-semibold text-[#a55e3f] dark:text-[#C8CBD0]">Rating: </span> <span className="text-[#5C5B5B] dark:text-[#C8CBD0] font-lato text-base">{rating}</span></p>
                        <p className="text-xl"><span className="font-semibold text-[#a55e3f] dark:text-[#C8CBD0]">Customization: </span> <span className="text-[#5C5B5B] dark:text-[#C8CBD0] font-lato text-base">{customization}</span></p>
                        <p className="text-xl"><span className="font-semibold text-[#a55e3f] dark:text-[#C8CBD0]">Status: </span> <span className="text-[#5C5B5B] dark:text-[#C8CBD0] font-lato text-base">{stock_status}</span></p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link to={`/details/${_id}`}><button onClick={() => handleViewDetails(_id)} className="btn w-auto max-w-max h-auto min-h-max text-xl text-white p-2 rounded-md bg-[#a55e3f] border-none"><FaEye /></button></Link>
                        <Link to={`/updateCraft/${_id}`}><button onClick={() => handleUpdateCraft(_id)} className="btn w-auto max-w-max h-auto min-h-max text-xl text-white p-2 rounded-md bg-[#3C393B] border-none"><IoPencilSharp /></button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn w-auto max-w-max h-auto min-h-max text-xl text-white p-2 rounded-md bg-[#EA4744] border-none"><MdDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyArtAndCraftCard.propTypes = {
    myCraft: PropTypes.object.isRequired,
    handleViewDetails: PropTypes.func.isRequired,
    handleUpdateCraft: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}


export default MyArtAndCraftCard;