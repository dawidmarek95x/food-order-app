import Modal from 'components/UI/Modal';
import React from 'react';
import classes from './Cart.module.scss';

const Cart = ({ onClose }) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'm1', name: 'Dumplings with fried onion', amount: 2, price: 14.99 }].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>29.98</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose} >Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
