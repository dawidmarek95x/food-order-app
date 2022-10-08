import React from 'react';
import classes from './Cart.module.scss';

const Cart = () => {
  const cartItems = (
    <ul className={classes['cart-ites']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div></div>
      <div></div>
    </div>
  );
};

export default Cart;
