import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Price from './Price/Price';
import Button from '../../../UI/Button/Button';
import CreateBurger from './CreateBurger/CreateBurger';

import classes from './BuildControls.module.css';

import { RootState } from '../../../store/rootReducer';

import { IngredientsInterface } from '../../../store/Ingredients/Actions/actions';

import { addIngredient, removeIngredient, setIngredients } from '../../../store/BurgerBuilder/Actions/actions';

export interface BuildControlsProps {

}

let ingredients = {};

const BuildControls: React.FC<BuildControlsProps> = () => {
    const controls = useSelector( (store: RootState) => store.ingredients.ingredients)
    const burgerState = useSelector( (store: RootState) => store.burger)
    const dispatch = useDispatch();

    const setBurgerIngfedients = () => {
        if (controls != null) {
            for (let i = 0; i < controls.length; i++) {
             ingredients = {...ingredients, [controls[i].type]: 0}
            }
            dispatch(setIngredients(ingredients))
        }
    }

    useEffect(() => {
        setBurgerIngfedients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [controls]);
    
    const builderControls = controls != null ? controls.map( (item: IngredientsInterface) => {
       return <CreateBurger key={item.id} label={item.label} countIngredient={burgerState.burger[item.type]} add={() => dispatch(addIngredient(item))} remove={() => dispatch(removeIngredient(item))} />
    }) : null
    
    return ( 
        <div className={classes.BuildControls}>
            <Price totalPrice={burgerState.totalPrice}/>
            {builderControls}
            <Button name={"Order Now"}/>
        </div>
     );
}
 
export default BuildControls;