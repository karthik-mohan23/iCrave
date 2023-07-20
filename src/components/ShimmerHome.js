import { ImSpinner2 } from "react-icons/im";
const ShimmerHome = () => {
  return (
    <div className="w-full">
      <div className="h-[350px] bg-gray-600 w-full flex flex-col items-center justify-center">
        <div>
          <ImSpinner2 size={60} className="text-gray-200 mb-6" />
        </div>
        <h2 className="text-gray-300 md:text-3xl">
          Looking for great food near you...
        </h2>
      </div>
      <div className="w-[90%] max-w-7xl mx-auto py-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <div>
              <div
                key={index}
                className="w-[296px] h-36 bg-gray-300 mb-2"></div>
              <div className="w-2/3 h-5 bg-slate-300 mb-2"></div>
              <div className="w-1/3 h-3 bg-slate-300"></div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ShimmerHome;
