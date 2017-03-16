import * as actions from '../actions/products-actions'

const product = {}

const productsReducer = function(state = product, action) {
    switch (action.type) {
        case actions.GET_PRODUCT_SUCCESS:
            return Object.assign({}, state, { product: product.data.articulos[0] }); 
        default: 
            return state;
    }
}

export default productsReducer;
