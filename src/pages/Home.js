import { useState, useEffect } from "react";
import { RESTAURANT_CARD } from "../utils/links";
import Banner from "../components/Banner";
import RestaurantCards from "../components/RestaurantCards";
import ShimmerHome from "../components/ShimmerHome";
import { BsSearch } from "react-icons/bs";
import RestaurantNotFound from "../components/RestaurantNotFound";
import { Link } from "react-router-dom";

const Home = () => {
  const [allRestaurants, setAllRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
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
    try {
      const response = await fetch(RESTAURANT_CARD);
      const restaurants = await response.json();
      const restaurantsArray =
        restaurants?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setAllRestaurants(restaurantsArray);
      setFilteredRestaurants(restaurantsArray);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterRelevant = () => {
    setFilteredRestaurants(allRestaurants);
    setActiveFilterButton(1);
  };
  const handleFilterVeg = (restaurants) => {
    const newRestaurants = restaurants.filter(
      (restaurant) => restaurant?.info?.veg
    );
    setActiveFilterButton(2);
    setFilteredRestaurants(newRestaurants);
  };
  const handleFilterDeliveryTime = (restaurants) => {
    const newRestaurants = restaurants.filter(
      (restaurant) => restaurant?.info?.sla?.deliveryTime <= 30
    );
    setActiveFilterButton(4);
    setFilteredRestaurants(newRestaurants);
  };
  const handleFilterRating = (restaurants) => {
    const newRestaurants = restaurants.filter(
      (restaurant) => restaurant?.info?.avgRating >= 4
    );
    setActiveFilterButton(3);
    setFilteredRestaurants(newRestaurants);
  };
  const handleSearchRestaurant = (e, restaurants, inputValue) => {
    e.preventDefault();
    const newRestaurants = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(inputValue.toLowerCase())
    );
    if (newRestaurants?.length === 0) {
      setIsRestaurant(false);
    } else {
      setFilteredRestaurants(newRestaurants);
      setIsRestaurant(true);
    }
  };

  // show shimmer
  if (!filteredRestaurants) {
    return <ShimmerHome />;
  }

  return (
    <div>
      <Banner />
      <section className="w-[90%] max-w-7xl mx-auto py-10">
        {isRestaurant ? (
          <>
            <div className="lg:flex justify-between items-center gap-4">
              <h4 className="text-xl md:text-2xl font-semibold mb-3 lg:mb-0">
                {filteredRestaurants?.length} restaurants
              </h4>
              <form
                onSubmit={(e) =>
                  handleSearchRestaurant(e, allRestaurants, inputValue)
                }
                className="flex items-center border border-gray-400 rounded-full mb-4 lg:mb-2 max-w-[430px]">
                <input
                  type="text"
                  placeholder="Restaurant name.."
                  className=" rounded-full px-3 py-2 outline-none w-96 text-gray-600"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                <button className="border-l border-gray-400 w-9 px-3 py-3">
                  <BsSearch />
                </button>
              </form>
              <div className="w-full max-w-md flex justify-between  text-gray-500 mb-4 lg:mb-0">
                <button
                  onClick={() => {
                    handleFilterRelevant();
                  }}
                  className={
                    activeFilterButton === 1 ? "border-b-2 border-black" : ""
                  }>
                  Relevant
                </button>
                <button
                  onClick={() => {
                    handleFilterVeg(allRestaurants);
                  }}
                  className={
                    activeFilterButton === 2 ? "border-b-2 border-black" : ""
                  }>
                  Veg
                </button>
                <button
                  onClick={() => {
                    handleFilterRating(allRestaurants);
                  }}
                  className={
                    activeFilterButton === 3 ? "border-b-2 border-black" : ""
                  }>
                  Rating
                </button>
                <button
                  onClick={() => {
                    handleFilterDeliveryTime(allRestaurants);
                  }}
                  className={
                    activeFilterButton === 4 ? "border-b-2 border-black" : ""
                  }>
                  Delivery Time
                </button>
              </div>
            </div>
            <hr />
            {/* <div className="py-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> */}
            <div className="mx-auto py-4 sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
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
