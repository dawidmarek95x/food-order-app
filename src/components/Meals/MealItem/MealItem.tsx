import CartContext from 'components/store/CartContext';
import React, { useContext } from 'react';
import classes from './MealItem.module.scss';
import MealItemForm from './MealItemForm';

interface MealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealItem = ({ id, name, description, price }: MealItemProps) => {
  const { addItem } = useContext(CartContext);
  const fixedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>{fixedPrice}</p>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
