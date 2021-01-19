import React from 'react';

import classes from './Button.module.css';

export interface ButtonProps {
    name: string;
}
 
const Button: React.FC<ButtonProps> = ({ name }) => {
    return ( 
        <button className={classes.OrderButton}>{name}</button>
    );
}
 
export default Button;