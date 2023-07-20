import React from "react";
import { Link } from "react-router-dom";
import { RESTAURANT_IMAGE } from "../utils/links";
import { AiFillStar } from "react-icons/ai";

const RestaurantCards = ({ filteredRestaurants }) => {
  return (
    <div className="py-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filteredRestaurants.map((restaurant) => {
        return (
          <React.Fragment key={restaurant.data.id}>
            <Link to={"/restaurant/" + restaurant.data.id}>
              <div className="outline-none hover:outline hover:outline-gray-200 hover:shadow-xl duration-300 w-[296px] px-5 py-5 cursor-pointer">
                <div className="w-[254px] relative">
                  <img
                    src={RESTAURANT_IMAGE + restaurant.data.cloudinaryImageId}
                    alt="restaurant"
                    className="w-full block mb-[0.875rem]"
                  />
                  <p
                    className={
                      restaurant.data.promoted
                        ? "absolute top-0 left-0 bg-[#3a3c41] text-white text-xs font-semibold px-2 py-1 shadow-2xl"
                        : ""
                    }>
                    {restaurant.data.promoted && "PROMOTED"}
                  </p>
                </div>
                <p className="text-[1rem] font-medium mb-1">
                  {restaurant.data.name}
                </p>
                <p className="text-[#686b78] text-xs font-light mb-[0.875rem]">
                  {restaurant.data.cuisines.join(", ")}
                </p>
                <div className="flex items-center justify-between">
                  <p
                    className={`flex items-center gap-1 text-white  py-1 px-2 text-xs  
                ${
                  restaurant.data.avgRating >= 4
                    ? "bg-[#48c479]"
                    : "bg-[#db7c38]"
                }
            `}>
                    <AiFillStar /> {restaurant.data.avgRating}
                  </p>
                  <div className="text-[#535665] pb-2">.</div>
                  <p className="text-[#535665] text-xs">
                    {restaurant.data.deliveryTime} MINS
                  </p>
                  <div className="text-[#535665] pb-2">.</div>
                  <p className="text-[#535665] text-xs">
                    {restaurant.data.costForTwoString}
                  </p>
                </div>
              </div>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default RestaurantCards;
