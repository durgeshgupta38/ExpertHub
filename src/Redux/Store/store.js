import { configureStore } from "@reduxjs/toolkit";
import  categorySlice  from "../Slices/categorySlice";

export const store = configureStore({
  reducer: {
    category:categorySlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   serializableCheck: false
  // }),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(categoryMiddleware),
});
