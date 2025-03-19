import React from "react";
import { storeItems } from "./StoreData";
import classes from "./Store.module.css";
import StoreItem from "./StoreItem";

const Store = () => {
  return (
    <div className={classes.container}>
      {storeItems.map((storeItem) => (
        <StoreItem
          key={storeItem.id}
          image={storeItem.img}
          product={storeItem.product}
          price={storeItem.price}
          nav={storeItem.nav}
        />
      ))}
    </div>
  );
};

export default Store;
