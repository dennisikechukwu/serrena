import React from 'react'

const Banner = () => {
  return (
    <div className='xl:mt-24 lg:mt-20 md:mt-16 sm:mt-14 max-sm:mt-11 p-9 flex flex-wrap justify-between items-center bg-blue-700 max-sm:flex-col max-sm:gap-6 max-sm:justify-center'>
        <h1 className='lg:text-4xl text-3xl text-white font-bold'>Sign up to our newsletter <br />& get 20% off</h1>
        <button  className="px-6 py-4 max-md:px-4 max-md:py-2 bg-white hover:bg-blue-700 hover:text-white  transition-all text-blue-700 font-semibold">
                SHOP NOW
            </button>
    </div>
  )
}

export default Banner