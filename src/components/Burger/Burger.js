import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients) // keys will return an array with the keys of the obj as strings
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, 1) => { // array with 2 elements
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            }); 
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;