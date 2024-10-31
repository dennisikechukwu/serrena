import Navbar from "./Navbar"
import Hero from "./Hero"
import Logos from "./Logos"
import BestSellers from "./BestSellers"
import BackgroundVideo from "./BackgroundVideo"
import Drake from "./Drake"
import Category from "./Category"
import Slider from "./Slider"
import Banner from "./Banner"
import Footer from "./Footer"

const Home = () => {
  return (
    <>
    <div className="">
        <Navbar/>
    </div>
    <div className=" pt-8 ">
      <Hero/>
      <Logos/>
      <BestSellers/>
      <BackgroundVideo/>
      <Drake/>
      <Category/>
      <Slider/>
      <Banner/>
      <Footer/>
    </div>
    </>
  )
}

export default Home