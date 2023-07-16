import { Link } from "react-router-dom";
import brandLogo from "../assets/brandLogo.webp";
import { BsChevronDown, BsCartFill } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { TbPokeball } from "react-icons/tb";
const Header = () => {
  return (
    <header className="w-full shadow-md">
      <nav className="w-[90%] max-w-7xl mx-auto py-3 flex items-center justify-between">
        <div className="flex gap-6">
          <div className="max-w-[3.5rem] cursor-pointer">
            <img src={brandLogo} className="w-full block" alt="logo" />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
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
          <li>Home</li>
          <li className="flex items-center gap-2">
            <BiSolidOffer size={25} />
            offers
          </li>
          <li className="flex items-center gap-2">
            <TbPokeball size={25} />
            Help
          </li>
          <li className="flex items-center gap-2">
            <BsCartFill size={25} />
            Cart
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
