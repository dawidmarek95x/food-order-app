import React from 'react';
import classes from './Header.module.scss';
import mealtsImg from '../../images/meals.jpg';
import HeaderCartBtn from './HeaderCartBtn';

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>TastyMeals</h1>
        <HeaderCartBtn onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealtsImg} alt="Delicious food on a wooden table!" />
      </div>
    </>
  );
};

export default Header;
