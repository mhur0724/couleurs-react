import React from "react";
import LookItem from "./LookItem";
import classes from "./Looks.module.css";
import { looks } from "./data.js";

const Looks = () => {
  return (
    <>
      <div className={classes["by-you"]}>
        <h2>As Styled By You</h2>
        <p>@couleursofficial</p>
      </div>
      <div className={classes.container}>
        {looks.map((look) => (
          <LookItem key={look.id} image={look.img} />
        ))}
      </div>
    </>
  );
};

export default Looks;
