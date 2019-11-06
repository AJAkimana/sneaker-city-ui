import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT } from './types';
import { http } from '../helpers';

export const getAllProducts = (page = 1, pageSize = 10) => dispatch => {
  dispatch({
    type: GET_ALL_PRODUCTS,
    payload: http.get(`/products?page=${page}&pageSize=${pageSize}`)
  });
};

export const getProductInfo = productId => dispatch => {
  dispatch({
    type: GET_ONE_PRODUCT,
    payload: http.get(`/products/${productId}`)
  });
};
