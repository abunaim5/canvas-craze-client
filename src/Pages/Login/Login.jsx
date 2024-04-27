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

    const { loginUser, googleLogin } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        const { email, password } = data;
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

    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            Swal.fire({
                title: "Success",
                text: "Signed in successfully with Google",
                icon: "success"
            });
        })
        .catch(error => {
            console.error(error);
        })
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
                            {...register('password', { required: true })}
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
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-700 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-700 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogleLogin} type="button" aria-label="Log in with Google" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                        <button type="button" aria-label="Log in with Twitter" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                            </svg>
                        </button>
                        <button type="button" aria-label="Log in with GitHub" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </button>
                    </div>
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