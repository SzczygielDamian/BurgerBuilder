import * as React from "react";
import { BurgerStateInterface } from "../../../store/BurgerBuilder/Reducer/reducer";
import Button from "../../../UI/Button/Button";

export interface OrderSummaryProps {
  burgerState: BurgerStateInterface;
  clickOrder: () => any;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  burgerState,
  clickOrder,
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
      <Button name={"CANCEL"} click={clickOrder} />
      {/* <Button name={"BUY"} click={}/> */}
    </>
  );
};

export default OrderSummary;
