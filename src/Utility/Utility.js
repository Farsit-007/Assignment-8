const getStoredBook =()=>{
    const storedBook = localStorage.getItem('book');
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return []
}

const savedBookDetails = (id) =>{
    const sotredbooks = getStoredBook();
    const exists = sotredbooks.find(book => book === id)
    if(!exists){
        sotredbooks.push(id);
        localStorage.setItem('book',JSON.stringify(sotredbooks))
      }
      else
      {
        alert("Already Exists")
      }
}
const getStoredBook2 =()=>{
    const storedBook = localStorage.getItem('book2');
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return []
}
const savedBookDetails2 = (id) => {
    const storedBooks = getStoredBook2();
    const existsInWishlist = storedBooks.find(book => book === id);
    const existsInReadList = getStoredBook().find(book => book === id);

    if (existsInWishlist) {
        alert("Already in Wishlist");
    } else if (existsInReadList) {
        alert("Already in Read List");
    } else {
        storedBooks.push(id);
        localStorage.setItem('book2', JSON.stringify(storedBooks)); 
    }
};


export {getStoredBook,savedBookDetails,savedBookDetails2,getStoredBook2}