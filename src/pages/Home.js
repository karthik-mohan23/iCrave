import { useState } from "react";
import Banner from "../components/Banner";
import RestaurantFilter from "../components/RestaurantFilter";

const Home = () => {
  const [activeFilterButton, setActiveFilterButton] = useState(1);

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
        />
      </section>
    </div>
  );
};
export default Home;
