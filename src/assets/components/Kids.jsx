import React from 'react'
import Navbar from './Navbar'
import ChevronRight from '@mui/icons-material/ChevronRight'
import { products } from '../constants/data'
import Banner from './Banner';
import Footer from "./Footer"

const Men = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='mt-[10rem] lg:mt-[12rem] flex flex-col items-center justify-center gap-10'>
        <h1 className='lg:text-5xl text-3xl font-bold text-black lg:mr-10'>KIDS COLLECTION</h1>
        <div className='flex justify-center items-center gap-3 lg:mr-10'>
          <p className='text-[20px]'>Home</p>
          <ChevronRight className='text-[20px]' />
          <p className='text-[20px] text-blue-600'>Shop</p>
        </div>
      </div>
      <div className="container mx-auto p-8 mt-6 lg:mt-10">
        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((men, index) => (
            men.category === "kids" && (
              <div key={index} className='shadow-sm relative rounded-md'>
                <img src={men.imgSrc} alt={men.title} className='w-full h-[360px]' />
                {men.discount && (
                  <span className="absolute top-2 right-2 bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded">
                    {men.discount}
                  </span>
                )}
                <div className="p-4">
                  <h2 className="text-lg font-bold">{men.title}</h2>
                  <p className="text-gray-800 mt-2">{men.price}</p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
      <Banner/>
      <Footer/>
      
    </>
  )
}

export default Men
