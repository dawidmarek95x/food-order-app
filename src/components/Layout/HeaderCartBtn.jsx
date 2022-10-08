import React, { useContext } from 'react';
import CartIcon from 'components/Cart/CartIcon';
import classes from './HeaderCartBtn.module.scss';
import CartContext from 'components/store/CartContext';

const HeaderCartBtn = ({ onClick }) => {
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce(
    (total, item) => {
      return total + item.amount;
    }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
