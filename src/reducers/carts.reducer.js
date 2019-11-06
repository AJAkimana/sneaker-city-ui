import { fulfilled, cartInitialState } from '../utils';
import { GET_CARTS_ITEMS } from '../actions/types';

const initialState = { ...cartInitialState };
export const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(GET_CARTS_ITEMS):
      return {
        ...state,
        hasFetched: true,
        products: action.payload.data.data
      };
    default:
      return state;
  }
};
