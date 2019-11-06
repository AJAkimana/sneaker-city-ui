import { GET_CARTS_ITEMS, ADD_ITEM_TO_CART, FINISH_SHOPPING } from './types';
import { http } from '../helpers';

export const getUserCartsItems = username => dispatch => {
  dispatch({
    type: GET_CARTS_ITEMS,
    payload: http.get(`/carts/${username}`)
  });
};

export const addItemToCart = cartInfo => dispatch => {
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: http.post(`/carts`, cartInfo)
  });
};

export const finishShoping = () => dispatch => {
  dispatch({
    type: FINISH_SHOPPING,
    payload: http.post(`/carts/finish-shoping`)
  });
};
