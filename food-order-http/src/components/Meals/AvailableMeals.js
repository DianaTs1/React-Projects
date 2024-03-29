import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {

  const [availableMeals, setAvailableMeals] = useState([]);
  const [httpError, setHttpError] = useState();

  useEffect( () => {
    const fetchedMeals = async () => {
    const response = await fetch("https://food-order-app-24012-default-rtdb.firebaseio.com/meals.json");
    
    if (!response.ok) {
      throw new Error("Something went wrong");
    };

    const data = await response.json();

    const loadedMeals = [];

    for (let key in data) {
      loadedMeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price
      });
    };
    setAvailableMeals(loadedMeals);
  };

    fetchedMeals().catch((err) => {
      setHttpError(err.message)
    })
  }, [httpError]);

  const mealsList = availableMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (httpError) {
    return <section className={classes.error}>
      {httpError}
    </section>
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
