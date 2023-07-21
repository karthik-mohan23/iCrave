import { AiFillStar } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
const RestaurantMenuDetails = ({ restaurantDetails }) => {
  return (
    <div>
      <p className="text-[0.775rem] text-gray-500 pt-8">
        Home/
        {restaurantDetails?.city}/
        <span className="text-black">{restaurantDetails?.name}</span>
      </p>
      <div className="my-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            {restaurantDetails?.name}
          </h2>
          <p className="text-gray-500 text-[0.8rem]">
            {restaurantDetails?.cuisines?.join(", ")}
          </p>
          <p className="text-gray-500 text-[0.8rem]">
            {restaurantDetails?.locality},{" "}
            {restaurantDetails?.sla?.lastMileTravelString}
          </p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 border border-gray-300 rounded-lg px-2 py-3">
          <p className="flex items-center text-green-600">
            <AiFillStar />
            <span className="font-bold text-[0.9rem]">
              {restaurantDetails?.avgRating}
            </span>
          </p>
          <div className="bg-gray-300 h-[0.5px] w-[90%]"></div>
          <p className="text-gray-400 text-[0.65rem] font-bold">
            {restaurantDetails?.totalRatingsString}
          </p>
        </div>
      </div>
      <hr />
      <div className="my-6 flex items-center gap-6">
        <p className="flex items-center gap-2">
          <span className="text-gray-600">
            <BiSolidTimeFive size={24} />
          </span>
          <span className="font-bold text-[0.875rem]">
            {restaurantDetails?.sla?.slaString}
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-gray-600">
            <HiOutlineCurrencyRupee size={24} />
          </span>
          <span className="font-bold text-[0.875rem]">
            {restaurantDetails?.costForTwoMessage}
          </span>
        </p>
      </div>
    </div>
  );
};
export default RestaurantMenuDetails;
