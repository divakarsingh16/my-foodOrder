import React from "react";
import CartButton from "./HeaderButton";
import Meals from "../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div>
      <div className={classes.header}>
        <h1>React-Meals</h1>
        <CartButton onClick={props.onShowCart} />
      </div>
      <div>
        <img className={classes["main-image"]} alt="A table of meals" src={Meals} />
      </div>
    </div>
  );
};

export default Header;
