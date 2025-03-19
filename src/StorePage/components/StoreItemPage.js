import React, { useState, useRef, useContext } from "react";
import classes from "./StoreItemPage.module.css";
import CartContext from "../../CartPage/cart-context";

const StoreItemPage = ({ id, img, product, price, sizing, care }) => {
  const [qty, setQty] = useState(1);
  const amountInputRef = useRef();
  const sizeRef = useRef();
  const cartCtx = useContext(CartContext);

  const inputChangeHandler = (e) => {
    setQty(parseInt(e.target.value));
  };

  const increment = () => {
    setQty((prevState) => prevState + 1);
  };

  const decrement = () => {
    if (qty > 0) {
      setQty((prevState) => prevState - 1);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    console.log(id);
    cartCtx.addItem({
      id: id,
      img: img,
      product: product,
      price: price,
      amount: enteredAmount,
      size: sizeRef.current.value,
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={img} alt="" />
      </div>
      <div className={classes.description}>
        <div>
          <h2>{product}</h2>
          <p>{`$${price}`}</p>
          <ul>
            <li>{sizing}</li>
            <li>{care}</li>
          </ul>
        </div>
        <div className={classes.size}>
          <label htmlFor="sizes">Size</label>
          <select ref={sizeRef} name="sizes" id="sizes">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-large">X-Large</option>
            <option value="xx-large">XX-Large</option>
          </select>
        </div>
        <div>
          <div className={`${classes.quantity} ${classes["buttons_added"]}`}>
            <form action="" onSubmit={submitHandler}>
              <input
                type="button"
                onClick={decrement}
                value="-"
                className={classes.minus}
              />
              <input
                ref={amountInputRef}
                type="number"
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
              <input type="submit" value="Add to cart" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreItemPage;
