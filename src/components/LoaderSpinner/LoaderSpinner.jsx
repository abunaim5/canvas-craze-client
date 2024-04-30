import { Vortex } from "react-loader-spinner";

const LoaderSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Vortex></Vortex>
        </div>
    );
};

export default LoaderSpinner;