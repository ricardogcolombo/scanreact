import axios from 'axios';
import store from '../store';
import {
    getProductSuccess
} from '../actions/products-actions';

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
        }))
        .catch(err => console.log(err));
}
