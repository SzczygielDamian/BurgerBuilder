import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import { fetchIngredients } from "../../store/Ingredients/Actions/actions";
import { RootState } from "../../store/rootReducer";

export interface BurgerBuilderProps {}

const BurgerBuilder: React.FC<BurgerBuilderProps> = () => {
  const dispatch = useDispatch();
  const burgerState = useSelector((store: RootState) => store.burger);

  useEffect(() => {
    dispatch(fetchIngredients());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Burger burgerState={burgerState}/>
      <BuildControls burgerState={burgerState}/>
    </div>
  );
};

export default BurgerBuilder;
