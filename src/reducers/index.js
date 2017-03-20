import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import productListReducer from './productList-reducer';

const rootReducer = combineReducers({
    product:productsReducer ,
    productList:productListReducer
});

export default rootReducer;
