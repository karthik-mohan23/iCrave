import { BsSearch } from "react-icons/bs";
const RestaurantFilter = ({
  handleActiveClass,
  activeFilterButton,
  allRestaurants,
}) => {
  return (
    <div className="flex items-center justify-between pb-6">
      <h4 className="text-2xl font-semibold">
        {allRestaurants.length} restaurants
      </h4>
      <div className="flex items-center border border-gray-400 rounded-full ">
        <input
          type="text"
          placeholder="Restaurant name.."
          className=" rounded-full px-3 py-2 outline-none w-96 text-gray-600"
        />
        <button className="px-3 py-3 border-l border-gray-400">
          <BsSearch />
        </button>
      </div>
      <div className="flex items-center gap-10 text-gray-500">
        <button
          onClick={() => handleActiveClass(1)}
          className={activeFilterButton === 1 ? "border-b-2 border-black" : ""}>
          Relevant
        </button>
        <button
          onClick={() => handleActiveClass(2)}
          className={activeFilterButton === 2 ? "border-b-2 border-black" : ""}>
          Veg
        </button>
        <button
          onClick={() => handleActiveClass(3)}
          className={activeFilterButton === 3 ? "border-b-2 border-black" : ""}>
          Rating
        </button>
        <button
          onClick={() => handleActiveClass(4)}
          className={activeFilterButton === 4 ? "border-b-2 border-black" : ""}>
          Delivery Time
        </button>
      </div>
    </div>
  );
};
export default RestaurantFilter;
