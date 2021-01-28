import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../store/Order/Actions/action';
import { RootState } from '../../store/rootReducer';

import classes from './Orders.module.css';

import { IOrderForm } from '../../models/IOrderForm';
import Order from './Order/Order';


export interface OrdersProps {
}
 
const Orders: React.FC<OrdersProps> = () => {
     const dispatch = useDispatch();
     const orders = useSelector(
          (store: RootState) => store.orders.orders
        );
     
     useEffect(() => {
          dispatch(fetchOrders());
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     const orderComponent = (orders !== null) ? orders.map( (item: IOrderForm) => (
          <Order key={item.id} orderElement={item}/>
     )) : null;

    return ( 
        <div className={classes.Order}>
             {orderComponent}
        </div>
     );
}
 
export default Orders;