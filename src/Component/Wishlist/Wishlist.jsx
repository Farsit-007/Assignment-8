import { IoLocationOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBook2 } from "../../Utility/Utility";
import { GoPeople } from "react-icons/go";
import { TbPageBreak } from "react-icons/tb";

const Wishlist = () => {
    const books = useLoaderData();
    const [bookadd2, setBookadd2] = useState([]);
    
    useEffect(() => {
        const bookStoredInlc = getStoredBook2();
        if (bookStoredInlc.length > 0) {
            const addedBook = books.filter(book => bookStoredInlc.includes(book.bookId));
            setBookadd2(addedBook);
        }
    }, [books]);

    return (
        <><div className="my-10">
            
            {
                bookadd2.map(book => (
                    <div key={book.bookId}>
                        <div className="card sm:card-side border-2 p-8 md:w-[97%] mt-3 mx-auto bg-base-100">
                            <div className="flex md:w-[35%] justify-center items-center rounded-xl  bg-[#F3F3F3]">
                                <img src={book.image} width={150} alt="" />
                            </div>
                            <div className="card-body md:w-[65%] p-1 pt-2 pr-5 md:pl-10">
                                <div className='flex space-y2 flex-col justify-between'>
                                    <div className=''>
                                        <h2 className="card-title text-3xl">{book.bookName}</h2>
                                        <p className="py-2">By : {book.author}</p>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center gap-10">
                                        <div className="flex gap-3 my-2 items-center " >
                                            <div>
                                                <span className='font-bold'>Tags :</span>
                                            </div>
                                            <div className="flex gap-3  items-center">
                                                {
                                                    book.tags.map(tag => (
                                                        <button className="btn font-medium text-[#23BE0A] rounded-3xl py-0 px-6" key={book.bookId}>
                                                            #{tag}
                                                        </button>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="flex  gap-2 items-center">
                                            <IoLocationOutline size={25} />
                                            <p>Year of Publishing : {book.yearOfPublishing}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 border-b p-3">
                                        <div className="flex items-center gap-4">
                                            <GoPeople size={20} />
                                            <p>Publisher : {book.publisher}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <TbPageBreak size={25} />
                                            <p>Page {book.totalPages}</p>
                                        </div>
                                    </div>
                                    <div className='pt-2 flex gap-5'>
                                        <button className="btn rounded-3xl">Category : {book.category}</button>
                                        <button className="btn rounded-3xl">Rating : {book.rating}</button>
                                        <Link to={`/book/${book.bookId}`}>
                                            <button className="btn rounded-3xl">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                ))
             
            }
               </div>
        </>
    );
};

export default Wishlist;
