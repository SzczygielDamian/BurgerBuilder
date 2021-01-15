import React from 'react';
import { useSelector } from 'react-redux';

 
import Price from './Price/Price';
import Button from '../../../UI/Button/Button';
import CreateBurger from './CreateBurger/CreateBurger';

import classes from './BuildControls.module.css';

import { RootState } from '../../../store/rootReducer';

import { IngredientsInterface } from '../../../store/Ingredients/Actions/actions';

export interface BuildControlsProps {

}

const BuildControls: React.FC<BuildControlsProps> = () => {
    const controls = useSelector( (store: RootState) => store.ingredients.ingredients)
    console.log(controls)
    const builderControls = controls != null ? controls.map( (item: IngredientsInterface) => (
        <CreateBurger key={item.id} label={item.label}/>
    )) : null
    
    return ( 
        <div className={classes.BuildControls}>
            <Price price={2.2}/>
            {/* {builderControls} */}
            <Button name={"Order Now"}/>
        </div>
     );
}
 
export default BuildControls;