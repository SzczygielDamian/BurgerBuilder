import { Action } from "../../IAction";

import {
  FETCH_INGREDIENTS_START,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_FAILED,
} from "../Actions/actions";

const initialState = {
  ingredients: null,
  isFetching: false,
  error: null,
};

export const ingredientsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_INGREDIENTS_START:
      return { ...state, isFetching: true };
    case FETCH_INGREDIENTS_SUCCESS:
      return { isFetching: false, ingredients: action.payload, error: null };
    case FETCH_INGREDIENTS_FAILED:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
