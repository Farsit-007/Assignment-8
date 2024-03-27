import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
    const books = useLoaderData();
    return (
        <div className="my-16">
            <div className="flex justify-center items-center">
                <h1 className="text-[40px] font-bold playfair">Books</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3" >
               {
                 books.map(book => <Book key={books.id} book={book}></Book>)
               }
            </div>
        </div>
    );
};

export default Books;