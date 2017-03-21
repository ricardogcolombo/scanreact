import * as actions from '../actions/products-actions-types'

const productListReducer = function(state = {}, action) {
    switch (action.type) {
        case actions.GET_LIST_SUCCESS:
            return Object.assign({}, state, action.productList);

        default:
            return state;
    }
}
export default productListReducer;
