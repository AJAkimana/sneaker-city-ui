import { fulfilled, productsInitialState } from '../utils';
import { GET_ALL_PRODUCTS } from '../actions/types';

export const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case fulfilled(GET_ALL_PRODUCTS):
      return {
        ...state,
        hasFetched: true,
        products: action.payload.data.data
      };
    default:
      return state;
  }
};
