import { combineReducers } from 'redux';
import { testReducer } from './test.reducer';
import { productsReducer } from './product.reducer';

export default combineReducers({
  test: testReducer,
  product: productsReducer
});
