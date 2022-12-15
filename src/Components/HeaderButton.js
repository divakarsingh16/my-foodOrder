import React, { useContext } from "react";
import CartIcon from "./Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import CartContex from "../Store/Cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContex);
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className="m-2">Your Cart</span>
      <span className={classes.badge}> {numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
