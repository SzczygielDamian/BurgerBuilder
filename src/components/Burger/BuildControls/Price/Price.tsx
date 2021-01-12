import React from 'react';

export interface PriceProps {
    price: number;
}
 
const Price: React.FC<PriceProps> = ({price}) => {
    return (
        <p>{price.toFixed(2)}</p>
      );
}
 
export default Price;