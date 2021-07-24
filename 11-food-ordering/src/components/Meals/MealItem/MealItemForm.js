import React, { useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

export default function MealItemForm(props) {
  const amountInputRef = React.createRef();
  const [amountIsValid, setAmountIsValud] = useState(true);

  const addItemToCartHandler = (event) => {
    event.preventDefault();
    const amountValue = +amountInputRef.current.value.trim();
    if (amountValue.length === 0 || amountValue < 1 || amountValue > 5) {
      setAmountIsValud(false);
      return;
    }
    props.onAddToCart(amountValue);
  };
  return (
    <form className={classes.form} onSubmit={addItemToCartHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && (
        <i>
          <br></br>Please enter a valid amount(1-5)
        </i>
      )}
    </form>
  );
}
