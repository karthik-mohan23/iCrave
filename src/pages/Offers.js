import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Offers = () => {
  const data = useContext(AuthContext);
  const { name } = data;

  return (
    <div className="px-2 text-center mt-52">
      {name ? (
        <div>
          <h1 className="text-4xl mb-4">
            Hello <span className="font-semibold text-4xl">{name}</span>,
          </h1>
          <p>
            Use{" "}
            <span className="font-medium text-xl text-red-400">NewUser50</span>{" "}
            to receive <span className="font-medium text-xl">50%</span> discount
            on your next order.
          </p>
        </div>
      ) : (
        <h2 className="text-4xl leading-normal">
          Sign in to see available offers
        </h2>
      )}
    </div>
  );
};
export default Offers;
