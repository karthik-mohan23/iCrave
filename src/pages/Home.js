import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import RestaurantFilter from "../components/RestaurantFilter";
import { RESTAURANT_IMAGE } from "../utils/links";
import { AiFillStar } from "react-icons/ai";

const Home = () => {
  const [activeFilterButton, setActiveFilterButton] = useState(1);

  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0260688&lng=76.3124753&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurants = await response.json();
    console.log(restaurants.data.cards[2].data.data.cards);
    setAllRestaurants(restaurants.data.cards[2].data.data.cards);
  };

  const handleActiveClass = (num) => {
    setActiveFilterButton(num);
  };

  return (
    <div>
      <Banner />
      <section className="w-[90%] max-w-7xl mx-auto py-10">
        <RestaurantFilter
          activeFilterButton={activeFilterButton}
          handleActiveClass={handleActiveClass}
          allRestaurants={allRestaurants}
        />
        <hr />
        <div className="py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allRestaurants.map((restaurant) => {
            return (
              <div
                key={restaurant.data.id}
                className="outline-none hover:outline hover:outline-gray-200 hover:shadow-xl duration-300 w-[296px] px-5 py-5 cursor-pointer">
                <div className="w-[254px] relative">
                  <img
                    src={RESTAURANT_IMAGE + restaurant.data.cloudinaryImageId}
                    alt="restaurant"
                    className="w-full block mb-[0.875rem]"
                  />
                  <p
                    className={
                      restaurant.data.promoted &&
                      "absolute top-0 left-0 bg-[#3a3c41] text-white text-xs font-semibold px-2 py-1"
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
                    className={`flex items-center gap-1 text-white  p-1 text-xs  
                        ${
                          restaurant.data.avgRating >= 4
                            ? "bg-[#48c479]"
                            : "bg-[#db7c38]"
                        }
                    `}>
                    <AiFillStar /> {restaurant.data.avgRating}
                  </p>
                  <div className="text-[#535665] w-1">•</div>
                  <p className="text-[#535665] text-xs">
                    {restaurant.data.deliveryTime} MINS
                  </p>
                  <div className="text-[#535665] w-1">•</div>
                  <p className="text-[#535665] text-xs">
                    {restaurant.data.costForTwoString}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Home;
