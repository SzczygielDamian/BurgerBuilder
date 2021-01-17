import { combineReducers } from 'redux';
import { burgerBuilderReducer } from './BurgerBuilder/Reducer/reducer';

import { ingredientsReducer } from './Ingredients/reducer/reducer';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burger: burgerBuilderReducer,
})

export type RootState = ReturnType<typeof rootReducer>