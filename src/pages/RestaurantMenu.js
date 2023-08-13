import { useState } from "react";
import { useParams } from "react-router-dom";

import ShimmerHome from "../components/ShimmerHome";
import RestaurantMenuDetails from "../components/RestaurantMenuDetails";
import useFetchRestaurantMenu from "../utils/hooks/useFetchRestaurantMenu";
import RestaurantMenuAccordion from "../components/RestaurantMenuAccordion";

const RestaurantMenu = () => {
  const [isActive, setIsActive] = useState(null);
  const handleOpenAccordion = (id) => {
    // so that we can toggle opening and closing of accordion
    if (isActive !== id) {
      setIsActive(id);
    } else {
      setIsActive(null);
    }
  };
  const { resId } = useParams();

  const restaurantMenu = useFetchRestaurantMenu(resId);
  if (!restaurantMenu) {
    return <ShimmerHome />;
  }
  // restaurant details
  const restaurantDetails = restaurantMenu?.cards[0]?.card?.card?.info;

  // restaurant menu details array
  const restaurantAccordionArray =
    restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  // accordion details
  const restaurantMenuItemsArray = restaurantAccordionArray.filter(
    (details) =>
      details?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(restaurantMenuItemsArray);
  return (
    <div>
      <div className="w-[90%] max-w-3xl mx-auto min-h-screen">
        <RestaurantMenuDetails restaurantDetails={restaurantDetails} />
        <div className="mb-8">
          <hr />
        </div>
        {restaurantMenuItemsArray.map((item, index) => (
          <RestaurantMenuAccordion
            title={item?.card?.card?.title}
            content={item?.card?.card?.itemCards}
            key={index}
            id={index}
            isOpen={isActive === index ? true : false}
            handleOpenAccordion={handleOpenAccordion}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
