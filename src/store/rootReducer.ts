import { combineReducers } from 'redux';

import { ingredientsReducer } from './Ingredients/reducer/reducer';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
})

export type RootState = ReturnType<typeof rootReducer>