import React from "react";

import classes from "./Button.module.css";

export interface ButtonProps {
  name: string;
  click: () => any;
}

const Button: React.FC<ButtonProps> = ({ name, click }) => {
  return (
    <button className={classes.OrderButton} onClick={click}>
      {name}
    </button>
  );
};

export default Button;
