import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import { products} from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
    </Fragment>
  );
};

export default Home;
