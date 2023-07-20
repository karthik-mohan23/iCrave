import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../links";

const useFetchRestaurantMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANT_MENU + id);
    const data = await response.json();
    // console.log(data);
    // console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    setRestaurantMenu(data);
  };
  return restaurantMenu;
};
export default useFetchRestaurantMenu;
