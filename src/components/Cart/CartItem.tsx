import { MouseEventHandler } from 'react';
import classes from './CartItem.module.scss';

interface Item {
  name: string;
  amount: number;
  price: number;
}

interface CartItemProps extends Item {
  onAdd: MouseEventHandler<HTMLButtonElement>;
  onRemove: MouseEventHandler<HTMLButtonElement>;
}

const CartItem = ({ price, name, amount, onRemove, onAdd }: CartItemProps) => {
  const fixedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{fixedPrice}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
