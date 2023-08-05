import brandLogo from "../assets/brandLogo.webp";
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
        <div className="flex gap-6">
          <div className="max-w-[3.5rem] ">
            <Link to="/">
              <img src={brandLogo} className="w-full block" alt="logo" />
            </Link>
          </div>
          <div className="flex items-center gap-2 ">
            <h4 className="text-[0.85rem] font-semibold border-b-2 border-black hover:text-orange-500 hover:border-orange-500 duration-150">
              Edappaly
            </h4>
            <div className="flex items-center">
              <p className="text-gray-500 text-[0.8rem]">
                Kochi, Kerala, India
              </p>
              <BsChevronDown className="text-orange-700 ms-2" />
            </div>
          </div>
        </div>
        <ul className="flex items-center gap-16">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "" : "text-gray-400")}>
            Home
          </NavLink>
          <NavLink
            to="/offers"
            className={({ isActive }) => {
              return (
                "flex items-center gap-2 " + (isActive ? "" : "text-gray-400")
              );
            }}>
            <BiSolidOffer size={25} />
            offers
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return (
                "flex items-center gap-2 " + (isActive ? "" : "text-gray-400")
              );
            }}>
            About
          </NavLink>
          {name ? (
            <div className="flex items-center gap-2">
              <FaUserCheck className="text-orange-400" size={20} />
              {name}
            </div>
          ) : (
            <NavLink
              to="/signin"
              className={({ isActive }) => {
                return (
                  "flex items-center gap-2 " + (isActive ? "" : "text-gray-400")
                );
              }}>
              <CgProfile size={25} />
              Sign in
            </NavLink>
          )}
          <NavLink
            to="/cart"
            className={({ isActive }) => {
              return (
                "flex items-center gap-2 " + (isActive ? "" : "text-gray-400")
              );
            }}>
            <div className="relative">
              <BsCart4 size={25} />
              <span className="absolute -top-3 left-3 text-white text-xs font-semibold bg-green-400 py-1 px-2 rounded-full">
                {cartLength}
              </span>
            </div>
            Cart
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
