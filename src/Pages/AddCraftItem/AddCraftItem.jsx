import { Button, Input } from "@material-tailwind/react";
import { useForm, } from "react-hook-form"
import Swal from "sweetalert2";

const AddCraftItem = () => {
    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
      } = useForm()
      const onSubmit = craftItem => {
        fetch('http://localhost:5000/craftItems', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(craftItem)
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
                title: "Success",
                text: "Your craft item has been added.",
                icon: "success"
              });
        })
        console.log(craftItem);
      }

    return (
        <div className="max-w-screen-xl mx-auto mt-28">
            <div className="text-center mb-10">
                <h1 className="text-5xl">Add art & craft</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Input {...register('item_name')} variant="standard" label="Item Name" placeholder="Name" />
                    <Input {...register('subcategory_name')} variant="standard" label="Subcategory Name" placeholder="Subcategory" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Input {...register('processing_time')} variant="standard" label="Processing Time" placeholder="Time" />
                    <Input {...register('customization')} variant="standard" label="Customization" placeholder="Customization" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Input {...register('rating')} variant="standard" label="Rating" placeholder="Rating" />
                    <Input {...register('price')} variant="standard" label="Price" placeholder="Price" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Input {...register('stock_status')} variant="standard" label="Stock" placeholder="Stock" />
                    <Input {...register('photo')} variant="standard" label="Photo URL" placeholder="https://" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Input {...register('user_name')} variant="standard" label="User Name" placeholder="Name" />
                    <Input {...register('user_Email')} variant="standard" label="User Email" placeholder="Email" />
                </div>
                <div className="">
                    <Input {...register('description')} className="" variant="standard" label="Description" placeholder="Description" />
                </div>
                <div>
                    <Button type="submit" className="rounded-none glass bg-purple-600" fullWidth>Add</Button>;
                </div>
            </form>
        </div>
    );
};

export default AddCraftItem;