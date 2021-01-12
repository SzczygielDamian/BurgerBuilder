import React from 'react';

export interface ButtonProps {
    name: string;
}
 
const Button: React.FC<ButtonProps> = ({ name }) => {
    return ( 
        <button>{name}</button>
    );
}
 
export default Button;