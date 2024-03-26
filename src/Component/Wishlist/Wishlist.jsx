import { IoLocationOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBook2 } from "../../Utility/Utility";
import { GoPeople } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { TbPageBreak } from "react-icons/tb";

const Wishlist = () => {
    const books = useLoaderData();
    const [bookadd2, setBookadd2] = useState([]);
    const [displayData, setDisplayData] = useState([]);

    const handleSort = (option) => {
        if (option === 'Rating') {
            const sortedPage = bookadd2.sort((a, b) => b.rating - a.rating);
            setDisplayData([...sortedPage]);
        } else if (option === 'Number of Page') {
            const sortedPage = bookadd2.sort((a, b) => a.totalPages - b.totalPages);
            setDisplayData([...sortedPage]);
        } else if (option === 'Publisher') {
            const sortedPage = bookadd2.sort((a, b) => a.publisher.localeCompare(b.publisher));
            setDisplayData([...sortedPage]);
        }
    };

    useEffect(() => {
        const bookStoredInlc = getStoredBook2();
        if (bookStoredInlc.length > 0) {
            const addedBook = books.filter(book => bookStoredInlc.includes(book.bookId));
            setBookadd2([...addedBook]);
            setDisplayData([...addedBook]);
        }
    }, [books]);

    return (
        <><div className="relative">
            <div >
                <div className="flex absolute -top-20 left-48 md:left-[500px] justify-center items-center mb-8">
                    <details className="dropdown">
                        <summary className="m-1 btn">Sorted By <IoIosArrowDown /></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                            <li><button onClick={() => handleSort("Rating")}>Rating</button></li>
                            <li><button onClick={() => handleSort("Number of Page")}>Number of Page</button></li>
                            <li><button onClick={() => handleSort("Publisher")}>Publisher</button></li>
                        </ul>
                    </details>
                </div>
            </div>
            {
                displayData.map(book => (
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
