import { useState, useEffect } from "react";
import { RESTAURANT_CARD } from "../utils/links";
import Banner from "../components/Banner";
import RestaurantCards from "../components/RestaurantCards";
import ShimmerHome from "../components/ShimmerHome";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // to set active state of button
  const [activeFilterButton, setActiveFilterButton] = useState(1);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const response = await fetch(RESTAURANT_CARD);
    const restaurants = await response.json();
    console.log(restaurants?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(restaurants?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(restaurants?.data?.cards[2]?.data?.data?.cards);
  };
  // to set button active class
  const handleActiveClass = (num) => {
    setActiveFilterButton(num);
  };

  // show shimmer
  if (filteredRestaurants.length === 0) {
    return <ShimmerHome />;
  }

  const handleFilterRelevant = (restaurants) => {
    setFilteredRestaurants(allRestaurants);
  };
  const handleFilterVeg = (restaurants) => {
    const filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant?.data?.veg
    );
    setFilteredRestaurants(filteredRestaurants);
  };
  const handleFilterDeliveryTime = (restaurants) => {
    const filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant?.data?.deliveryTime <= 30
    );
    setFilteredRestaurants(filteredRestaurants);
  };
  const handleFilterRating = (restaurants) => {
    const filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant?.data?.avgRating >= 4
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  return (
    <div>
      <Banner />
      <section className="w-[90%] max-w-7xl mx-auto py-10">
        <div className="flex items-center justify-between pb-6">
          <h4 className="text-2xl font-semibold">
            {filteredRestaurants.length} restaurants
          </h4>
          <div className="flex items-center border border-gray-400 rounded-full ">
            <input
              type="text"
              placeholder="Restaurant name.."
              className=" rounded-full px-3 py-2 outline-none w-96 text-gray-600"
            />
            <button className="px-3 py-3 border-l border-gray-400">
              <BsSearch />
            </button>
          </div>
          <div className="flex items-center gap-10 text-gray-500">
            <button
              onClick={() => {
                handleFilterRelevant(allRestaurants);
                handleActiveClass(1);
              }}
              className={
                activeFilterButton === 1 ? "border-b-2 border-black" : ""
              }>
              Relevant
            </button>
            <button
              onClick={() => {
                handleFilterVeg(allRestaurants);
                handleActiveClass(2);
              }}
              className={
                activeFilterButton === 2 ? "border-b-2 border-black" : ""
              }>
              Veg
            </button>
            <button
              onClick={() => {
                handleFilterRating(allRestaurants);
                handleActiveClass(3);
              }}
              className={
                activeFilterButton === 3 ? "border-b-2 border-black" : ""
              }>
              Rating
            </button>
            <button
              onClick={() => {
                handleFilterDeliveryTime(allRestaurants);
                handleActiveClass(4);
              }}
              className={
                activeFilterButton === 4 ? "border-b-2 border-black" : ""
              }>
              Delivery Time
            </button>
          </div>
        </div>
        <hr />

        <RestaurantCards filteredRestaurants={filteredRestaurants} />
      </section>
    </div>
  );
};
export default Home;
