import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    const {createUser, updateUserInfo} = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm()

      const onSubmit = data => {
        const {name, email, photo, password} = data;
        if(!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)){
            return Swal.fire({
                title: "Error",
                text: "Password must have at least one uppercase and one lowercase letter",
                icon: "error"
              });
        }

        createUser(email, password)
        .then(user => {
            updateUserInfo(name, photo)
            .then(()=>{
                Swal.fire({
                    title: "Success",
                    text: "Account created successfully",
                    icon: "success"
                  });
                console.log('Profile updated')
            })
            .catch(error => {
                console.error(error);
            })
            console.log(user.user);
        })
        .catch(error => {
            console.error(error);
        })
        console.log(data)
      }

    return (
        <div className="max-w-screen-xl mx-auto flex justify-center my-28">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" className="text-[#a55e3f] uppercase font-alegreya tracking-widest dark:text-[#C8CBD0]">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal dark:text-[#C8CBD0] font-lato">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3 font-lato dark:text-[#C8CBD0]">
                            Your Name
                        </Typography>
                        <Input
                            {...register('name', {required: true})}
                            size="lg"
                            placeholder="Name"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-none"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.name && <span className="-mt-4 text-red-700">This field is required</span>}
                        <Typography variant="h6" color="blue-gray" className="-mb-3 font-lato dark:text-[#C8CBD0]">
                            Your Email
                        </Typography>
                        <Input
                            {...register('email', {required: true})}
                            type="email"
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-[#a55e3f] dark:focus:!border-t-[#C8CBD0] dark:text-[#C8CBD0] rounded-none"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.email && <span className="-mt-4 text-red-700">This field is required</span>}
                        <Typography variant="h6" color="blue-gray" className="-mb-3 font-lato dark:text-[#C8CBD0]">
                            Photo URL
                        </Typography>
                        <Input
                            {...register('photo', {required: true})}
                            size="lg"
                            placeholder="https://"
                            className=" !border-t-blue-gray-200 focus:!border-t-[#a55e3f] dark:focus:!border-t-[#C8CBD0] dark:text-[#C8CBD0] rounded-none"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.photo && <span className="-mt-4 text-red-700">This field is required</span>}
                        <Typography variant="h6" color="blue-gray" className="-mb-3 font-lato dark:text-[#C8CBD0]">
                            Password
                        </Typography>
                        <Input
                            {...register('password', {required: "This field is required", minLength: {
                                value: 6,
                                message: 'Password should be 6 character or more'
                            }})}
                            type={showPass ? "text" : "password"}
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-[#a55e3f] dark:focus:!border-t-[#C8CBD0] dark:text-[#C8CBD0] rounded-none"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            icon={<button type="button" onClick={() => setShowPass(!showPass)} className="text-lg dark:text-[#C8CBD0]">{showPass ? <FaEyeSlash /> : <FaEye />}</button>}
                        />
                        {errors.password && <span className="-mt-4 text-red-700">{errors.password?.message}</span>}
                    </div>
                    <Checkbox
                        className="rounded-none"
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal font-lato dark:text-[#C8CBD0]"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900 dark:hover:text-[#C8CBD0]"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button type="submit" className="mt-6 rounded-none glass font-lato bg-[#a55e3f] dark:bg-[#C8CBD0]  dark:text-[#000000] tracking-widest" fullWidth>
                        sign up
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal font-lato dark:text-[#C8CBD0]">
                        Already have an account?{" "}
                        <Link to='/login' className="font-medium text-gray-900 font-lato dark:text-[#C8CBD0]">
                            Sign In
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default SignUp;