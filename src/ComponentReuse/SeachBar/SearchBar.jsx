import { useState } from "react";
import "./searchbar.css";
// import { products } from "../../utils/products";
import { useDispatch } from "react-redux";
import { serviceData } from "../../Utils/products";
// import { filterCategory } from "../../Redux/Slices/categorySlice";

// import useDebounce from "../../hooks/useDebounce";
const SearchBar = () => {
    const dispatch = useDispatch();
  // const debounceSearchWord = useDebounce(searchWord, 300);
  const handelChange = (input) => {
    
    const searchData=serviceData.filter((item) =>item.title.toLowerCase().includes(input.target.value?.toLowerCase()))
    // dispatch(filterCategory({ searchData: searchData}));

  };
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." onChange={handelChange} />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
  );
};

export default SearchBar;
