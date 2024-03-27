import { useLoaderData, useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { savedBookDetails,savedBookDetails2 } from '../../Utility/Utility';
const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);

    const handleRead = ()=>{
      savedBookDetails(idInt)
    }
    const handleWish = ()=>{
        savedBookDetails2(idInt)
      }
    return (

        <div className="card my-10 sm:card-side  md:w-[97%] mt-3 mx-auto bg-base-100">
            <div className="flex md:w-[45%] justify-center items-center rounded-xl  bg-[#F3F3F3]">
                <img src={book.image} width={280} alt="" />
            </div>
            <div className="card-body md:w-[55%] p-1 pt-2 pr-5 pl-10">
                <div className='flex flex-col justify-between'>
                    <div className='border-b pt-1'>
                        <h2 className="card-title pb-3 text-[40px] font-bold playfair">{book.bookName}</h2>
                        <p className='workSans text-lg font-medium py-2'>By : {book.author}</p>
                    </div>
                    <div className='border-b'>
                        <h3 className='workSans text-lg font-medium py-2'>{book.category}</h3>
                    </div>
                    <div className='pt-2 text-[16px] workSans'>
                        <p><span className='font-bold'>Review : </span>{book.review}</p>
                    </div>
                    <div className="flex gap-3 my-2 items-center border-b pb-3" >
                        <div>
                            <span className='font-bold'>Tags :</span>
                        </div>
                        <div className="flex gap-3  items-center">
                            {
                                book.tags.map(tag =>
                                    <button className="btn workSans bg-[#23BE0A0D] text-[16px] font-medium text-[#23BE0A] rounded-3xl py-0 px-6" key={book.bookId}>
                                        #{tag}
                                    </button>
                                )
                            }
                        </div>
                    </div>

                    <div>
                        <div className="overflow-x-auto">
                            <table className="table ">
                                <tbody >

                                    <tr className='border-none'>

                                        <td>Number of Pages :</td>
                                        <th>{book.totalPages}</th>

                                    </tr >

                                    <tr className='border-none'>

                                        <td>Publisher :</td>
                                        <th>{book.publisher}</th>

                                    </tr>

                                    <tr className='border-none'>

                                        <td>Year of Publishing :</td>
                                        <th>{book.yearOfPublishing}</th>

                                    </tr>
                                    <tr className='border-none'>

                                        <td>Rating :</td>
                                        <th>{book.rating}</th>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-actions mt-2">
                        <button onClick={handleRead} className="btn font-semibold workSans text-lg rounded-xl px-8 border-2 bg-transparent border-slate-300">Read</button>
                        <button onClick={handleWish} className="btn font-semibold workSans text-lg rounded-xl px-6 text-white bg-[#50B1C9]">Wishlist</button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default BookDetails;
