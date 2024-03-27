import toast from 'react-hot-toast';
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
        localStorage.setItem('book',JSON.stringify(sotredbooks));
        toast.success('Books Added to Read List')
      }
      else
      {
        toast.error('Books Already in Read List')
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
        toast.error('Books Already in Wishlist')
    } else if (existsInReadList) {
        toast.error('Books Already in Read List')
    } else {
        storedBooks.push(id);
        localStorage.setItem('book2', JSON.stringify(storedBooks)); 
        toast.success('Books Added to WishList')
    }
};


//For Form 
const getStoredform =()=>{
    const storedBook = localStorage.getItem('data');
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return []
}
const savedData= (val) =>{
    const sotreddata = getStoredBook();
    sotreddata.push(val);
    localStorage.setItem('data',JSON.stringify(sotreddata));
    toast('Thank you for contacting us', {
        icon: '💬',
      });
}

export {getStoredBook,savedBookDetails,savedBookDetails2,getStoredBook2,getStoredform,savedData}