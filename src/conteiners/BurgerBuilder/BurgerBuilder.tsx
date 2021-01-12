import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

export interface BurgerBuilderProps {
    
}
 
const BurgerBuilder: React.FC<BurgerBuilderProps> = () => {
    return ( 
        <div>
            <Burger />
            <BuildControls />
        </div>
     );
}
 
export default BurgerBuilder;