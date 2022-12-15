import React, { useContext } from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
import CartContex from "../../Store/Cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContex);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandeler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="meal-container">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandeler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
