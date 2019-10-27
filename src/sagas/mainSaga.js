import ACTION from "../actions/actionsTypes/actionsTypes";

import { put, select } from 'redux-saga/effects';

import { cloneDeep } from "lodash"

export function* addProductToBasketSaga({item, col}) {
    try {

        const { mainReducer: { basket: oldBasket } } = yield select();

        const newBasket = cloneDeep(oldBasket);
        newBasket.push({
            ...item,
            col
        });


        yield put({type: ACTION.NEW_PRODUCT_IN_A_BASKET, basket: newBasket});

    } catch (e) {
        yield put({type: ACTION.MAIN_ERROR, error: e})
    }
}

export function* deleteProductFromBasketSaga({item, col}) {
    try {

        const { mainReducer: { basket: oldBasket } } = yield select();

        console.log("oldBasket", oldBasket);

        const newBasket = oldBasket.reduce( (accumulator, product) => {
            if(product.id === item.id){
                if(product.col <= col){
                    return accumulator
                }else{
                    return accumulator.push({
                        ...product,
                        col: product.col - col
                    });
                }
            }else {
                return accumulator.push(product);
            }
        }, []);

        console.log("newBasket", newBasket);

        yield put({type: ACTION.NEW_PRODUCT_IN_A_BASKET, basket: newBasket});

    } catch (e) {
        yield put({type: ACTION.MAIN_ERROR, error: e})
    }
}

export function* productSearchSaga({string}) {
    try {

        const { mainReducer: { allProduct } } = yield select();

        const productFound = [];

        allProduct.forEach( categoriesWithProducts => {
            const products = categoriesWithProducts.products;

            products.forEach( product => {

                const productString = product.text.toLowerCase();
                const findString = string.toLowerCase();

                if(productString.includes(findString)){
                    productFound.push(product)
                }
            })
        });


        yield put({type: ACTION.PRODUCT_FOUND, productFound});

    } catch (e) {
        yield put({type: ACTION.MAIN_ERROR, error: e})
    }
}
