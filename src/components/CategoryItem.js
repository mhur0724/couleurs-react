import React from "react";
import classes from "./CategoryItem.module.css";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ image, nav, button }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <img className={classes.image} src={image} alt="" />
      <div className={classes.info}>
        <button
          className={classes.button}
          onClick={() => {
            navigate(nav);
          }}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
