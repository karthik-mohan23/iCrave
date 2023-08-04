import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseItemQuantity,
  deleteItem,
  getCart,
  getTotalCartLength,
  increaseItemQuantity,
} from "../cart/cartSlice";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const cartLength = useSelector(getTotalCartLength);

  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }
  function handleDeleteItem(id) {
    dispatch(deleteItem(id));
  }

  if (!cartLength) return <EmptyCart />;
  return (
    <div className="min-h-screen">
      <div className="w-[90%] max-w-7xl mx-auto flex justify-evenly flex-wrap-reverse lg:flex-nowrap py-10">
        <div>
          <div className="grid grid-cols-4 mb-10 max-w-3xl">
            <h2>Item name</h2>
            <p className="justify-self-center">Quantity</p>
            <p className="justify-self-center">Price</p>
            <button
              onClick={handleClearCart}
              className="justify-self-end bg-red-500 text-white px-3 py-1 rounded-full">
              CLEAR ALL
            </button>
          </div>
          {cart.map((item) => {
            return (
              <div key={item.id} className="grid grid-cols-4 my-4 max-w-3xl">
                <h2>{item.name}</h2>
                <p className="justify-self-center self-center">
                  {item.quantity}
                </p>
                <p className="justify-self-center self-center">
                  {item.totalPrice}
                </p>
                <div
                  onClick={() => {
                    dispatch(decreaseItemQuantity(item.id));
                  }}
                  className="flex gap-4">
                  <button className="px-3 text-xl   bg-yellow-300 rounded-full">
                    -
                  </button>
                  <button
                    onClick={() => {
                      dispatch(increaseItemQuantity(item.id));
                    }}
                    className="px-3 text-xl   bg-yellow-300 rounded-full">
                    +
                  </button>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="text-xs justify-self-end self-center bg-yellow-300 px-4 py-2 rounded-full tracking-wide">
                    REMOVE
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col border border-black px-4 py-6 mb-10">
          <div>
            <h3 className="mb-3">Bill Details</h3>
            <div className="flex justify-between items-center mb-2">
              <p>Total Amount</p>
              <p>$234</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Delivery fee</p>
              <p>$234</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Platform fee</p>
              <p>$234</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="w-3/4">GST and Restaurant Charges</p>
              <p>$234</p>
            </div>
          </div>
          <div className="h-[2px] bg-black"></div>
          <div className="flex justify-between items-center py-4">
            <h3>To Pay</h3>
            <p>$234</p>
          </div>
          <button className="bg-black text-white py-1">Checkout</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
