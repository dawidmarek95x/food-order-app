import React, { useContext } from 'react';
import CartContext from 'components/store/CartContext';
import CartItem from './CartItem';
import Modal from 'components/UI/Modal';
import classes from './Cart.module.scss';

const Cart = ({ onClose }) => {
  const { items, totalAmount } = useContext(CartContext);

  const totalAmountOfMelts = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemovehandler = id => {};

  const cartItemAddhandler = item => {};

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemovehandler.bind(null, item.id)}
          onAdd={cartItemAddhandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmountOfMelts}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
