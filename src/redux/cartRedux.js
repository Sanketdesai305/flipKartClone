import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    // initial state of the cart
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        //function that adds product, clears product and removes product when user logged out
        addProduct:(state,action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        clearProduct:(state,action)=>{
            const index = state.products.filter((product)=>product.id!==action.payload);
            state.quantity -= 1;
            state.products = index;
            state.total = state.products?.reduce((amount,product)=>product.price + amount,0);
        },
        removeProduct:(state,action)=>{
            state.quantity = 0;
            state.products=[];
            state.total = 0;
        },
    },
});

export const  {addProduct,removeProduct,clearProduct} = cartSlice.actions;
export default cartSlice.reducer;
