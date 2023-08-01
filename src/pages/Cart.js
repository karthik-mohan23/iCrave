import { useSelector } from "react-redux";
import { getTotalCartLength } from "../cart/cartSlice";
import EmptyCart from "../components/EmptyCart";


const Cart = () => {

const cartLength = useSelector(getTotalCartLength)


if (!cartLength) return <EmptyCart/>
  return <div className="min-h-screen">Cart</div>;
};
export default Cart;
