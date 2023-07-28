import React from "react";
import { RESTAURANT_IMAGE } from "../utils/links";
import { AiFillStar } from "react-icons/ai";

const RestaurantCards = ({ restaurant }) => {
  console.log(restaurant);
  return (
    <div className="outline-none hover:outline hover:outline-gray-200 hover:shadow-xl duration-300 w-[296px] px-5 py-5 cursor-pointer">
      <div className="w-[254px] h-[169px]  relative mb-2">
        <img
          src={RESTAURANT_IMAGE + restaurant?.info?.cloudinaryImageId}
          alt="restaurant"
          className="w-full h-full object-cover block rounded-lg mb-[0.875rem]"
        />
        {restaurant?.info?.aggregatedDiscountInfoV3 && (
          <>
            <div className="absolute bottom-0 left-0   bg-gradient-to-b from-black-gradient-t to-gray-950 rounded-b-lg   h-20 w-full"></div>
            <p className="absolute bottom-1 left-0  font-extrabold text-white text-xl text-center w-full">
              {restaurant?.info?.aggregatedDiscountInfoV3.header +
                " " +
                restaurant?.info?.aggregatedDiscountInfoV3.subHeader}
            </p>
          </>
        )}
      </div>
      <p className="text-[1.125rem] text-gray-800 font-medium mb-1">
        {restaurant?.info?.name}
      </p>
      <div className="flex items-center gap-1 mb-1">
        <span
          className={` text-white  p-1 text-xs rounded-full 
                ${
                  restaurant?.info?.avgRating >= 4
                    ? "bg-green-700"
                    : "bg-[#db7c38]"
                }
            `}>
          <AiFillStar />
        </span>
        <p>{restaurant?.info?.avgRating}</p>
      </div>
      <p className="text-[#686b78] text-[1rem] font-light mb-1">
        {restaurant?.info?.cuisines.join(", ")}
      </p>
      <p className="text-[#686b78] font-light text-[1rem]">
        {restaurant?.info?.locality}
      </p>
    </div>
  );
};
export default RestaurantCards;
