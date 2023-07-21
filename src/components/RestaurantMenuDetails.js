const RestaurantMenuDetails = ({ restaurantDetails }) => {
  console.log(restaurantDetails);
  return (
    <section>
      <div className="w-[90%] max-w-4xl mx-auto">
        <p>
          Home/{restaurantDetails?.city}/{restaurantDetails?.name}
        </p>
        <div>
          <div>
            <h2>{restaurantDetails?.name}</h2>
            <p>{restaurantDetails?.cuisines?.join(", ")}</p>
            <p>{restaurantDetails?.locality}</p>
            <p>{restaurantDetails?.sla?.lastMileTravelString}</p>
          </div>
          <div>
            <p>{restaurantDetails?.avgRating}</p>
            <p>{restaurantDetails?.totalRatingsString}</p>
          </div>
        </div>
        <hr />
        <div>
          <p>{restaurantDetails?.sla?.slaString}</p>
          <p>{restaurantDetails?.costForTwoMessage}</p>
        </div>
      </div>
    </section>
  );
};
export default RestaurantMenuDetails;
