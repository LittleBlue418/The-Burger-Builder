import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientName => {
      const amount = props.ingredients[ingredientName]
    // Exacutes a function on each element, maps to new array
      return [...Array(amount)]
      // make new array with two elements
        .map((_, i) => {
        // maps to new array. _ is blank, we are just doing this to get the index
        return <BurgerIngredient key={ingredientName + i} type={ingredientName} />
        // use the index to create a unique key
      });
    });


  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;