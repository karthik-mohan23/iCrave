const RestaurantNotFound = ({ inputValue }) => {
  return (
    <div className="w-[90%] max-w-7xl mx-auto min-h-[70vh]">
      <h3 className="font-semibold text-xl mt-10 mb-4">
        No match found for "{inputValue}".
      </h3>
    </div>
  );
};
export default RestaurantNotFound;
