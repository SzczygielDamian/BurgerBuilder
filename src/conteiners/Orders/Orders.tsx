import React from 'react';

import Order from '../../components/Order/Order';

export interface OrdersProps {
    
}
 
const Orders: React.FC<OrdersProps> = () => {
    return ( 
        <div>
            <Order />
        </div>
     );
}
 
export default Orders;