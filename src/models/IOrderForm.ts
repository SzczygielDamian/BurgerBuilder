
import { BurgerStateInterface } from "./IBurgerIngredients";
import { IOrder } from "./IOrder";

export interface IOrderForm extends BurgerStateInterface, IOrder {
    id?: string;
}
