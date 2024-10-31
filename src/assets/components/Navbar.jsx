import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  function toggleNavbar() {
    setOpen(!open);
  }

  return (
    <nav className="fixed w-full z-20  lg:p-5 md:p-2 sm:p-1 top-0 left-0 bg-white">
      <div className="container px-4 py-2 mx-auto relative flex justify-between items-center">
        <div className="gap-4 items-center hidden lg:flex">
          <Link to="/shop"><h3>SHOP</h3></Link>
          <Link to="/men"><h3>MEN</h3></Link>
          <Link to="/women"><h3>WOMEN</h3></Link>
          <Link to="/kids"><h3>KIDS</h3></Link>
        </div>
        <Link to="/">
          <h1 className="text-2xl font-bold font-serif">SERRENA</h1>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link to="/about"><h3>ABOUT</h3></Link>
          <Link to="/contact"><h3>CONTACT</h3></Link>
          <div className="flex items-center"><SearchIcon /></div>
          <div className="flex items-center"><ShoppingBagIcon /></div>
        </div>

        <div className="lg:hidden flex flex-col">
          <button onClick={toggleNavbar} className="w-[8rem] h-[8rem]">
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className=" right-0 left-[100px] z-20 bg-white w-full p-6 flex flex-col  transition-transform duration-300 ease-in-out ">
          <Link to="/shop"><h3 className="py-2">SHOP</h3></Link>
          <Link to="/men"><h3 className="py-2">MEN</h3></Link>
          <Link to="/women"><h3 className="py-2">WOMEN</h3></Link>
          <Link to="/kids"><h3 className="py-2">KIDS</h3></Link>
          <Link to="/about"><h3 className="py-2">ABOUT</h3></Link>
          <Link to="/contact"><h3 className="py-2">CONTACT</h3></Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
