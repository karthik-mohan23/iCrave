import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const data = useContext(AuthContext);
  const { name } = data;

const navigate = useNavigate()

  return (
    <div className="text-center mt-52 min-h-screen">
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
        <div>
        <h2 className="text-4xl leading-normal mb-3">
          Sign in to see available offers
        </h2>
        <div>
          <button onClick={()=> navigate("/signin")} className="bg-blue-400 text-white px-3 py-1 rounded-md text-xl">Sign in</button>
          </div>
        
        </div>
      )}
    </div>
  );
};
export default Offers;
