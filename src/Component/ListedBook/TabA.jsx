import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Wishlist from '../Wishlist/Wishlist';
import Readlist from '../ReadList/Readlist';
import { useLoaderData } from 'react-router-dom';

const TabA = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const books = useLoaderData();
     console.log(books)
   

    return (
        <>
           
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Book</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>
                <TabPanel>
                    <Readlist  />
                </TabPanel>
                <TabPanel>
                    <Wishlist />
                </TabPanel>
            </Tabs>
        </>
    );
};

export default TabA;
