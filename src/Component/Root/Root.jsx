import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <>
        <div className="max-w-6xl mx-auto" >
        <Header></Header>
        <div className="min-h-[calc(100vh-158px)]">
        <Outlet></Outlet>
        </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Root;