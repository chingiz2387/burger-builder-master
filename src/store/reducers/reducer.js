import {ADD_INGREDIENT, REMOVE_INGREDIENT} from "../actions/action-types";

const initialState = {
    ingredients: {
        meat: 0,
        cheese: 0,
        bacon: 0,
        salad: 0
    },
    totalPrice: 200,
};

const INGREDIENT_PRICES = {
    salad: 50,
    cheese: 200,
    meat: 500,
    bacon: 300
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;
    }
};

export default reducer;
