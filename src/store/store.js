import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Storage"


export const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})