import React from 'react';

import classes from './CreateBurger.module.css';

export interface CreateBurgerProps {
    label: string;
    add: any;
    remove: any;
}
 
const CreateBurger: React.FC<CreateBurgerProps> = ({ label, add, remove }) => {

    return (  
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{label} : 0</div>
            <button className={classes.Less} onClick={remove}>Less</button>
            <button className={classes.More} onClick={add}>More</button>
        </div>
    );
}
 
export default CreateBurger;