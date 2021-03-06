import * as types from './products-actions-types';


export function getProductSuccess(product) {
    return {
        type: types.GET_PRODUCT_SUCCESS,
        product
    };
}
export function clearProduct() {
    return {
        type: types.CLEAR_PRODUCT
    }
}

export function getProductListSuccess(productList) {
    return {
        type: types.GET_LIST_SUCCESS,
        productList
    };
}
