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
    // console.log(data?.data);
    // console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    setRestaurantMenu(data?.data);
  };
  return restaurantMenu;
};
export default useFetchRestaurantMenu;
