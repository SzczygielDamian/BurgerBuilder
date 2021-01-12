import React from 'react';

export interface PriceProps {
    price: number;
}
 
const Price: React.FC<PriceProps> = ({price}) => {
    return (
        <p>Total Price: <strong>{price.toFixed(2)}</strong></p>
      );
}
 
export default Price;