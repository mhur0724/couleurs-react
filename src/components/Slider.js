import React, { useState } from "react";
import classes from "./Slider.module.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Slide from "./Slide";
import { slides } from "./data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prevState) =>
        prevState > 0 ? slideIndex - 1 : slides.length - 1
      );
    } else {
      setSlideIndex((prevState) =>
        prevState === slides.length - 1 ? 0 : slideIndex + 1
      );
    }
  };

  const slideItems = slides.map((slideItem) => (
    <Slide
      key={slideItem.id}
      image={slideItem.img}
      title={slideItem.title}
      description={slideItem.description}
      button={slideItem.button}
      backgroundColor={slideItem.backgroundColor}
      nav={slideItem.nav}
    />
  ));

  return (
    <div className={classes.container}>
      <div
        id={classes["left-arrow"]}
        className={classes.arrow}
        onClick={() => handleClick("left")}
      >
        <ArrowBackIosNewOutlinedIcon />
      </div>

      <div
        className={classes.wrapper}
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {slideItems}
      </div>

      <div
        id={classes["right-arrow"]}
        className={classes.arrow}
        onClick={() => handleClick("right")}
      >
        <ArrowForwardIosOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
