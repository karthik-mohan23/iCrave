import SeeRestaurants from "./buttons/SeeRestaurants";
import EmptyCartImage from "../assets/emptycart.png";

const EmptyCart = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center mt-12">
        <div>
          <img src={EmptyCartImage} alt="empty cart" />
        </div>
        <h2 className="text-xl mb-2">Your cart is empty</h2>
        <p className="text-xs text-gray-600 mb-6">
          You can go to home page to view more restaurants
        </p>
        <SeeRestaurants />
      </div>
    </div>
  );
};
export default EmptyCart;
