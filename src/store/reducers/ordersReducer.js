import {
    FETCH_ORDER_SUCCESS,
    ORDER_COMPLETED,
    ORDER_FAILURE,
    ORDER_REQUEST,
    ORDER_SUCCESS
} from "../actions/action-types";

const initialState = {
    orders: {},
    loading: false,
    err: null,
    isOrdered: false
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ORDER_REQUEST:
            return {...state, loading: true};
        case ORDER_SUCCESS:
            return {...state, loading: false, isOrdered: true};
        case ORDER_FAILURE:
            return {...state, loading: false, err: action.err};
        case ORDER_COMPLETED:
            return {...state, isOrdered: false};
        case FETCH_ORDER_SUCCESS:
            return {...state, orders: action.orders, loading: false};
        default:
            return state;
    }

};

export default reducer;
