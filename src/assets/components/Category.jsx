import React from 'react'
import { manc } from '..'
import { womanb } from '..'

const Category = () => {
  return (
    <div className='mt-6 lg:mt-10'>
   <div className='flex justify-between p-9'>
   <h1 className='text-4xl font-bold font-serif'>
        SHOP
      </h1>
      <button  className="px-6 py-4 max-md:px-4 max-md:py-2 bg-blue-700 hover:bg-slate-950 transition ease-in-out text-white">
                SHOP NOW
            </button>
   </div>
   <div className='flex justify-center flex-wrap gap-7 p-9 '>
        <div className='w-[440px] relative'>
            <img src={manc} alt="" className="lg:h-[70vh] max-sm:h-[50vh] sm:h-[56vh] w-full relative " />
            <h1 className='absolute bottom-7 z-20 text-white left-5 text-3xl font-bold'>MEN</h1>
        </div>
        <div className='w-[400px] relative'>
            <img src={womanb} alt="" className="lg:h-[70vh] max-sm:h-[50vh] sm:h-[56vh] w-full relative " />
            <h1 className='absolute bottom-7 z-20 text-white left-5 text-3xl font-bold'>WOMEN</h1>
        </div>
   </div>
    </div>
  )
}

export default Category