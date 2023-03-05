import { useContext, useEffect, useState } from 'react';
import CartIcon from 'components/Cart/CartIcon';
import classes from './HeaderCartBtn.module.scss';
import CartContext from 'components/store/CartContext';

interface HeaderCartBtnProps {
  onClick: () => void;
}

const HeaderCartBtn = ({ onClick }: HeaderCartBtnProps) => {
  const [isOrderUpdate, setIsOrderUpdate] = useState<boolean>(false);
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${isOrderUpdate && classes.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsOrderUpdate(true);

    const timer = setTimeout(() => {
      setIsOrderUpdate(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
