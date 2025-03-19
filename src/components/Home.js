import React from "react";
import Categories from "./Categories";
import Looks from "./Looks";
import Products from "./Products";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Products />
      <Categories />
      <Looks />
    </div>
  );
};

export default Home;
