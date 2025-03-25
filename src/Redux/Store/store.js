import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk"; 

// import  categorySlice  from "../Slices/categorySlice";
import  userSlice  from "../Slices/userSlice";

export const store = configureStore({
  reducer: {
    // category:categorySlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
