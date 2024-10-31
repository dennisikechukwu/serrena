import React from 'react'
import Navbar from './Navbar'
import ChevronRight from '@mui/icons-material/ChevronRight'
import Abouts from "../images/about.png"
import Abouta from "../images/abouta.jpg"
import Aboutb from "../images/aboutb.jpg"
import Aboutc from "../images/aboutc.jpg"
import Aboutd from "../images/aboutd.jpg"
import Logos from './Logos'
import Banner from './Banner'
import Footer from './Footer'


const About = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className='mt-[10rem] lg:mt-[12rem] flex flex-col items-center justify-center gap-10'>
        <h1 className='lg:text-5xl text-3xl font-bold text-black lg:mr-10'>ABOUT US</h1>
        <div className='flex justify-center items-center gap-3 lg:mr-10'>
          <p className='text-[20px]'>Home</p>
          <ChevronRight className='text-[20px]' />
          <p className='text-[20px] text-blue-600'>About us</p>
        </div>
      </div>
      <div className="relative w-full xs:h-[50vh] sm:h-[50vh] lg:h-[70vh] mt-6 lg:mt-[4rem]">
        <img src={Abouts} alt="" className='w-full h-full object-cover'/>
      </div>
      <div className='mt-6 lg:mt-[5rem] container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div className='flex flex-col items-center'>
            <h3 className='text-2xl font-bold'>SHOP ONLINE</h3>
            <p className='text-slate-600'>Explore a vast collection <br />
            of premium clothing <br />
            from the comfort of your <br />
            home.</p>
        </div>
        <div className='flex flex-col items-center'>
        <h3 className='text-2xl font-bold'>FREE SHIPPING</h3>
        <p className='text-slate-600'>
          Enjoy the convenience of <br />
           free shipping on all <br />
           orders, nationwide.
        </p>
        </div>
        <div className='flex flex-col items-center'>
        <h3 className='text-2xl font-bold'>RETURN POLICY</h3>
        <p className='text-slate-600'>
        Your satisfaction is our <br />
        priority. Return any <br />
        product you are not <br />
        satisfied with.
            
        </p>
        </div>
        <div className='flex flex-col items-center'>
        <h3 className='text-2xl font-bold'>PAYMENT METHODS</h3>
        <p className='text-slate-600'>
        Choose from a variety of <br />
        secure payment <br />
         methods to complete <br />
          your transactions with <br />
           ease.
        </p>
        </div>

      </div>
      <div className='mt-[3rem] md:mt-[7rem] max-w-[900px] mx-auto flex justify-center items-center'>
        <p className='text-center md text-3xl sm:text-xl max-sm:text-xl font-semibold'>At the heart of Serrena lies a distinctive philosophy that transcends trends and embraces the essence of enduring style. Our collections are a harmonious blend of sophistication, versatility, and modernity, carefully curated to enhance your personal expression. We believe that fashion should empower, inspire, and reflect the unique narrative of every individual. Serrena is not just about clothing; it's about embracing a lifestyle that embraces the artistry of fashion and the poetry of self-expression.


</p>

      </div>
      <div className='mt-11 lg:mt-[7rem]'>
        <Logos/>
      </div>
      <div className='p-10 mt-11 lg:mt-[7rem]'>
        <h1 className='font-bold text-3xl uppercse'>FOLLOW @SERRENA</h1>
      </div>
        <div className='flex justify-center items-center flex-wrap mt-11 lg:mt-[5rem] gap-3'>
          <a href="www.instagram.com"><img src={Abouta} alt="" className='w-[290px] h-[330px]'/></a>
          <a href="www.instagram.com"><img src={Aboutb} alt="" className='w-[290px] h-[330px]'/></a>
          <a href="www.instagram.com"><img src={Aboutc} alt="" className='w-[290px] h-[330px]'/></a>
          <a href="www.instagram.com"><img src={Aboutd} alt="" className='w-[290px] h-[330px]'/></a>
        </div>
        <Banner/>
        <Footer/>
    </>
  )
}

export default About