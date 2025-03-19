import React from "react";
import classes from "./Slide.module.css";
import { useNavigate } from "react-router-dom";

const Slide = ({ image, title, description, button, backgroundColor, nav }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes["img-container"]}>
          <img src={image} alt="" />
        </div>
        <div className={classes.overlay}>
          <h1>{title.toUpperCase()}</h1>
          <p>{description.toUpperCase()} </p>
          <button
            style={{ backgroundColor: backgroundColor }}
            onClick={() => {
              navigate(nav);
            }}
          >
            {button.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
