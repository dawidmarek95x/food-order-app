import { FormEvent, useRef, useState } from 'react';
import classes from './Checkout.module.scss';

export interface FormInputValidity {
  name: boolean;
  street: boolean;
  postalCode: boolean;
  city: boolean;
}

export interface UserData {
  name: string;
  street: string;
  postalCode: string;
  city: string;
}

interface CheckoutProps {
  onConfirm: (userData: UserData) => void;
  onCancel: () => void;
}

const isEmpty = (value: string) => value.trim() === '';
const isFiveCharsLong = (value: string) => value.trim().length === 5;

const Checkout = ({ onConfirm, onCancel }: CheckoutProps) => {
  const [formInputValidity, setFormInputValidity] = useState<FormInputValidity>(
    {
      name: true,
      street: true,
      postalCode: true,
      city: true,
    }
  );

  const nameInputRef = useRef<HTMLInputElement>(null!);
  const streetInputRef = useRef<HTMLInputElement>(null!);
  const postalCodeInputRef = useRef<HTMLInputElement>(null!);
  const cityInputRef = useRef<HTMLInputElement>(null!);

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const enteredName = nameInputRef?.current?.value;
    const enteredStreet = streetInputRef?.current?.value;
    const enteredPostalCode = postalCodeInputRef?.current?.value;
    const enteredCity = cityInputRef?.current?.value;

    const isValidEnteredName = !isEmpty(enteredName ?? '');
    const isValidEnteredStreet = !isEmpty(enteredStreet ?? '');
    const isValidEnteredPostalCode = isFiveCharsLong(enteredPostalCode ?? '');
    const isValidEnteredCity = !isEmpty(enteredCity ?? '');

    setFormInputValidity({
      name: isValidEnteredName,
      street: isValidEnteredStreet,
      postalCode: isValidEnteredPostalCode,
      city: isValidEnteredCity,
    });

    const isFormValid =
      isValidEnteredName &&
      isValidEnteredStreet &&
      isValidEnteredPostalCode &&
      isValidEnteredCity;

    if (!isFormValid) {
      return;
    }

    onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  const setControlClasses = (
    controlName: 'name' | 'street' | 'postalCode' | 'city'
  ) =>
    `${classes.control} ${
      formInputValidity[controlName] ? '' : classes.invalid
    }`;

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={setControlClasses('name')}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please entered a valid name!</p>}
      </div>
      <div className={setControlClasses('street')}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please entered a valid street!</p>}
      </div>
      <div className={setControlClasses('postalCode')}>
        <label htmlFor="postal-code">Postal Code</label>
        <input type="text" id="postal-code" ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please entered a valid postal code! (5 characters long)</p>
        )}
      </div>
      <div className={setControlClasses('city')}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please entered a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit} type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
