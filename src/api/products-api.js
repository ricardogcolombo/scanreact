import axios from 'axios';
import store from '../store';
import {
    getProductSuccess,
    getProductListSuccess
} from '../actions/products-actions';

import{
hideLoadIndicator
} from '../actions/loadIndicator-actions';

/**
 * Get all users
 */
export function getProduct(id) {
    return axios.get('https://jqpb04e10511.us1.hana.ondemand.com/Backend-LA/articulos.xsjs?codean=' + id)
        .then(productData => {
            store.dispatch(getProductSuccess(productData.data.articulos[0]));
            store.dispatch(hideLoadIndicator());
        })
        .catch(err => console.log(err));
}

//TODO replace for service call
export function getProductList() {
    let productList = {
        results: [{
            codean:7798158701452,
            descripcion:'ANANA NATURAL'
        }, {
            codean: 7798024397031,
            descripcion:'ARROZ CAROLINA DOBLE'
        }, {
            codean: 7792184002026,
            descripcion:'BISCUIT'
        }, {
            codean: 7790040545939,
            descripcion:'BIZCOCHOS 3 CEREALES'
        }, {
            codean: 7792200000319,
            descripcion:'BIZCOCHOS AZUCARADOS'
        }]
    };
    store.dispatch(getProductListSuccess(productList));

}
