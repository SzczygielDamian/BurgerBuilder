import React from 'react';
import Navigation from '../Navigation/Navigation';

import classes from './ToolBar.module.css';
 
const ToolBar = () => {
    return ( 
        <header className={classes.Toolbar}>
            <nav>
                <Navigation/>
            </nav>
        </header>
     );
}
 
export default ToolBar;