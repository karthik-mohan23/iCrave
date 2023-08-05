import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [
      {
        id: 12,
        name: "Biriyani",
        unitPrice: 120,
        quantity: 5,
        totalPrice: 600,
      },
    ],
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
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteItem(state, action) {
      // payload - id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload - id
      const item = state.cart.find((item) => {
        return item.id === action.payload;
      });

      item.quantity++;
      console.log(item.quantity);
      item.totalPrice = item.unitPrice * item.quantity; // Update totalPrice based on new quantity
      console.log(item.totalPrice);
    },
    decreaseItemQuantity(state, action) {
      // payload - id
      console.log(action.payload);
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity--;

      item.totalPrice = item.quantity * item.unitPrice;
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
