import React from "react";

import classes from "./CreateBurger.module.css";

export interface CreateBurgerProps {
  label: string;
  add: () => any;
  remove: () => any;
  countIngredient: number;
}

const CreateBurger: React.FC<CreateBurgerProps> = ({
  label,
  add,
  remove,
  countIngredient,
}) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>
        {label} : {countIngredient}
      </div>
      <button
        className={classes.Less}
        onClick={remove}
        disabled={countIngredient === 0}
      >
        Less
      </button>
      <button className={classes.More} onClick={add}>
        More
      </button>
    </div>
  );
};

export default CreateBurger;
