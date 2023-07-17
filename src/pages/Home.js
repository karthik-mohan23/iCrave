import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import RestaurantFilter from "../components/RestaurantFilter";

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
      </section>
    </div>
  );
};
export default Home;
