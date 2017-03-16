import * as types from './products-actions-types';


export function getProductSuccess(product) {
  return {
    type: types.GET_PRODUCT_SUCCESS,
    product
  };
}

