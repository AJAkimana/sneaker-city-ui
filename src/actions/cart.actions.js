import { GET_CARTS_ITEMS } from './types';
import { http } from '../helpers';

export const getUserCartsItems = username => dispatch => {
  dispatch({
    type: GET_CARTS_ITEMS,
    payload: http.get(`/carts/${username}`)
  });
};
