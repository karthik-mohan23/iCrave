const RestaurantMenuDetails = ({ details }) => {
  console.log(details);
  return (
    <div>
      <h2>{details?.name}</h2>
    </div>
  );
};
export default RestaurantMenuDetails;
