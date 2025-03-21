import { Fragment } from "react";
import Wrapper from "./Wrapper";
// import { products} from "../../Utils/products";
import SliderHome from "../../../ComponentReuse/SliderCard/Slider";
import useWindowScrollToTop from "../../../CustomHook/useWindowScrollToTop";
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
