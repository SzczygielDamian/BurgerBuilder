import React from 'react';

import Price from './Price/Price';
import Button from '../../../UI/Button/Button';
import CreateBurger from './CreateBurger/CreateBurger';

import classes from './BuildControls.module.css';

export interface BuildControlsProps {
    
}

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];
 
const BuildControls: React.FC<BuildControlsProps> = () => {
    const builderControls = controls.map(item => (
        <CreateBurger key={item.label} label={item.label} />
    ))
    return ( 
        <div className={classes.BuildControls}>
            <Price price={2.2}/>
            {builderControls}
            <Button name={"Order Now"}/>
        </div>
     );
}
 
export default BuildControls;