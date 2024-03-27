import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import ListedBook from './Component/ListedBook/ListedBook';
import BookDetails from './Component/BookDetails/BookDetails';
import Wishlist from './Component/Wishlist/Wishlist';
import Readlist from './Component/ReadList/Readlist';
import PageToRead from './Component/PagetoRead/PageToRead';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Gallery from './Component/Gallery/Gallery';
import Contact from './Component/Contact/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path:'/',
        element:<Home></Home>,
        loader : ()=> fetch('/data.json')
      },
      {
        path:'/listedBook',
        element:<ListedBook></ListedBook>,
        loader : ()=> fetch('/data.json'),
        children :[
          {
            path : 'wishlist',
            element : <Wishlist></Wishlist>,
            loader : ()=> fetch('/data.json'),
          },
          {
            path : 'readlist',
            element : <Readlist></Readlist>,
            loader : ()=> fetch('/data.json'),
          },
        ]
      },
      {
        path : '/book/:id',
        element : <BookDetails></BookDetails>,
        loader : ()=> fetch('/data.json')
      },
      {
        path : '/pagetoread',
        element : <PageToRead></PageToRead>,
        loader : ()=> fetch('/data.json')
      },
      {
        path : '/gallery',
        element : <Gallery></Gallery>,
      },
      {
        path : '/contact',
        element : <Contact></Contact>,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
