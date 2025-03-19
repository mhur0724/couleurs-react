import React from "react";
import classes from "./ProductItem.module.css";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ image, product, price, nav }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div
        className={classes["image-container"]}
        onClick={() => {
          navigate(nav);
        }}
      >
        <img src={image} alt="" />
      </div>

      <div className={classes["product-info"]}>
        <p>{product}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
