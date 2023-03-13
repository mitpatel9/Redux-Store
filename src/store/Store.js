import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'
import productReducer from './ProductSlice'

export default configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
    }
})