import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center min-h-screen">
            <h1 className="text-3xl font-semibold">Sorry You Have Come To The Wrong Route</h1>
            <Link to="/"><button className="btn">Go Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;