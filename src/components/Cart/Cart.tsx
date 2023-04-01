import { useContext, useState } from 'react';
import CartContext, { CartContextProps } from 'components/store/CartContext';
import CartItem from './CartItem';
import Modal from 'components/UI/Modal';
import classes from './Cart.module.scss';
import Checkout, { UserData } from './Checkout';

interface Item {
  id: string;
  name: string;
  amount: number;
  price: number;
}

interface CartProps {
  onClose: () => void;
}

const Cart = ({ onClose }: CartProps) => {
  const [isCheckout, setIsCheckout] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [didSubmit, setDidSubmit] = useState<boolean>(false);
  const { items, totalAmount, addItem, removeItem, clearCart } =
    useContext<CartContextProps>(CartContext);

  const totalAmountOfMelts = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemovehandler = (id: string) => {
    removeItem(id);
  };

  const cartItemAddhandler = (item: Item) => {
    addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const sumbitOrderHandler = async (userData: UserData) => {
    setIsSubmitting(true);
    await fetch(
      'https://food-order-app-36387-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    clearCart();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map(item => (
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

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmountOfMelts}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={sumbitOrderHandler} onCancel={onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
