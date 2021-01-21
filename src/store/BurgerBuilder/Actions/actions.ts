export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const SET_INGREDIENT = 'SET_INGREDIENT';

export interface BurgerInterface {
    id?: string;
    label: string;
    price: number;
    type: string;
}


export const setIngredients = (ingredients: {[key: string]: string}) => ({
    type: SET_INGREDIENT,
    payload: ingredients
});

export const addIngredient = (ingredient: BurgerInterface) => ({
    type: ADD_INGREDIENT,
    payload: ingredient,
});

export const removeIngredient = (ingredient: BurgerInterface) => ({
    type: REMOVE_INGREDIENT,
    payload: ingredient,
});

