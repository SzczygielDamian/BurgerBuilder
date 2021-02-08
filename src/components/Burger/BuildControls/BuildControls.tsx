import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Price from "./Price/Price";
import Button from "../../../UI/Button/Button";
import CreateBurger from "./CreateBurger/CreateBurger";

import classes from "./BuildControls.module.css";

import { RootState } from "../../../store/rootReducer";

import { IngredientsInterface } from "../../../store/Ingredients/Actions/actions";
import { BurgerStateInterface } from "../../../models/IBurgerIngredients";

import {
  addIngredient,
  removeIngredient,
} from "../../../store/BurgerBuilder/Actions/actions";

interface BuildControlsProps {
  burgerState: BurgerStateInterface;
  clickOrder: () => any;
}

const BuildControls: React.FC<BuildControlsProps> = ({
  burgerState,
  clickOrder,
}) => {
  const dispatch = useDispatch();
  const controls = useSelector(
    (store: RootState) => store.ingredients.ingredients
  );

  const builderControls =
    controls != null
      ? controls.map((item: IngredientsInterface) => {
          return (
            <CreateBurger
              key={item.id}
              label={item.label}
              countIngredient={burgerState.burger[item.type]}
              add={() => dispatch(addIngredient(item))}
              remove={() => dispatch(removeIngredient(item))}
            />
          );
        })
      : null;

  return (
    <div className={classes.BuildControls}>
      <Price totalPrice={burgerState.totalPrice} />
      {builderControls}
      <Button name={"Order Now"} click={clickOrder} />
    </div>
  );
};

export default BuildControls;
