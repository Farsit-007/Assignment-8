import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Wishlist from '../Wishlist/Wishlist';
import Readlist from '../ReadList/Readlist';
import { useLoaderData } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { getStoredBook } from '../../Utility/Utility';

const TabA = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const books = useLoaderData();
    const [bookadd, setBookadd] = useState([]);
    const [displayData, setDisplayData] = useState([]);

    const handleSort = (option) => {
        if (option === 'Rating') {
            const sortedPage = bookadd.sort((a, b) => b.rating - a.rating);
            setDisplayData([...sortedPage]);
        } else if (option === 'Number of Page') {
            const sortedPage = bookadd.sort((a, b) => b.totalPages - a.totalPages);
            setDisplayData([...sortedPage]);
        } else if (option === 'Published year') {
            const sortedPage = bookadd.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setDisplayData([...sortedPage]);
        }
    };

    useEffect(() => {
        const bookStoredInlc = getStoredBook();
        if (bookStoredInlc.length > 0) {
            const addedBook = books.filter(book => bookStoredInlc.includes(book.bookId));
            setBookadd([...addedBook]);
            setDisplayData([...addedBook]);
        }
    }, [books]);

    return (
        <>
           <div>
                <div className="flex  justify-center items-center mb-8">
                    <details className="dropdown">
                        <summary className="m-1 btn bg-[#23BE0A] text-white text-lg font-semibold workSans">Sorted By <IoIosArrowDown /></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                            <li><button onClick={() => handleSort("Rating")}>Rating</button></li>
                            <li><button onClick={() => handleSort("Number of Page")}>Number of Page</button></li>
                            <li><button onClick={() => handleSort("Published year")}>Published year</button></li>
                        </ul>
                    </details>
                </div>
            </div>
         <div className='workSans text-[#131313CC] text-lg'>
         <Tabs  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab >Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    <Readlist displayData={displayData} />
                </TabPanel>
                <TabPanel>
                    <Wishlist displayData={displayData}/>
                </TabPanel>
            </Tabs>
         </div>
        </>
    );
};

export default TabA;
