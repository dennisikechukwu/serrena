import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <div className="hero-section max-lg:h-[65vh] lg:h-[100vh] relative">
        <div className="absolute bottom-12 left-7 gap-9 flex flex-col ">
            <h1 className="lg:text-7xl md:text-5xl sm:text-4xl max-sm:text-4xl text-white font-bold font-serif">
              WEAR CLOTHS  <br />
              THAT MATTER
            </h1>
            <div>
              <Link to="shop">
              <button  className="px-6 py-4 max-md:px-4 max-md:py-2 lg:mt-3 xl:mt-6 md:mt-4 sm:mt-3 max-sm:mt-2 bg-blue-700 hover:bg-slate-950 transition text-white">
                SHOP NOW
            </button>
              </Link>
            
            </div>
            
        </div>     

  </div>
  )
}

export default Hero