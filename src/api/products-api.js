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

function getProductData(id) {
    return axios.get('https://jqpb04e10511.us1.hana.ondemand.com/Backend-LA/articulos.xsjs?codean=' + id)
}

function getProductImage() {
    return axios.get('https://jqpb04e10511.us1.hana.ondemand.com/Backend-LA/imagenes.xsjs?imageID=LA02')
}


export function getProduct(id) {
    return axios.all([getProductData(id), getProductImage()])
        .then(axios.spread((productData, image) => {
            const product = Object.assign({}, productData.data.articulos[0], image.data);
            store.dispatch(getProductSuccess(product));
            store.dispatch(hideLoadIndicator());
        }))
        .catch(err => console.log(err));
}


//TODO replace for service call
export function getProductList() {
    let productList = {
        results: [{
            codean: 7793225001046,
            descripcion:'AMARETTIS'
        }, {
            codean: 7798177400121,
            descripcion:'BARQUILLOS DULCES SECOS'
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
