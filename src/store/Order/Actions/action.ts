import axios from '../../../firebase';

import { BurgerStateInterface } from "../../BurgerBuilder/Reducer/reducer";

export const PURCHASE_BURGER_START = 'PURCHASE_BURGER_START';
export const PURCHASE_BURGER_SUCCESS = 'PURCHASE_BURGER_SUCCESS';
export const PURCHASE_BURGER_FAIL = 'PURCHASE_BURGER_FAIL';
export const PURCHASE_INIT = 'PURCHASE_INIT';

export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED';

export interface Order {
    orderData: BurgerStateInterface
}

export const purchaseBurgerStart = () => ({
    type: PURCHASE_BURGER_START
});

export const purchaseBurgerSuccess = (id: string, orderData: Order) => ({
    type: PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData, 
});

export const purchaseBurgerFailed = (error: string) => ({
    type: PURCHASE_BURGER_FAIL,
    error: error
});

export const purchaseBurger = (orderData: Order) => {
   return (dispatch: any) => {
        dispatch(purchaseBurgerStart());
        axios.post('orders.json', orderData)
            .then(response => dispatch(purchaseBurgerSuccess(response.data.name, orderData)))
            .catch(error => dispatch(purchaseBurgerFailed(error)));
    }
};

export const purchaseInit = () => ({
    type: PURCHASE_INIT
});




