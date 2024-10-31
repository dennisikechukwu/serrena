import React from 'react';
import { sellers } from '../constants/data';

const BestSellers = () => {
  return (
    <div className='p-9 xl:mt-24 lg:mt-20 md:mt-16 sm:mt-14 max-sm:mt-11'>
      <h1 className='text-4xl font-bold font-serif'>
        BEST SELLERS
      </h1>
      <div className='p-5 mx-auto flex justify-center flex-wrap gap-5 '>
        {sellers.map((seller) => (
          <div key={seller.title} className='shadow-sm relative rounded-md'>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
