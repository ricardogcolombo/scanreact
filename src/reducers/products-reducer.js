import * as actions from '../actions/products-actions-types'
const emptyProduct = {
    descripcion: '',
    marca: '',
    codean: '',
    pic:'',
    codart: ''
};
const productsReducer = function(state = {}, action) {
    switch (action.type) {
        case actions.GET_PRODUCT_SUCCESS:
            return Object.assign({}, state, action.product);
        case actions.CLEAR_PRODUCT:
            return Object.assign({}, state, emptyProduct);
        default:
            return state;
    }
}



export default productsReducer;
