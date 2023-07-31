import { SiSwiggy } from "react-icons/si";
import { BsApple } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="py-7 bg-gray-900 text-white">
      <div className="w-[90%]  max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div>
          <div className="flex items-center mb-3">
            <SiSwiggy size={40} />
            <h2 className="font-extrabold text-2xl">Swiggy</h2>
          </div>
          <p className="ps-3">© 2023 BundI Technologies</p>
          <p className="ps-3">Pvt. Ltd</p>
        </div>
        <div>
          <div className="flex items-center mb-1">
            <h2 className="font-medium text-xl text-gray-300">Company</h2>
          </div>
          <p className="text-gray-400 mb-1">About</p>
          <p className="text-gray-400 mb-1">Careers</p>
          <p className="text-gray-400 mb-1">Team</p>
        </div>
        <div>
          <div className="flex items-center mb-1">
            <h2 className="font-medium text-xl text-gray-300">Legal</h2>
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
