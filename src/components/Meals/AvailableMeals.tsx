import Card from 'components/UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.scss';
import { useGetMealsQuery } from 'service/foodOrderApi';

const AvailableMeals = () => {
  const { meals, isLoading, isError } = useGetMealsQuery();

  const mealsList = meals.map(meal => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p className={classes.mealsInfo}>Loading...</p>}
        {!isLoading && isError && (
          <p className={classes.mealsInfo}>
            The data was not downloaded due to a server connection error.
          </p>
        )}
        {!isLoading && !isError && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
