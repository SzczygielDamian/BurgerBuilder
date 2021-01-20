import React from 'react';

import classes from './BurgerIngredient.module.css';

export interface BurgerIngredientProps {
    type: string;
}
 
const BurgerIngredient: React.FC<BurgerIngredientProps> = ({ type }) => {
    let ingredient = null;
    switch (type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>
            break;
        case ('pepper'):
            ingredient = <div className={classes.Pepper}></div>
            break;
        default:
            ingredient = null;
    }

    return ingredient;
}
 
export default BurgerIngredient;


