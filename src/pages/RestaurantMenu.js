import { useParams } from "react-router-dom";

import ShimmerHome from "../components/ShimmerHome";
import RestaurantMenuDetails from "../components/RestaurantMenuDetails";
import useFetchRestaurantMenu from "../utils/hooks/useFetchRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const restaurantMenu = useFetchRestaurantMenu(resId);
  // console.log(restaurantMenu);
  // console.log(restaurantMenu?.cards[0]?.card?.card?.info);
  const restaurantDetails = restaurantMenu?.cards[0]?.card?.card?.info;
  // console.log(resId);

  if (
    restaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards
      .length === 0
  ) {
    return <ShimmerHome />;
  }

  // const details = restaurantMenu?.data?.cards[0]?.card?.card?.info;
  // console.log(details);

  // console.log(restaurantMenu);
  return (
    <div>
      <RestaurantMenuDetails restaurantDetails={restaurantDetails} />
    </div>
  );
};
export default RestaurantMenu;

/* {restaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards
        .slice(1, 6)
        .map((item) => {
          return (
            <div>
              {/* <h1>{item?.card?.card?.title}</h1> */

/* <RestaurantMenuDetails
                details={item?.cards[0]?.card?.card?.info}
              />
            </div>
          ); */

/* // })} */
