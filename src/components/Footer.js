import brandLogo from "../assets/brandLogo.png";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-7 bg-gray-900 text-white">
      <div className="w-[90%]  max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div className="mb-5">
          <div className="flex items-center gap-3 mb-3">
            <img src={brandLogo} alt="brand logo" className="w-12" />
            <h2 className="font-semibold text-3xl">
              <span className="text-2xl font-medium">i</span>Crave
            </h2>
          </div>
          <p className="ps-3">Developed by Karthik Mohan.</p>
          <p className="ps-3 mb-2">© 2023 KM. All Rights Reserved.</p>
          <div className="ps-3 flex max-w-[100px]  justify-between items-center">
            <Link to="https://github.com/karthik-mohan23">
              <AiFillGithub size={25} className="hover:text-orange-600" />
            </Link>
            <Link to="https://www.linkedin.com/in/karthik-mohan-23wd107">
              <AiFillLinkedin size={25} className="hover:text-orange-600" />
            </Link>
            <Link to="https://twitter.com/KarthikMohan23">
              <AiFillTwitterCircle
                size={25}
                className="hover:text-orange-600"
              />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-1">
            <h2 className="font-medium text-xl text-gray-300">Company</h2>
          </div>
          <p className="text-gray-400 mb-1">About</p>
          <p className="text-gray-400 mb-1">Careers</p>
          <p className="text-gray-400 mb-1">Team</p>
        </div>
        <div className="mb-4 md:mb-1">
          <div className="flex items-center mb-1">
            <h2 className="font-medium text-xl text-gray-300 ">Legal</h2>
          </div>
          <p className="text-gray-400 mb-1">Terms & Conditions</p>
          <p className="text-gray-400 mb-1">Cookie Policy</p>
          <p className="text-gray-400 mb-1">Privacy Policy</p>
        </div>

        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-4 border border-white rounded-lg p-3">
            <div className="w-11">
              <img
                src={
                  "https://www.androidheadlines.com/wp-content/uploads/2017/05/Google-Play-Store-New-App-Icon.png"
                }
                alt=""
                className="w-full h-full block"
              />
            </div>
            <div>
              <p>Get it on</p>
              <h3 className="font-semibold text-xl">Google Play</h3>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-white rounded-lg p-3">
            <div>
              <BsApple size={40} className="text-white" />
            </div>
            <div>
              <p>Download on the</p>
              <h3 className="font-semibold text-xl">App Store</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
