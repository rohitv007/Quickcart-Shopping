import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
