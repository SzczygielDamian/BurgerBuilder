import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../store/Order/Actions/action';
import { RootState } from '../../store/rootReducer';

import classes from './Orders.module.css';


export interface OrderProps {
}
 
const Order: React.FC<OrderProps> = () => {
     const dispatch = useDispatch();
     const orders = useSelector(
          (store: RootState) => store.orders.orders
        );
     
     useEffect(() => {
          dispatch(fetchOrders());
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

    return ( 
        <div className={classes.Order}>
             {console.log(orders)}
             <p>Ingredients: </p>
             <p>Price: <strong>USD </strong></p>
        </div>
     );
}
 
export default Order;