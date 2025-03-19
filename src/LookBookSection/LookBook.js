import React from "react";
import { lookbooks } from "./LookBookData";
import classes from "./LookBook.module.css";

const LookBook = () => {
  return (
    <div className={classes.lookbook}>
      {lookbooks.map((lookbookItem) => (
        <div key={lookbookItem.id} className={classes["lookbook-item"]}>
          <img src={lookbookItem.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default LookBook;
