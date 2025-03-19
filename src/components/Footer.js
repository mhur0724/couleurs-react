import { Facebook, Instagram, Send } from "@mui/icons-material";
import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <ul className={classes.footer}>
        <li className={`${classes["about-us"]} ${classes["footer__li"]}`}>
          <p>
            <strong>About Coueluers</strong>
          </p>
          <div className={classes["about-us__description"]}>
            <p>Couleurs: French translation of colors</p>
            <p>Noun | cou•leurs | \ küˈlər , -ˈlə̄ | French</p>
            <p>
              Couleurs is about producing aesthetically pleasing product for
              anyone and everyone. We are a retro and logo inspired brand.
            </p>
            <p>
              Couleurs is a clothing brand that started in the basement of a
              small screen-printing shop in October 2017. Couleurs is based out
              of Boston, founded by two guys from New York City and Atlanta.
            </p>
          </div>
        </li>
        <li className={classes["footer__li"]}>
          <p>
            <strong>Company</strong>
          </p>
          <div>
            <Link to="/FAQ">FAQ</Link>
          </div>
        </li>
        <li className={`${classes.connect} ${classes["footer__li"]}`}>
          <p>
            <strong>Connect</strong>
          </p>
          <div>
            <p>
              <a href="#">Contact Us</a>
            </p>
            <ul className={classes["connect__icons"]}>
              <li>
                <a href="https://www.instagram.com/couleursofficial/">
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/couleursofficial2018/">
                  <Facebook />
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className={`${classes.newsletter} ${classes["footer__li"]}`}>
          <p>
            <strong>Newsletter</strong>
          </p>
          <div>
            <p>Sign up for exclusive offers, events and more.</p>
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter Email" />
              <button>
                <Send />
              </button>
            </form>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
