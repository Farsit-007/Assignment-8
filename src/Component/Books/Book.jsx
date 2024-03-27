/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const{image,bookName,tags,author,category,rating,bookId}=book;

    return (
        <Link to={`/book/${bookId}`} className="p-6 rounded-2xl border-2 mt-8">
            <div className="flex justify-center items-center rounded-md h-60 bg-[#F3F3F3]">
            <img src={image} width={130} alt="" />
            </div>
          
            <div className="mt-6 mb-2">
                <div className="flex gap-3">
                   {
                    tags.map(tag=>
                        <button className="btn workSans bg-[#23BE0A0D] text-[16px] font-medium text-[#23BE0A] rounded-3xl py-0 px-6" key={bookId}>
                             #{tag}
                        </button>
                        )
                   }
                </div>
                <h2 className="text-[20px] pt-3 playfair font-bold tracking-wide">{bookName}</h2>
            </div>
          <div className="border-b-2 border-dashed pb-3">
          <p className="workSans text-[16px] font-medium">By : {author}</p>
          </div>
          <div className="flex justify-between mt-3 ">
            <h2 className="workSans text-[16px] font-medium">{category}</h2>
            <div className="flex gap-2 items-center">
                <span >{rating}</span>
                <FaRegStar />
            </div>
          </div>
        </Link>
    );
};

export default Book;