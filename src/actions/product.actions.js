import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT } from './types';
import { http } from '../helpers';

export const getAllProducts = () => dispatch => {
  dispatch({
    type: GET_ALL_PRODUCTS,
    payload: http.get('/products')
  });
};

export const getProductInfo = productId => dispatch => {
  dispatch({
    type: GET_ONE_PRODUCT,
    payload: http.get(`/products/${productId}`)
  });
};
