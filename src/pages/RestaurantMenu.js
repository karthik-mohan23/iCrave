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
  // const restaurantAccordionArray2 =
  // restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(restaurantAccordionArray2[2]?.card?.card?.categories);
  // console.log(restaurantAccordionArray1[2]?.card?.card?.itemCards);
  // console.log(restaurantAccordionArray1[1]?.card?.card?.title);
  // console.log(restaurantAccordionArray[1]?.card?.card.categories);
  // console.log(restaurantAccordionArray);
  // console.log(restaurantAccordionArray1[1]?.card?.card?.categories);

  // if (restaurantAccordionArray1?.length === 0) {
  //   return <ShimmerHome />;
  // }

  return (
    <div>
      <div className="w-[90%] max-w-3xl mx-auto">
        <RestaurantMenuDetails restaurantDetails={restaurantDetails} />
        <div>
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
