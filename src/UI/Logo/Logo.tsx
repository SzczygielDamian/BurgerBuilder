import * as React from 'react';

import burgerLogo from '../../assets/images/133 burger-logo.png';
import classes from './Logo.module.css';
 
const Logo = () => {
    return ( 
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="Burger" />
        </div>
     );
}
 
export default Logo;