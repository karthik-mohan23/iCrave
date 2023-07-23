import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../links";

const useFetchRestaurantMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANT_MENU + id);
    const data = await response.json();
    setRestaurantMenu(data?.data);
  };
  return restaurantMenu;
};
export default useFetchRestaurantMenu;
