
import bg from '../../assets/bg.png'
import bg2 from '../../assets/bg2.png'

const Gallery = () => {

    return (
        <div>
            <section className="py-6">
                <div className="rounded-xl bg-slate-50" style={{ backgroundImage: `url(${bg2})` }}>
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-7xl xl:max-w-3xl text-white">Gallery</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">Explore our captivating book gallery, brimming with a vibrant selection of literary treasures, inviting you to discover new favorites and delight in the beauty of book cover art.</p>

                    </div>
                </div>
                <img src={bg} width={800} alt="" className=" mx-auto mb-0 md:mb-12 -mt-[150px] md:-mt-[300px]  rounded-lglg:-mt-40" />
            </section>


            <section className="">

                <h1 className='text-center py-6  text-5xl font-bold leading-none sm:text-5xl'>Books Gallery</h1>

                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="https://i.ibb.co/jgjTZRh/i.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/HqQ1JvP/j.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/g6ZwyWH/g.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/kgz0kDr/f.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/frgTPG8/d.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/hmLWXsT/b.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/zmc8S7D/e.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/sKQNccZ/a.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/2KjnrWy/h.jpg" />
                    <img src="https://i.ibb.co/kgz0kDr/f.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" />
                </div>
            </section>

            <section className="py-6">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
                    <p className="max-w-2xl text-center text-gray-400">Our dedicated team of book enthusiasts is committed to curating a diverse collection of literature, ensuring readers have access to a rich tapestry of stories that inspire, entertain, and enrich lives.</p>
                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                            <p className="text-xl font-semibold leading-tight">B.Robert</p>
                            <p className="text-gray-400">CEO</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                            <p className="text-gray-400">Writer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
                            <p className="text-xl font-semibold leading-tight">P.Charle</p>
                            <p className="text-gray-400">Cover Designer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
                            <p className="text-xl font-semibold leading-tight">Marly Jenkins</p>
                            <p className="text-gray-400">Article Writer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
                            <p className="text-xl font-semibold leading-tight">Routh Paul</p>
                            <p className="text-gray-400">Manager</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
                            <p className="text-xl font-semibold leading-tight">Sevan t.</p>
                            <p className="text-gray-400">Visual Designer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;