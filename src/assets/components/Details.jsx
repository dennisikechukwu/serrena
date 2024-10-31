import React from 'react'
import Navbar from './Navbar'
import { products } from '../constants/data';
import { useParams } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    console.log("Product ID:", id); // Debugging line
   
    const Brand = products.find(p => p.id === parseInt(id));

    if (!Brand) {
        return <div>Product not found</div>;
    }

  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className="flex flex-col md:flex-row  justify-center gap-5 min-h-screen px-4 md:px-8 lg:px-10 bg-white md:mt-[10rem]">
        <div className='md:w-[50%] '>
            <img src={Brand.imgSrc} alt="" className='lg:w-[85%] h-[500px] sm:w-full'/>
        </div>
        <div className='md:w-[50%]'>
            <h1 className='text-4xl font-semibold font-serif'>{Brand.title}</h1>
            <p className='text-slate-grey mt-6 text-2xl'>{Brand.price}</p>
            <p className='mt-6 font-serif text-xl'>{Brand.description}</p>
            <h2 className='mt-7 text-4xl font-semibold font-serif'>Specification</h2>
            <p className='mt-6 font-serif text-xl'>{Brand.specifications}</p>
            <button  className="px-6 mt-9 py-4 max-md:px-4 max-md:py-2 bg-blue-700 text-white font-semibold">
                <Link to="/">
                SHOP NOW
                </Link>
            </button>
            
        </div>
    </div>
    <Banner/>
    <Footer/>
    </>
  )
}

export default Details