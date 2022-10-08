import Input from 'components/UI/Input';
import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.scss';

const MealItemForm = ({ id, onAddToCart }) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitMealHandler = e => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1
    ) {
      setIsAmountValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitMealHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add</button>
      {!isAmountValid && <p>Please enter a valid amount (&gt;= 1).</p>}
    </form>
  );
};

export default MealItemForm;
