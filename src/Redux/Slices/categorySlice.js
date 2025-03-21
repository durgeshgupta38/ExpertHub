import { createSlice } from "@reduxjs/toolkit";
import { serviceData } from "../../Utils/products";

// const storedCartList =
//   localStorage.getItem("cartList") !== null
//     ? JSON.parse(localStorage.getItem("cartList"))
//     : [];

const initialState = {
  categoryList: serviceData,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    filterCategory: (state, action) => {
      state.categoryList = action.payload.searchData.length
      ? action.payload.searchData
      : serviceData

    },
    // searchCategory: (state, action) => {
    //   console.log(state, action,"stataction")
    //   state.categoryList = action.payload.searchData.length
    //   ? action.payload.searchData
    //   : serviceData

    // },
  },
});


export const { filterCategory } = categorySlice.actions;

export default categorySlice.reducer;
