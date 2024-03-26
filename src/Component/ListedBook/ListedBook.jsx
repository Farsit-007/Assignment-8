
import { Outlet, useLoaderData } from "react-router-dom";
import TabA from "./TabA";
const ListedBook = () => {
    const book = useLoaderData()
    
    return (
        <>
            <section className="mt-5 mb-10 ">
                <div className=" bg-[#1313130D] rounded-xl flex flex-col items-center px-4 text-center md:py-8 md:px-10 lg:px-32 ">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Book
                    </h1>
                </div>
            </section>
            <div> 
                   <TabA></TabA>
            </div>
            <Outlet></Outlet>
        </>
    );
};

export default ListedBook;