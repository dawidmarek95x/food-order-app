import React from 'react';
import CartIcon from 'components/Cart/CartIcon';
import classes from './HeaderCartBtn.module.scss';

const HeaderCartBtn = ({ onClick }) => {
  return (
    <button className={classes.button} onClick={onClick} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartBtn;
