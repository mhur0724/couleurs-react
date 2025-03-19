import React from "react";
import classes from "./Categories.module.css";
import CategoryItem from "./CategoryItem";
import { categories } from "./data";
const Categories = () => {
  return (
    <div className={classes.container}>
      {categories.map((item) => (
        <CategoryItem
          key={item.id}
          image={item.img}
          nav={item.nav}
          button={item.button}
        />
      ))}
    </div>
  );
};

export default Categories;
