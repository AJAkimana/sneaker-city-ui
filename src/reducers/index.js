import { combineReducers } from 'redux';
import { testReducer } from './test.reducer';
import { productsReducer } from './product.reducer';
import { cartsReducer } from './carts.reducer';

export default combineReducers({
  test: testReducer,
  product: productsReducer,
  cart: cartsReducer
});
