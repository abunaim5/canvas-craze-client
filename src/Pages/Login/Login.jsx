import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const [showPass, setShowPass] = useState(false);

    const {loginUser} = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        const {email, password} = data;
        loginUser(email, password)
        .then(() => {
            Swal.fire({
                title: "Success",
                text: "You are Signed in successfully",
                icon: "success"
              });
        })
        .catch(error => {
            Swal.fire({
                title: "Error",
                text: "Invalid email or password",
                icon: "error"
              });
            console.error(error);
        })
        console.log(data);
    }

    return (
        <div className="max-w-screen-xl mx-auto flex justify-center mt-28">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to login.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            {...register('email', { required: true })}
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-none"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.email && <span className="-mt-4 text-red-700">This field is required</span>}
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            {...register('password', {required: true})}
                            type={showPass ? "text" : "password"}
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-none"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            icon={<button type="button" onClick={() => setShowPass(!showPass)} className="text-lg">{showPass ? <FaEyeSlash /> : <FaEye />}</button>}
                        />
                        {errors.password && <span className="-mt-4 text-red-700">This field is required</span>}
                    </div>
                    <Checkbox
                        className="rounded-none"
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                Remember Me
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button type="submit" className="mt-6 rounded-none" fullWidth>
                        sign in
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Don&apos;t have an account?{" "}
                        <Link to='/signUp' className="font-medium text-gray-900">
                            Sign Up
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default Login;