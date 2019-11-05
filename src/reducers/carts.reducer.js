import { fulfilled, cartInitialState } from '../utils';
import { GET_CARTS_ITEMS, ADD_ITEM_TO_CART } from '../actions/types';

const initialState = { ...cartInitialState };
export const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(GET_CARTS_ITEMS):
      return {
        ...state,
        hasFetched: true,
        products: action.payload.data.data
      };
    case fulfilled(ADD_ITEM_TO_CART):
      return {
        ...state,
        addSucces: true,
        message: action.payload.data.message
      };
    default:
      return state;
  }
};
