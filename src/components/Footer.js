import { SiSwiggy } from "react-icons/si";
import { BsApple } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="py-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div>
          <div className="flex items-center">
            <SiSwiggy size={40} className="mb-3" />
            <h2 className="font-extrabold text-2xl">Swiggy</h2>
          </div>

          <p className="px-1">© 2023 BundI Technologies</p>
          <p className="px-1">Pvt. Ltd</p>
        </div>
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
  );
};
export default Footer;
