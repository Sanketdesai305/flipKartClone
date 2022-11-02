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
            state.total += action.payload.price;
        },
        clearProduct:(state,action)=>{
            const index = state.products.findIndex((product)=>product._id===action._id);
            state.quantity -= 1;
            state.products.splice(index,1);
            let newproducts = [...state.products];
            state.products = newproducts;
            state.total = state.products?.reduce((amount,product)=>product.price + amount,0);
        },
        removeProduct:(state,action)=>{
            state.quantity = 0;
            state.products=[];
            state.total = 0;
        },
    },
});

export const  {addProduct,removeProduct,clearProduct,IncrementCount} = cartSlice.actions;
export default cartSlice.reducer;
