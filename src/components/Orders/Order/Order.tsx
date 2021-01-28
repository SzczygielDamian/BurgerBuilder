import React from 'react';
import { IOrderForm } from '../../../models/IOrderForm';

import classes from './Order.module.css';

export interface OrderProps {
    orderElement: IOrderForm;
}
 
const Order: React.FC<OrderProps> = ({ orderElement }) => {
    const ingredients = [];

    const { totalPrice, firstName, lastName, city, address, burger } = orderElement;

    for (let ingredient in burger) {
        ingredients.push({
            name: ingredient,
            amount: burger[ingredient]
        })
    }

    const ingredientsOrder = ingredients.map(ing => (
        <span key={ing.name} className={classes.SpanElement}>{ing.name} <strong>({ing.amount}) </strong></span>
    ));

    return ( 
        <>
        <p>Ingredients: {ingredientsOrder}</p>
        <p>Price: {totalPrice}<strong> USD</strong></p>
        <p>Customer: <strong>{firstName + ' ' +  lastName} - {city} / {address}</strong></p>
        </>
     );
}
 
export default Order;