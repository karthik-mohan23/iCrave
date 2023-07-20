const RestaurantNotFound = ({ inputValue }) => {
  return (
    <div className="w-[90%] max-w-7xl mx-auto">
      <h3 className="font-semibold text-xl mt-10">
        No match found for "{inputValue}".
      </h3>
    </div>
  );
};
export default RestaurantNotFound;
