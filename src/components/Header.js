import brandLogo from "../assets/brandLogo.png";
import { BsChevronDown, BsCart4 } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaUserCheck } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useSelector } from "react-redux";
import { getTotalCartLength } from "../cart/cartSlice";

const Header = () => {
  const userNameData = useContext(AuthContext);
  const { name } = userNameData;

  // redux store
  const cartLength = useSelector(getTotalCartLength);

  return (
    <header className="w-full shadow-md">
      <nav className="w-[90%] max-w-7xl mx-auto py-2 flex items-center justify-between">
        <div className="hidden md:flex gap-6">
          <div className=" max-w-[3.5rem]  ">
            <Link to="/">
              <img src={brandLogo} className="w-full" alt="logo" />
            </Link>
          </div>
          <div className="flex items-center gap-2 ">
            <h4 className=" text-[0.85rem] font-semibold border-b-2 border-black hover:text-orange-500 hover:border-orange-500 duration-150">
              Edappaly
            </h4>
            <div className="hidden lg:flex items-center">
              <p className="text-gray-500 text-[0.8rem]">
                Kochi, Kerala, India
              </p>
              <BsChevronDown className="text-orange-700 ms-2" />
            </div>
          </div>
        </div>
        <ul className="mx-auto md:mx-0 flex items-center gap-4  lg:gap-12">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "" : "text-gray-400")}>
            <span className="text-[0.825rem] md:text-[1rem] hover:text-orange-400">
              Home
            </span>
          </NavLink>
          <NavLink
            to="/offers"
            className={({ isActive }) => {
              return (
                "flex items-center gap-1 " + (isActive ? "" : "text-gray-400")
              );
            }}>
            <BiSolidOffer className="hidden sm:block text-2xl" />
            <span className="hover:text-orange-400 text-[0.825rem] md:text-[1rem]">
              Offers
            </span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return (
                "flex items-center gap-2 " + (isActive ? "" : "text-gray-400")
              );
            }}>
            <span className="hover:text-orange-400 text-[0.825rem] md:text-[1rem]">
              About
            </span>
          </NavLink>
          {name ? (
            <div className="flex items-center gap-2">
              <FaUserCheck className="text-orange-400 md:text-2xl" />
              {name}
            </div>
          ) : (
            <NavLink
              to="/signin"
              className={({ isActive }) => {
                return (
                  "flex items-center gap-1 " + (isActive ? "" : "text-gray-400")
                );
              }}>
              <CgProfile className="hidden sm:block text-2xl" />
              <span className="hover:text-orange-400 text-[0.825rem] md:text-[1rem]">
                Sign in
              </span>
            </NavLink>
          )}
          <NavLink
            to="/cart"
            className={({ isActive }) => {
              return (
                "flex items-center  gap-2 text-[0.825rem] md:text-[1rem] " +
                (isActive ? "" : "text-gray-400")
              );
            }}>
            <BsCart4 className="hidden sm:block text-2xl" />
            <div className="hover:text-orange-400 text-[0.825rem] md:text-[1rem]">
              <span className="text-white text-xs px-1 font-semibold bg-green-400 hover:bg-orange-400 md:py-1 md:px-2 rounded-md me-1">
                {cartLength}
              </span>
              Cart
            </div>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
