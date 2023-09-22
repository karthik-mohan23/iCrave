import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import SeeRestaurants from "../components/buttons/SeeRestaurants";

const OrderComplete = () => {
  const userNameData = useContext(AuthContext);
  const { name } = userNameData;
  return (
    <div className="min-h-[80vh] grid place-items-center w-[90%] max-w-4xl mx-auto ">
      <div>
        <div className="border border-black rounded-lg p-8 mb-14 md:mb-5">
          {name ? (
            <h2 className="text-3xl ">
              Your order is in good hands,{" "}
              <span className=" font-semibold">{name}</span>! Our delivery
              partners are on their way to get your food to you quickly and
              safely.
            </h2>
          ) : (
            <h2 className="text-3xl">
              Your order is in good hands. Our delivery partners are on their
              way to get your food to you quickly and safely.
            </h2>
          )}
        </div>
        <div className="flex justify-center ">
          <SeeRestaurants />
        </div>
      </div>
    </div>
  );
};
export default OrderComplete;
