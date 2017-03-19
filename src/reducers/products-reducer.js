import * as actions from '../actions/products-actions-types'

const product = {}

const productsReducer = function(state = {}, action) {
    switch (action.type) {
        case actions.GET_PRODUCT_SUCCESS:
            return Object.assign({}, state, action.product);
        case actions.GET_LIST_SUCCESS:
            return Object.assign({}, state, action.results);

        default:
            return state;
    }
}

export default productsReducer;
