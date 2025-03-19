import React from "react";
import classes from "./FAQ.module.css";
const FAQ = () => {
  return (
    <div className={classes.faq}>
      <div className={classes.header}>
        <h1>FAQ</h1>
      </div>
      <ul className={classes.questions}>
        <li>
          <p className={classes.question}>
            What is the best way to care for the product?
          </p>
          <p className={classes.answer}>
            All product should be machine washed cold and should be air dried to
            minimize any type of shrinkage.
          </p>
        </li>
        <li>
          <p className={classes.question}>What is your shipping policy?</p>
          <p className={classes.answer}>
            All product will be shipped within 2-3 business days via USPS with
            tracking.{" "}
          </p>
        </li>
        <li>
          <p className={classes.question}>How much is shipping?</p>
          <p className={classes.answer}>
            There will be a flat rate fee of $12 per order, and free shipping on
            orders over $99.
          </p>
        </li>
        <li>
          <p className={classes.question}>Do you guys accept returns?</p>
          <p className={classes.answer}>
            We will only accept exchanges within 14 days of delivery date. We
            have the right to deny an exchange if the returned product does not
            meet standards. Shipping is NOT covered for a returned packages. You
            must also contact us prior to an exchange.
          </p>
        </li>
        <li>
          <p className={classes.question}>How does the clothing fit?</p>
          <p className={classes.answer}>All products will run True to Size.</p>
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
