import React, { useContext } from "react";
import Modal from "../../UI/Modal";
import "./Cart.css";
import CartContex from "../../Store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContex);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItem = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}/>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItem}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="buton--alt" onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
