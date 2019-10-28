import ACTION from '../actionsTypes/actionsTypes';

export const addProductToBasket = (item, col = 1) => ({
    type: ACTION.ADD_PRODUCT_TO_BASKET,
    item,
    col
});

export const deleteProductFromBasket = (item, col = 1) => ({
    type: ACTION.DELETE_PRODUCT_FROM_BASKET,
    item,
    col
});

export const productSearch = (string) => ({
    type: ACTION.PRODUCT_SEARCH,
    string
});

export const clearProductFound = (productFound = []) => ({
    type: ACTION.PRODUCT_FOUND,
    productFound
});