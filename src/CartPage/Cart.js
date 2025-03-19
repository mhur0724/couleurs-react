import React, { useContext, useRef } from "react";
import CartContext from "./cart-context";
import classes from "./Cart.module.css";
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const sizeRef = useRef();
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  if (!hasItems) {
    return <div className={classes.cart}>Your cart is currently empty</div>;
  }
  return (
    <div className={classes.cart}>
      <div className={classes["cart__content"]}>
        {hasItems && (
          <div className={classes["cart__info"]}>
            <ul>
              <li>Item</li>
              <li>Description</li>
              <li>QTY</li>
              <li>Price</li>
            </ul>
          </div>
        )}
        <div className={classes["cart__items"]}>
          {cartCtx.items.map((item) => (
            <div className={classes["cart__item"]}>
              <ul>
                <li>
                  <img src={item.img} alt="" />
                </li>
                <li>
                  <div>
                    <p>{item.product}</p>
                    <p className={classes.size}>Size: {item.size}</p>
                  </div>
                </li>
                <li className={classes.qty}>
                  <div className={classes["qty__content"]}>
                    <button onClick={cartItemRemoveHandler.bind(null, item.id)}>
                      -
                    </button>
                    <p>{item.amount}</p>
                    <button onClick={cartItemAddHandler.bind(null, item)}>
                      +
                    </button>
                  </div>
                </li>
                <li>{`$${item.price * item.amount}`}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.total}>
        <div>
          {hasItems && (
            <div>
              <p>Subtotal: {totalAmount} </p>
              <button>CHECKOUT</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
