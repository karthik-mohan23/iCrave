import { useParams } from "react-router-dom";

import ShimmerHome from "../components/ShimmerHome";
import RestaurantMenuDetails from "../components/RestaurantMenuDetails";
import useFetchRestaurantMenu from "../utils/hooks/useFetchRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useFetchRestaurantMenu(resId);
  // console.log(resId);

  if (
    restaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards
      .length === 0
  ) {
    return <ShimmerHome />;
  }

  const details = restaurantMenu?.data?.cards[0]?.card?.card?.info;
  console.log(details);

  // console.log(restaurantMenu);
  return (
    <div>
      {restaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards
        .slice(1, 6)
        .map((item) => {
          return (
            <div>
              {/* <h1>{item?.card?.card?.title}</h1> */}
              {/* <RestaurantMenuDetails details={item?.data?.cards[0]} /> */}
            </div>
          );
        })}
    </div>
  );
};
export default RestaurantMenu;
