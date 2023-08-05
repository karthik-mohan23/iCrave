import { useNavigate } from "react-router-dom";

const SeeRestaurants = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="bg-orange-500 text-white px-5 py-2 font-medium">
      SEE RESTAURANTS NEAR YOU
    </button>
  );
};
export default SeeRestaurants;
