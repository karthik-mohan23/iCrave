import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU } from "../utils/links";
import ShimmerHome from "../components/ShimmerHome";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  const { resId } = useParams();

  // console.log(resId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANT_MENU + resId);
    const data = await response.json();
    // console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    setRestaurantMenu(
      data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards
    );
  };

  if (restaurantMenu.length === 0) {
    return <ShimmerHome />;
  }

  return (
    <div>
      {restaurantMenu.slice(1, 6).map((item) => {
        return <h1>{item?.card?.card?.title}</h1>;
      })}
    </div>
  );
};
export default RestaurantMenu;
