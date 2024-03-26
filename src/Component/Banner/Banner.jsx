import { Link } from 'react-router-dom';
import bannerPic from '../../assets/pngwing 1.png';

const Banner = () => {
    return (
            <section className="bg-[#1313130D] mt-3 md:h-[540px] rounded-xl">
                <div className="container flex flex-col justify-center p-10 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
                    <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-[56px] font-bold py-6  sm:text-[56px]">Books to freshen up your bookshelf
                        </h1>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/listedBook' rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded-lg bg-[#23BE0A] text-white ">View The List</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={bannerPic} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
      
    );
};

export default Banner;