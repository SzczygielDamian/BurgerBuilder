import { BurgerStateInterface } from '../../../models/IBurgerIngredients';
import { Action } from '../../IAction';

import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENT } from '../Actions/actions';

const initialState = {
    burger: {},
    totalPrice: 4,
}

const setIngredients = (state: BurgerStateInterface , action: Action) => {    
    return {...state, burger: action.payload };
}

const addIngredient = (state: BurgerStateInterface, action: Action) => {
    const updatedIngredient = { [action.payload.type]: state.burger[action.payload.type] + 1 };
    const updatedIngredients = {...state.burger, ...updatedIngredient};
    return {
        burger: updatedIngredients,
        totalPrice: state.totalPrice + action.payload.price,
    }
}

const removeIngredient = (state: BurgerStateInterface, action: Action) => {
    const updatedIngredient = { [action.payload.type]: state.burger[action.payload.type] - 1 };
    const updatedIngredients = {...state.burger, ...updatedIngredient};
    return {
        burger: updatedIngredients,
        totalPrice: state.totalPrice - action.payload.price,
    }
}

export const burgerBuilderReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case SET_INGREDIENT:
            return setIngredients(state, action);
        case ADD_INGREDIENT:
            return addIngredient(state, action);
        case REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        default:
            return state;
    }
}