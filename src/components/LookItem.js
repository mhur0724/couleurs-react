import React from "react";
import classes from "./LookItem.module.css";

const LookItem = ({ image }) => {
  return (
    <div className={classes.image}>
      <img src={image} alt="" />
    </div>
  );
};

export default LookItem;
