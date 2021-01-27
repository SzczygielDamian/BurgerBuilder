import axios from '../../../firebase';

import { IOrder } from '../../../models/IOrder';
import { IOrderForm } from '../../../models/IOrderForm';

export const PURCHASE_BURGER_START = 'PURCHASE_BURGER_START';
export const PURCHASE_BURGER_SUCCESS = 'PURCHASE_BURGER_SUCCESS';
export const PURCHASE_BURGER_FAIL = 'PURCHASE_BURGER_FAIL';
export const PURCHASE_INIT = 'PURCHASE_INIT';

export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED';


export const purchaseBurgerStart = () => ({
    type: PURCHASE_BURGER_START
});

export const purchaseBurgerSuccess = (id: string, orderData: IOrder) => ({
    type: PURCHASE_BURGER_SUCCESS,
    payload: {id, orderData}, 
});

export const purchaseBurgerFailed = (error: string) => ({
    type: PURCHASE_BURGER_FAIL,
    error: error
});

export const purchaseBurger = (orderData: IOrderForm) => {
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

export const fetchOrdersStart = () => ({
    type: FETCH_ORDERS_START
});

export const fetchOrdersSuccess = (order: IOrderForm[]) => ({
    type: FETCH_ORDERS_SUCCESS,
    payload: order
});

export const fetchBurgerFailed = (error: string) => ({
    type: FETCH_ORDERS_FAILED,
    payload: error
});

export const fetchOrders = () => {
    return (dispatch: any) => {
        dispatch(fetchOrdersStart());
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                dispatch(fetchOrdersSuccess(fetchedOrders))
            })
    }
};



