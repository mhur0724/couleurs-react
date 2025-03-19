import React from "react";
import { graphics } from "./graphicsData";
import classes from "./Graphics.module.css";

const Graphics = () => {
  return (
    <div className={classes.graphics}>
      {graphics.map((graphic) => (
        <div key={graphic.id} className={classes.graphic}>
          <img src={graphic.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Graphics;
