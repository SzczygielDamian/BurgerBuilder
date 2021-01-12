import React from 'react';

import classes from './CreateBurger.module.css';

export interface CreateBurgerProps {
    label: string;
}
 
const CreateBurger: React.FC<CreateBurgerProps> = ({ label }) => {
    return (  
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{label} : 0</div>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>
    );
}
 
export default CreateBurger;