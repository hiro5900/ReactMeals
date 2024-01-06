import React from 'react';
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
     {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
     },
     {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
     },
     {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
     },
     {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
     },
];

const AvailableMeals = () => {
     const mealsList = DUMMY_MEALS.map(meal => (
          <>
               <div className={classes.mealInfo}>
                    <li className={classes.mealName}><b>{meal.name}</b></li>
                    <li className={classes.mealDescription}><i>{meal.description}</i></li>
                    <li className={classes.mealPrice}><b>${meal.price}</b></li>
               </div>
          </>
     ))
     return (
          <div className={classes.card}>
               <section className={classes.meals}>
                    <ul>
                         {mealsList}
                    </ul>
               </section>
          </div>
     );
};

export default AvailableMeals;