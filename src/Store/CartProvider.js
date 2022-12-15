import React, { useReducer } from "react";
import CartContex from "./Cart-context";
const defaultCartStore = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (prevState, action) => {
  if (action.type === "ADD") {
    const updateItems = prevState.items.concat(action.item);
    const updatedTotalAmount =
      prevState.totalAmount + action.item.price * action.item.amount;
    return {
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartStore;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartStore
  );
  const addItemToCartHandeler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemToCartHandeler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandeler,
    removeItem: removeItemToCartHandeler,
  };
  return (
    <CartContex.Provider value={cartContext}>
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
