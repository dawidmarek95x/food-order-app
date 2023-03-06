import { useEffect, useState } from 'react';

interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const useGetMealsQuery = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          'https://food-order-app-36387-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
        );

        const responseData = await response.json();

        const loadedMeals = Object.keys(responseData).map(key => ({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        }));

        setMeals(loadedMeals);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  return { meals, isLoading, isError };
};
