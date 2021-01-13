import * as React from 'react';

import classes from './Order.module.css';


export interface OrderProps {
}
 
const Order: React.FC<OrderProps> = () => {
    return ( 
        <div className={classes.Order}>
             <p>Ingredients: </p>
             <p>Price: <strong>USD </strong></p>
        </div>
     );
}
 
export default Order;