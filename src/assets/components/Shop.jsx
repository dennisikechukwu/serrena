import React, { useState } from 'react';
import Navbar from './Navbar';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { products } from '../constants/data';
import Banner from './Banner';
import Footer from "./Footer"
import { Link } from 'react-router-dom';

const Shop = () => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState('All');

  // Function to handle category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Filter products based on active category
  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className='mt-[10rem] lg:mt-[12rem] flex flex-col items-center justify-center gap-10'>
        <h1 className='lg:text-5xl text-3xl font-bold text-black lg:mr-10'>SHOP</h1>
        <div className='flex justify-center items-center gap-3 lg:mr-10'>
          <p className='text-[20px]'>Home</p>
          <ChevronRight className='text-[20px]' />
          <p className='text-[20px] text-blue-600'>Shop</p>
        </div>
      </div>
      
      <div className="container mx-auto p-8 mt-6 lg:mt-10">
        {/* Categories */}
        <div className="flex space-x-8 mb-8">
          <button onClick={() => handleCategoryClick("All")} className={`text-lg font-bold ${activeCategory === "All" ? "text-black" : "text-gray-500"}`}>
            ALL
          </button>
          <button onClick={() => handleCategoryClick("men")} className={`text-lg font-bold ${activeCategory === "men" ? "text-black" : "text-gray-500"}`}>
            MEN
          </button>
          <button onClick={() => handleCategoryClick("women")} className={`text-lg font-bold ${activeCategory === "women" ? "text-black" : "text-gray-500"}`}>
            WOMEN
          </button>
          <button onClick={() => handleCategoryClick("kids")} className={`text-lg font-bold ${activeCategory === "kids" ? "text-black" : "text-gray-500"}`}>
            KIDS
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((seller) => (
          <div key={seller.title} className='shadow-sm relative rounded-md'>
            <Link to={`/details/${seller.id}`}>
            <img src={seller.imgSrc} alt={seller.title} className='w-full h-[360px]' />
            {seller.discount && (
              <span className="absolute top-2 right-2 bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded">
                {seller.discount}
              </span>
            )}
            <div className="p-4">
             <h2 className="text-lg font-bold ">{seller.title}</h2>
              <p className="text-gray-800 mt-2">{seller.price}</p>
          </div>
          </Link>
          </div>
        ))}
        </div>
      </div>
      <Banner/>
      <Footer/>
    </>
  );
};

export default Shop;
