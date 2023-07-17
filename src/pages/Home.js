import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import RestaurantFilter from "../components/RestaurantFilter";
import { RESTAURANT_IMAGE } from "../utils/links";

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
                className="outline-none hover:outline hover:outline-gray-200 hover:shadow-lg duration-300 w-[296px] px-5 py-5 cursor-pointer">
                <div className="w-[254px]">
                  <img
                    src={RESTAURANT_IMAGE + restaurant.data.cloudinaryImageId}
                    alt="restaurant"
                    className="w-full block"
                  />
                </div>
                <p>{restaurant.data.name}</p>
                <p>{restaurant.data.cuisines.join(", ")}</p>
                <div className="flex items-center justify-between">
                  <p>{restaurant.data.avgRating}</p>
                  <div>•</div>
                  <p>{restaurant.data.deliveryTime}</p>
                  <div>•</div>
                  <p>{restaurant.data.costForTwoString}</p>
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
