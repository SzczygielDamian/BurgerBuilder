import React from 'react';

import classes from './Auth.module.css';

export interface AuthProps {
    
}
 
const Auth: React.FC<AuthProps> = () => {
    return ( 
        <div className={classes.Auth}>
            <form>
                <input type="email" placeholder="Mail" className={classes.InputElement} />
                <label className={classes.Label} />
                <input type="password" placeholder="Password" className={classes.InputElement} />
                <label className={classes.Label} />
                <button className={[classes.Button, classes.Success].join(' ')}>Submit</button>
            </form>

            <button className={[classes.Button, classes.Danger].join(' ')}>SWITCH TO SIGN IN</button>
        </div>
     );
}
 
export default Auth;