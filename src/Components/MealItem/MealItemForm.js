import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState(true);
  const amountInputRef = useRef();
  const onSubmitHandeler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    props.onAddToCart(enteredAmountNumber);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber < 1
    ) {
      setEnteredAmount(false);
      return;
    }
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandeler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "Amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button>+ Add</button>
      {!enteredAmount && <p>Please enter a valid Amount between(1-5).</p>}
    </form>
  );
};

export default MealItemForm;
