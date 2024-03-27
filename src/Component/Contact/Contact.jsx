
import { useRef } from 'react';
import bgg from '../../assets/bgg.jpg'
import bg3 from '../../assets/call.png'
import { savedData } from '../../Utility/Utility';
const Contact = () => {
    const nameref = useRef();
    const emailref = useRef();
    const msgref = useRef();
    
    const handleSubmit = e =>{
        e.preventDefault();
        const data = {
            Name : nameref.current.value,
            Email : emailref.current.value,
            Msg : msgref.current.value
        }
        savedData(data);
        nameref.current.value = '';
        emailref.current.value = '';
        msgref.current.value = '';
    }
   
    return (
        <div>
            <section className="py-6">
                <div className="rounded-xl bg-slate-50" style={{ backgroundImage: `url(${bgg})` }}>
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-7xl xl:max-w-3xl text-white playfair">Contact</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white workSans">Connect with us for book recommendations, collaborations, technical support, and more. We welcome your feedback and inquiries. Reach out and lets start a conversation</p>

                    </div>
                </div>
                <img src={bg3} width={400} alt="" className=" mx-auto mb-0 md:mb-10 -mt-[130px] md:-mt-[300px]  rounded-lg lg:-mt-[250px]" />
            </section>
            <section className="py-20 mb-8 rounded-2xl dark:bg-gray-100 dark:text-gray-900">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold playfair">Get in touch</h1>
                        <p className="pt-2 pb-4 workSans">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='workSans'>Hathazari,Chittaagong</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span  className='workSans'>+880-1632216145</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span  className='workSans'>robayatfarsit@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block">
                            <input ref={nameref} type="text" placeholder="Name" className="outline-none block w-full shadow-sm border p-3 rounded-3xl focus:ring focus:ring-opacity-75 focus:dark:ring-[#23BE0A] dark:bg-gray-200" />
                        </label>
                        <label className="block">

                            <input ref={emailref} type="email" placeholder="Email" className="block outline-none w-full shadow-sm border p-3 rounded-3xl focus:ring focus:ring-opacity-75 focus:dark:ring-[#23BE0A] dark:bg-gray-200" />
                        </label>
                        <label className="block">

                            <textarea ref={msgref} placeholder='Message' rows="3" className="block outline-none w-full shadow-sm border p-3 rounded-3xl focus:ring focus:ring-opacity-75 focus:dark:ring-[#23BE0A] dark:bg-gray-200"></textarea>
                        </label>
                        <button className="self-center px-8 py-3 text-lg rounded-2xl focus:ring hover:ring focus:ring-opacity-75 dark:bg-[#23BE0A] dark:text-gray-50 focus:dark:ring-[#23BE0A] hover:dark:ring-[#23BE0A]">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;