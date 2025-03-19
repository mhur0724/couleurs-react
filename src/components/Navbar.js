import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../images/logo.png";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { PersonOutline, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import CartContext from "../CartPage/cart-context";

const Navbar = ({ cartCount, setCartCount }) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);

  const numberofCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <div className={classes["menu-item"]}>
            <Link to="/store">STORE</Link>
          </div>
          <div className={classes["menu-item"]}>
            <Link to="/graphics">GRAPHICS</Link>
          </div>
          <div className={classes["menu-item"]}>
            <Link to="/lookbook">LOOKBOOK</Link>
          </div>
        </div>
        <div className={classes.center}>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="" />
          </Link>
        </div>
        <div className={classes.right}>
          <div className={classes["menu-item"]}>
            <Search />
          </div>
          <div className={classes["menu-item"]}>
            <PersonOutline />
          </div>
          <div
            className={classes["menu-item"]}
            onClick={() => {
              navigate("/cart");
            }}
          >
            <Badge badgeContent={numberofCartItems} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
