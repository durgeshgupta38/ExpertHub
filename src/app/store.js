import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { cartMiddleware } from "./features/cart/cartSlice";
import  categorySlice  from "./features/Categories/categorySlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    category:categorySlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   serializableCheck: false
  // }),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(categoryMiddleware),
});
