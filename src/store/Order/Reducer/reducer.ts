import { Action } from "../../IAction";
import {
  FETCH_ORDERS_FAILED,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  PURCHASE_BURGER_FAIL,
  PURCHASE_BURGER_START,
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_INIT,
} from "../Actions/action";

const initialState = {
  orders: [],
  isFetching: false,
  error: null,
};

export const orderReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case PURCHASE_INIT:
      return { ...state };
    case PURCHASE_BURGER_START:
      return { ...state, isFetching: true };
    case PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.payload.orderData,
        id: action.payload.orderId,
      };
      return {
        ...state,
        isFetching: false,
        orders: [...state.orders, newOrder],
      };
    case PURCHASE_BURGER_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    case FETCH_ORDERS_START:
      return { ...state, isFetching: true };
    case FETCH_ORDERS_SUCCESS:
      return { isFetching: false, orders: action.payload, error: null };
    case FETCH_ORDERS_FAILED:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
