import { Dispatch } from 'redux';
import axios from '../../../firebase';

export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const EDIT_INGREDIENTS = 'EDIT_INGREDIENTS';
export const DELETE_INGREDIENTS = 'DELETE_INGREDIENTS';
export const FETCH_INGREDIENTS_START = 'FETCH_INGREDIENTS_START';
export const FETCH_INGREDIENTS_SUCCESS = 'FETCH_INGREDIENTS_SUCCESS';
export const FETCH_INGREDIENTS_FAILED = 'FETCH_INGREDIENTS_SUCCESS';

export interface IngredientsInterface {
    id?: string;
    label: string;
    type: string;
}

export const addIngredients = (ingredients: IngredientsInterface) => ({
    type: ADD_INGREDIENTS,
    payload: ingredients
});

export const fetchIngredientsStart = () => {
    return {
        type: FETCH_INGREDIENTS_START
    }
}

export const fetchingredientsFailed = (error: string) => {
    return {
        type: FETCH_INGREDIENTS_FAILED,
        error: error
    }
}

export const fetchIngredientsSuccess = (ingredients: IngredientsInterface[]) => {
    return {
        type: FETCH_INGREDIENTS_SUCCESS,
        payload: ingredients
    }
}

export const fetchIngredients = () => {
    return (dispatch: any) => {
        dispatch(fetchIngredientsStart());
        axios.get('/Ingredients.json')
            .then(res => {
                const fetchedIngredients = [];
                for (let key in res.data) {
                    fetchedIngredients.push({
                        ...res.data[key],
                        id: key
                    })
                }
                dispatch(fetchIngredientsSuccess(fetchedIngredients))
            })
            .catch(err => {
                dispatch(fetchingredientsFailed(err))
            });
    }
};