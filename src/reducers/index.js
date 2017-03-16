import { combineReducers } from 'redux';
import productsReducer from './products-reducer';

const rootReducer = combineReducers({
    productsState: productsReducer 
});
export default rootReducer;
