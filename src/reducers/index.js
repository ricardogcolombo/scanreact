import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import productListReducer from './productList-reducer';
import modalReducer from './modal-reducer';

const rootReducer = combineReducers({
    product:productsReducer ,
    productList:productListReducer,
    modal: modalReducer
});

export default rootReducer;
