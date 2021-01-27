import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';
import { BurgerStateInterface } from '../../models/IBurgerIngredients';

export interface BurgerProps {
    burgerState: BurgerStateInterface,
}
 
const Burger: React.FC<BurgerProps> = ({burgerState}) => {

    let transformedIngredients = Object.keys(burgerState.burger).map(ingkey => {
        return [...Array(burgerState.burger[ingkey])].map((item, i) => {
            return <BurgerIngredient key={ingkey + i} type={ingkey}/>
        });
        })

    return (  
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}
 
export default Burger;