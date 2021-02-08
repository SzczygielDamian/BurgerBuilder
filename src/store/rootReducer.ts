import { combineReducers } from "redux";
import { burgerBuilderReducer } from "./BurgerBuilder/Reducer/reducer";

import { ingredientsReducer } from "./Ingredients/reducer/reducer";
import { orderReducer } from "./Order/Reducer/reducer";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burger: burgerBuilderReducer,
  orders: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
