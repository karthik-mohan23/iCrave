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
            state.cart.length = 0
        },
    }

})

export const {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearCart}   = cartSlice.actions

export default cartSlice.reducer

// to reuse

export const getCart = (state) => state.cart.cart

// to  show cart length
export const getTotalCartLength = (state) => state.cart.cart.reduce((sum,item)=> sum + item.quantity ,0)

// to show total price
export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum,item)=> sum + item.totalPrice ,0)