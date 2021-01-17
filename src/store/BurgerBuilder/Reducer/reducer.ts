import { Action } from '../../IAction';

import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENT } from '../Actions/actions';

interface BurgerState {
    burger: any,
    totalPrice: number;
}

const initialState: BurgerState = {
    burger: [],
    totalPrice: 4,
}

// const setIngredient = (state: { [key: string]: string; } = {}, action: Action) => {
//     return {...state,  burger: action.payload, totalPrice: 4 }};
// }

const addIngredient = (state: BurgerState, action: Action) => {
    // const updateIngredient = [...state.burger, action.payload];
    const updatedIngredient = { [action.payload.type]: action.payload.type + 1 };
    const updatedIngredients = [...state.burger, updatedIngredient];
    return {
        burger: updatedIngredients,
        totalPrice: state.totalPrice + action.payload.price,
    }
}

const removeIngredient = (state: BurgerState, action: Action) => {
    const updateIngredient = [...state.burger, action.payload];
    return {
        burger: updateIngredient,
        totalPrice: state.totalPrice - action.payload.price,
    }
}





export const burgerBuilderReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return addIngredient(state, action);
        case REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        // case SET_INGREDIENT:
        //     return setIngredient;
        default:
            return state;
    }
}