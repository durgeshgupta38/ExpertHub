import { Fragment } from "react";
import Wrapper from "./Wrapper";
// import { products} from "../../Utils/products";
import SliderHome from "../../../ComponentReuse/SliderCard/Slider";
import useWindowScrollToTop from "../../../CustomHook/useWindowScrollToTop";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./HomePage";

const Home = () => {
  useWindowScrollToTop();
  const isLoggedIn=localStorage.getItem("isLoggedIn")
  const role=localStorage.getItem("role")
const isAuthenticated= !!localStorage.getItem("isAuthenticated")

  return (
    <>
      <SliderHome />
      {!isLoggedIn &&  <HomePage isLoggedIn={isLoggedIn} isAuthenticated={isAuthenticated}/>}
      {isLoggedIn && role=="user"&& <Wrapper/>}
    </>
  );
};

export default Home;
