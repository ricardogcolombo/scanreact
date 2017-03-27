import {
    combineReducers
} from 'redux';
import productsReducer from './products-reducer';
import productListReducer from './productList-reducer';
import modalReducer from './modal-reducer';
import loadIndicatorReducer from './loadIndicator-reducer';

const rootReducer = combineReducers({
    product: productsReducer,
    productList: productListReducer,
    modal: modalReducer,
    loadIndicator: loadIndicatorReducer
});

export default rootReducer;
