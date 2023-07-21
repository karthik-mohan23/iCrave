import { useParams } from "react-router-dom";

import ShimmerHome from "../components/ShimmerHome";
import RestaurantMenuDetails from "../components/RestaurantMenuDetails";
import useFetchRestaurantMenu from "../utils/hooks/useFetchRestaurantMenu";
import RestaurantMenuAccordion from "../components/RestaurantMenuAccordion";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantMenu = useFetchRestaurantMenu(resId);
  if (!restaurantMenu) {
    return <ShimmerHome />;
  }
  // restaurant details
  const restaurantDetails = restaurantMenu?.cards[0]?.card?.card?.info;

  // accordion array 1
  const restaurantAccordionArray =
    restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  return (
    <div>
      <div className="w-[90%] max-w-3xl mx-auto">
        <RestaurantMenuDetails restaurantDetails={restaurantDetails} />
        <div className="mb-8">
          <hr />
        </div>
        {restaurantAccordionArray.map((item, index) => (
          <RestaurantMenuAccordion
            title={item?.card?.card?.title}
            content={item?.card?.card?.itemCards}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
