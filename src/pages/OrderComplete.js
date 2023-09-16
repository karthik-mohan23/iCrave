import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const OrderComplete = () => {
  const userNameData = useContext(AuthContext);
  const { name } = userNameData;
  return (
    <div className="min-h-[80vh] grid place-items-center w-[90%] max-w-4xl mx-auto ">
      <div className="border border-black rounded-lg p-8">
        {name ? (
          <h2 className="text-3xl ">
            Hooray ,<span className=" font-semibold">{name}</span> !! Your order
            has been placed. Our delivery boy will reach you shortly.
          </h2>
        ) : (
          <h2 className="text-3xl">
            Hooray!! Your order has been placed. Our delivery boy will reach you
            shortly.
          </h2>
        )}
      </div>
    </div>
  );
};
export default OrderComplete;
