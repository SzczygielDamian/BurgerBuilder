import React from 'react';

import classes from './Burger.module.css';

export interface BurgerProps {
    
}
 
const Burger: React.FC<BurgerProps> = () => {
    return (  
        <div className={classes.Burger}>
            Burger
        </div>
    );
}
 
export default Burger;