import { FormEvent, useRef, useState } from 'react';
import Input from 'components/UI/Input';
import classes from './MealItemForm.module.scss';
import { RefObject } from 'react';

interface MealItemFormProps {
  id: string;
  onAddToCart: (amount: number) => void;
}

const MealItemForm = ({ id, onAddToCart }: MealItemFormProps): JSX.Element => {
  const [isAmountValid, setIsAmountValid] = useState<boolean>(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitMealHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current!.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      setIsAmountValid(false);
      return;
    }

    setIsAmountValid(true);
    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitMealHandler}>
      <Input
        ref={amountInputRef as RefObject<HTMLInputElement>}
        label="Amount"
        id={id}
        type="number"
        min="1"
        step="1"
        defaultValue="1"
      />
      <button type="submit">Add</button>
      {!isAmountValid && <p>Please enter a valid amount (&gt;= 1).</p>}
    </form>
  );
};

export default MealItemForm;
