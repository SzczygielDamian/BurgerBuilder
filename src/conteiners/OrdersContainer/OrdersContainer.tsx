import React from 'react';

import Orders from '../../components/Orders/Orders';

export interface OrdersProps {}
 
const OrdersContainer: React.FC<OrdersProps> = () => {
    return ( 
        <div>
            <Orders />
        </div>
     );
}
 
export default OrdersContainer;