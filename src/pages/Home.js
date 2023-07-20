import { useState, useEffect } from "react";
import { RESTAURANT_CARD } from "../utils/links";
import Banner from "../components/Banner";
import RestaurantFilter from "../components/RestaurantFilter";
import RestaurantCards from "../components/RestaurantCards";
import ShimmerHome from "../components/ShimmerHome";

const Home = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const response = await fetch(RESTAURANT_CARD);
    const restaurants = await response.json();
    console.log(restaurants?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(restaurants?.data?.cards[2]?.data?.data?.cards);
  };

  if (allRestaurants.length === 0) {
    return <ShimmerHome />;
  }

  return (
    <div>
      <Banner />
      <section className="w-[90%] max-w-7xl mx-auto py-10">
        <RestaurantFilter allRestaurants={allRestaurants} />
        <hr />

        <RestaurantCards allRestaurants={allRestaurants} />
      </section>
    </div>
  );
};
export default Home;
