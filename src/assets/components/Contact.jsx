import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Banner from "./Banner"
import Footer from "./Footer"


const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className='mt-[10rem] lg:mt-[12rem] flex flex-col items-center justify-center gap-10'>
        <h1 className='lg:text-5xl text-3xl font-bold text-black lg:mr-10'>CONTACT US</h1>
        <div className='flex justify-center items-center gap-3 lg:mr-10'>
          <p className='text-[20px]'>Home</p>
          <ChevronRight className='text-[20px]' />
          <p className='text-[20px] text-blue-600'>About us</p>
        </div>
      </div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 min-h-screen px-4 md:px-8 lg:px-20 bg-white">
      {/* Left Side - Text and Contact Info */}
      <div className="md:w-1/2 text-left  ">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Need any help?<br /> we're here for you.</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">CALL US</h3>
          <p className="text-gray-600">+96746737637</p>
          <p className="text-gray-600">+96746737637</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">MAIL</h3>
          <p className="text-gray-600">hello@serrena.com</p>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 bg-gray-100 p-8 rounded-lg  space-y-4"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-gray-500"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 rounded-md bg-black text-white font-semibold hover:bg-gray-800"
        >
          Sign Up
        </button>
      </form>
    </div>
    <Banner/>
    <Footer/>
    
    </>
  );
};

export default Contact;
