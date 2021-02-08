import * as React from "react";
import { BurgerStateInterface } from "../../../models/IBurgerIngredients";

import Button from "../../../UI/Button/Button";

export interface OrderSummaryProps {
  burgerState: BurgerStateInterface;
  closeOrderModal: () => any;
  openFormModal: () => any;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  burgerState,
  closeOrderModal,
  openFormModal,
}) => {
  const ingredientSummry = Object.keys(burgerState.burger).map((ingKey) => {
    return (
      <li key={ingKey}>
        <span>{ingKey}</span>: {burgerState.burger[ingKey]}
      </li>
    );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>Burger Ingredients</p>
      <ul>{ingredientSummry}</ul>
      <p>
        <strong>Total Price: {burgerState.totalPrice.toFixed(2)}</strong>
      </p>
      <Button name={"CANCEL"} click={closeOrderModal} />
      <Button name={"BUY"} click={openFormModal} />
    </>
  );
};

export default OrderSummary;
