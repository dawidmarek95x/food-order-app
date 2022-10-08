import Input from 'components/UI/Input';
import React from 'react';
import classes from './MealItemForm.module.scss';

const MealItemForm = ({ id }) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
