import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem(state, action) {
      // payload - object
      let findItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findItemIndex >= 0) {
        state.cart[findItemIndex].quantity += 1;
        state.cart[findItemIndex].totalPrice =
          state.cart[findItemIndex].unitPrice *
          state.cart[findItemIndex].quantity;
        // toast
        toast.success("Item added to cart", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        state.cart.push(action.payload);
        // toast
        toast.success("Item added to cart", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
    deleteItem(state, action) {
      // payload - id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      // toast
      toast.error("Item removed", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    increaseItemQuantity(state, action) {
      // payload - id
      const item = state.cart.find((item) => {
        return item.id === action.payload;
      });

      item.quantity++;

      item.totalPrice = item.unitPrice * item.quantity; // Update totalPrice based on new quantity
    },
    decreaseItemQuantity(state, action) {
      // payload - id

      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity < 2) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
      item.quantity--;

      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// to reuse

export const getCart = (state) => state.cart.cart;

// to  show cart length
export const getTotalCartLength = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

// to show total price
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
