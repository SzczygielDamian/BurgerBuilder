import React from 'react';

import BurgerIngredientProps from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';
export interface BurgerProps {
    
}
 
const Burger: React.FC<BurgerProps> = () => {
    return (  
        <div className={classes.Burger}>
            <BurgerIngredientProps type='bread-top'/>
            <BurgerIngredientProps type='bread-bottom'/>
        </div>
    );
}
 
export default Burger;