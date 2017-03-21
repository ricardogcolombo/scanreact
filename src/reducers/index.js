import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import productListReducer from './productList-reducer';
import loadIndicatorReducer from './loadIndicator-reducer';

const rootReducer = combineReducers({
    product:productsReducer ,
    productList:productListReducer,
    loadIndicator:loadIndicatorReducer
});

export default rootReducer;
