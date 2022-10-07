import React from 'react';
import {nanoid} from 'nanoid';
import DUMMY_MEALS from 'services/dummyMeals';
import classes from './AvailableMeals.module.scss';

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => <li key={nanoid()}>{meal.name}</li>)

  return (
    <section className={classes.meals}>
      <ul>
        {mealsList}
      </ul>
    </section>
  );
};

export default AvailableMeals;