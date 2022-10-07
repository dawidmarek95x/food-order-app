import React from 'react';
import classes from './Header.module.scss';
import mealtsImg from '../../images/meals.jpg';
import HeaderCartBtn from './HeaderCartBtn';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>TastyMeals</h1>
        <HeaderCartBtn />
      </header>
      <div className={classes['main-image']}>
        <img src={mealtsImg} alt="Delicious food on a wooden table!" />
      </div>
    </>
  );
};

export default Header;
