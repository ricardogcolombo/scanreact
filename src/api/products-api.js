import axios from 'axios';
import store from '../store';
import {
    getProductSuccess
} from '../actions/products-actions';

/**
 * Get all users
 */

export function getProduct(id) {
    return axios.get('https://jqpb04e10511.us1.hana.ondemand.com/Backend-LA/articulos.xsjs?codart=' + id)
        .then(response => {
            const product = response.data.articulos[0];
            store.dispatch(getProductSuccess(product));
            return response;
        })
        .catch(err => console.log(err));
}


