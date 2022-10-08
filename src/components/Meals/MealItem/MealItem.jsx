import React from 'react';
import classes from './MealItem.module.scss';
import MealItemForm from './MealItemForm';

const MealItem = ({ id, name, description, price }) => {
  const fixedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>{fixedPrice}</p>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
