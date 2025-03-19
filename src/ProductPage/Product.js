import React, { useState } from "react";
import classes from "./Product.module.css";
const Product = ({ img, product, price, sizing, care }) => {
  const [qty, setQty] = useState(1);

  const sizeChangeHandler = (e) => {
    console.log(e.target.value);
  };

  const inputChangeHandler = (e) => {
    setQty(parseInt(e.target.value));
  };

  const increment = () => {
    setQty((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQty((prevState) => prevState - 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={img} alt="" />
      </div>
      <div className={classes.description}>
        <div>
          <h2>{product}</h2>
          <p>{price}</p>
          <ul>
            <li>{sizing}</li>
            <li>{care}</li>
          </ul>
        </div>
        <div className={classes.size}>
          <label htmlFor="sizes">Size</label>
          <select name="sizes" id="sizes" onChange={sizeChangeHandler}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-large">X-Large</option>
            <option value="xx-large">XX-Large</option>
          </select>
        </div>
        <div>
          <div className={`${classes.quantity} ${classes["buttons_added"]}`}>
            <input
              type="button"
              onClick={decrement}
              value="-"
              className={classes.minus}
            />
            <input
              type="number"
              step="1"
              min="1"
              max=""
              name="quantity"
              value={qty}
              title="Qty"
              className={`${classes["input-text"]} ${classes["qty"]} ${classes.text}`}
              size="4"
              pattern=""
              inputMode=""
              onChange={inputChangeHandler}
            />
            <input
              type="button"
              onClick={increment}
              value="+"
              className={classes.plus}
            />
          </div>
        </div>
        <button className={classes["cart-button"]}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
