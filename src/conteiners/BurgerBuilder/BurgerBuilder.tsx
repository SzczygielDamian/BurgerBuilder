import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import { fetchIngredients } from "../../store/Ingredients/Actions/actions";

export interface BurgerBuilderProps {}

const BurgerBuilder: React.FC<BurgerBuilderProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  return (
    <div>
      <Burger />
      <BuildControls />
    </div>
  );
};

export default BurgerBuilder;
