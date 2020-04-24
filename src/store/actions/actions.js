import {
    ADD_INGREDIENT,
    FETCH_ORDER_SUCCESS, ORDER_COMPLETED,
    ORDER_FAILURE,
    ORDER_REQUEST,
    ORDER_SUCCESS,
    REMOVE_INGREDIENT
} from "./action-types";
import axios from "../../axios-order";

export const addIngredient = ingredientName => {
    return {type: ADD_INGREDIENT, ingredientName};
};
export const removeIngredient = ingredientName => {
    return {type: REMOVE_INGREDIENT, ingredientName};
};

export const orderRequest = () => {
    return {type: ORDER_REQUEST};
};

export const orderSuccess = () => {
    return {type: ORDER_SUCCESS};
};

export const orderFailure = (err) => {
    return {type: ORDER_FAILURE, err};
};

export const fetchOrderSuccess = orders => {
    return {type: FETCH_ORDER_SUCCESS, orders};
};

export const orderCompleted = () => {
    return {type: ORDER_COMPLETED};
};

export const createOrder = (e, customer) => {
    e.preventDefault();
    return (dispatch, getState) => {
        dispatch(orderRequest());
        const order = {
            ingredients: getState().burger.ingredients,
            price: getState().burger.totalPrice,
            customer
        };
        axios.post('/orders.json', order).then(() => {
            dispatch(orderSuccess());
        }).catch(err => {
            dispatch(orderFailure(err));
        });
    };
};

export const fetchOrders = () => {
    return dispatch => {
        dispatch(orderRequest());
        axios.get('/orders.json').then(response => {
            const orders = response.data;
            dispatch(fetchOrderSuccess(orders || {}));
        }).catch((err) => {
            dispatch(orderFailure(err));
        });
    }
};
