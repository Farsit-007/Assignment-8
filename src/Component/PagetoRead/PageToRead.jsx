/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import { getStoredBook } from '../../Utility/Utility';

const PageToRead = () => {
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const books = useLoaderData();
    const [bookadd, setBookadd] = useState([]);

    useEffect(() => {
        const bookStoredInlc = getStoredBook();
        if (bookStoredInlc.length > 0) {
            const addedBook = books.filter(book => bookStoredInlc.includes(book.bookId));
            setBookadd(addedBook);
        }
    }, [books]);

    return (
        <div className='flex items-center w-full justify-center md:h-[550px]'>
            
            <BarChart
                width={bookadd.length * 200} 
                height={500}
                data={bookadd}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" interval={0} angle={-40} textAnchor="end" height={120} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {bookadd.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PageToRead;
