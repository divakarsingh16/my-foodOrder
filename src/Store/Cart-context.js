import React from "react";

const CartContex = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removItem: (id) => {},
});
export default CartContex;
