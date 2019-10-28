import ACTION from '../actions/actionsTypes/actionsTypes';

import { CATEGORIES } from "../utils/textForPages"

const initialState = {
    allProduct: CATEGORIES || [],
    productFound: [],
    basket: [],
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.NEW_PRODUCT_IN_A_BASKET: {
            return {
                ...state,
                basket: action.basket,
                error: null
            }
        }
        case ACTION.PRODUCT_FOUND: {
            return {
                ...state,
                productFound: action.productFound,
                error: null
            }
        }
        default: {
            return state;
        }
    }
}


