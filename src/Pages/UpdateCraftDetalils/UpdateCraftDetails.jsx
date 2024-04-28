import { Button, Input } from "@material-tailwind/react";
import { useContext } from "react";
import { useForm, } from "react-hook-form"
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateCraftDetails = () => {
    const {user} = useContext(AuthContext);
    const craftItem = useLoaderData();
    console.log(craftItem);

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()
    const onSubmit = updatedCraftItem => {
        
        console.log(updatedCraftItem);
    }

    return (
        <div className="max-w-screen-xl mx-auto mt-28">
            <div className="text-center mb-10">
                <h1 className="text-5xl">Add art & craft</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <Input {...register('item_name', { required: true })} variant="standard" label="Item Name" placeholder="Name" />
                        {errors.item_name && <span className="text-red-700">This field is required</span>}
                    </div>
                    <div>
                        <Input {...register('subcategory_name', { required: true })} variant="standard" label="Subcategory Name" placeholder="Subcategory" />
                        {errors.subcategory_name && <span className="text-red-700">This field is required</span>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <Input {...register('processing_time', { required: true })} variant="standard" label="Processing Time" placeholder="Time" />
                        {errors.processing_time && <span className="text-red-700">This field is required</span>}
                    </div>
                    <div>
                        <Input {...register('customization', { required: true })} variant="standard" label="Customization" placeholder="Customization" />
                        {errors.customization && <span className="text-red-700">This field is required</span>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <Input {...register('rating', { required: true })} variant="standard" label="Rating" placeholder="Rating" />
                        {errors.rating && <span className="text-red-700">This field is required</span>}
                    </div>
                    <div>
                        <Input {...register('price', { required: true })} variant="standard" label="Price" placeholder="Price" />
                        {errors.price && <span className="text-red-700">This field is required</span>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <Input {...register('stock_status', { required: true })} variant="standard" label="Stock" placeholder="Stock" />
                        {errors.stock_status && <span className="text-red-700">This field is required</span>}
                    </div>
                    <div>
                        <Input {...register('photo', { required: true })} variant="standard" label="Photo URL" placeholder="https://" />
                        {errors.photo && <span className="text-red-700">This field is required</span>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <Input {...register('user_name', { required: true })} defaultValue={user?.displayName} variant="standard" label="User Name" placeholder="Name" />
                        {errors.user_name && <span className="text-red-700">This field is required</span>}
                    </div>
                    <div>
                        <Input {...register('user_Email', { required: true })} defaultValue={user?.email} variant="standard" label="User Email" placeholder="Email" />
                        {errors.user_Email && <span className="text-red-700">This field is required</span>}
                    </div>
                </div>
                <div className="">
                    <Input {...register('description', { required: true })} className="" variant="standard" label="Description" placeholder="Description" />
                    {errors.description && <span className="text-red-700">This field is required</span>}
                </div>
                <div>
                    <Button type="submit" className="rounded-none glass bg-[#a55e3f]" fullWidth>Add</Button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCraftDetails;