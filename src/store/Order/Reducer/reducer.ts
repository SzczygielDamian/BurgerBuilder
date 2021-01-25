import Orders from '../../../conteiners/Orders/Orders';
import { Action } from '../../IAction';
import { PURCHASE_BURGER_FAIL, PURCHASE_BURGER_START, PURCHASE_BURGER_SUCCESS, PURCHASE_INIT } from '../Actions/action';

const initialState = {
    orders: [],
    isFetching: false,
    error: null
}

export const orderReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case PURCHASE_INIT:
            return { ...state };
        case PURCHASE_BURGER_START:
            return { ...state,  isFetching: true};
        case PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.payload.orderData,
                id: action.payload.orderId,
            };
            return {
                ...state,
                isFetching: false,
                orders: [...state.orders, newOrder]
            };
        case PURCHASE_BURGER_FAIL:
            return { ...state, isFetching: false, error: action.payload};
        default:
            return state;
            
    }
}