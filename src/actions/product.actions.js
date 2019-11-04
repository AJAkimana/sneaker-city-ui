import { GET_ALL_PRODUCTS } from './types';
import { http } from '../helpers';

export const getAllProducts = () => dispatch => {
  dispatch({
    type: GET_ALL_PRODUCTS,
    payload: http.get('/products')
  });
};
