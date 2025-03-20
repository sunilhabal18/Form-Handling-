// Developed by sunil habal, date:-18/03/2025

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 border-b-2  px-14 flex gap-3 justify-between bg-[#e5eff4] fixed top-0 left-0 w-full">
      <div className=" cursor-pointer hover:font-bold text-[20px]">My App</div>

      <div className=" flex gap-15 cursor-pointer text-[20px]">
        <Link to="/" className="hover:font-bold">
          Home
        </Link>
        <Link to="/contact" className="hover:font-bold">
          Contact
        </Link>
        <Link to="/product" className="hover:font-bold">
          Product
        </Link>
        <Link to="/profile" className="hover:font-bold">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
