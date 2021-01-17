import React from 'react';

export interface PriceProps {
    totalPrice: number;
}
 
const Price: React.FC<PriceProps> = ({totalPrice}) => {
    return (
        <p>Total Price: <strong>{totalPrice.toFixed(2)}</strong></p>
      );
}
 
export default Price;