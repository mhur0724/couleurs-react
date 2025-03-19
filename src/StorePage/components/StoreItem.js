import React from "react";
import classes from "./StoreItem.module.css";
import { useNavigate } from "react-router-dom";

const StoreItem = ({ id, image, product, price, nav }) => {
  const navigate = useNavigate();

  return (
    <div key={id} className={classes["store-item"]}>
      <div
        className={classes["image-container"]}
        onClick={() => {
          navigate(nav);
        }}
      >
        <img src={image} alt="" />
      </div>
      <div className={classes["product-info"]}>
        <h1>{product}</h1>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default StoreItem;
