import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState : {
        cart: [
            {
                id: 12,
                name:"Biriyani",
                unitPrice:10000 / 100,
                quantity:2,
                totalPrice: 200
            }
           
        ]
    },
    reducers : {
        addItem(state,action){
            // payload - object
            state.cart.push(action.payload)
        },
        deleteItem(state,action){
              // payload - id
             state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        increaseItemQuantity(state,action){
            // payload - id
            const item = state.cart.find(item => item.id === action.payload)
            item.quantity++;
            item.totalPrice = item.quantity + (item.price / 100)
        },
        decreaseItemQuantity(state,action){
            // payload - id
            const item = state.cart.find(item => item.id === action.payload)
            item.quantity--;
            item.totalPrice = item.quantity + (item.price / 100)
        },
        clearCart(state,){
            state.cart = []
        },
    }

})

export const {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearCart}   = cartSlice.actions

export default cartSlice.reducer

export const getTotalCartLength = (state) => state.cart.cart.reduce((sum,item)=> sum + item.quantity ,0)