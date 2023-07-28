import { useState, useEffect } from "react";
import { RESTAURANT_CARD } from "../utils/links";
import Banner from "../components/Banner";
import RestaurantCards from "../components/RestaurantCards";
import ShimmerHome from "../components/ShimmerHome";
import { BsSearch } from "react-icons/bs";
import RestaurantNotFound from "../components/RestaurantNotFound";
import { Link } from "react-router-dom";

const Home = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // to set active state of button
  const [activeFilterButton, setActiveFilterButton] = useState(1);
  // to read input value
  const [inputValue, setInputValue] = useState("");
  // if there is no restaurant to display
  const [isRestaurant, setIsRestaurant] = useState(true);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const response = await fetch(RESTAURANT_CARD);
    const restaurants = await response.json();
    const restaurantsArray =
      restaurants?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(restaurantsArray);
    setAllRestaurants(restaurantsArray);
    setFilteredRestaurants(restaurantsArray);
  };

  // to set button active class
  const handleActiveClass = (num) => {
    setActiveFilterButton(num);
  };

  // show shimmer
  if (filteredRestaurants?.length === 0) {
    return <ShimmerHome />;
  }

  const handleFilterRelevant = () => {
    setFilteredRestaurants(allRestaurants);
  };
  const handleFilterVeg = (restaurants) => {
    const newRestaurants = restaurants.filter(
      (restaurant) => restaurant?.data?.veg
    );
    setFilteredRestaurants(newRestaurants);
  };
  const handleFilterDeliveryTime = (restaurants) => {
    const newRestaurants = restaurants.filter(
      (restaurant) => restaurant?.data?.deliveryTime <= 30
    );
    setFilteredRestaurants(newRestaurants);
  };
  const handleFilterRating = (restaurants) => {
    const newRestaurants = restaurants.filter(
      (restaurant) => restaurant?.data?.avgRating >= 4
    );
    setFilteredRestaurants(newRestaurants);
  };
  const handleSearchRestaurant = (e, restaurants, inputValue) => {
    e.preventDefault();
    const newRestaurants = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(inputValue.toLowerCase())
    );
    if (newRestaurants?.length === 0) {
      setIsRestaurant(false);
    } else {
      setFilteredRestaurants(newRestaurants);
      setIsRestaurant(true);
    }
  };
  return (
    <div>
      <Banner />
      <section className="w-[90%] max-w-7xl mx-auto py-10">
        {isRestaurant ? (
          <>
            <div className="flex items-center justify-between pb-6">
              <h4 className="text-2xl font-semibold">
                {filteredRestaurants?.length} restaurants
              </h4>
              <form
                onSubmit={(e) =>
                  handleSearchRestaurant(e, allRestaurants, inputValue)
                }
                className="flex items-center border border-gray-400 rounded-full ">
                <input
                  type="text"
                  placeholder="Restaurant name.."
                  className=" rounded-full px-3 py-2 outline-none w-96 text-gray-600"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="px-3 py-3 border-l border-gray-400">
                  <BsSearch />
                </button>
              </form>
              <div className="flex items-center gap-10 text-gray-500">
                <button
                  onClick={() => {
                    handleFilterRelevant();
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
            <div className="py-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredRestaurants?.map((restaurant) => (
                <Link
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}>
                  <RestaurantCards restaurant={restaurant} />
                </Link>
              ))}
            </div>
          </>
        ) : (
          <RestaurantNotFound inputValue={inputValue} />
        )}
      </section>
    </div>
  );
};
export default Home;
