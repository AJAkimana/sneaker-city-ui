import { fulfilled, productsInitialState, productInitialState } from '../utils';
import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT } from '../actions/types';

const initialState = { ...productsInitialState, ...productInitialState };
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(GET_ALL_PRODUCTS):
      return {
        ...state,
        hasFetched: true,
        products: action.payload.data.data
      };
    case fulfilled(GET_ONE_PRODUCT):
      return {
        ...state,
        hasFetched: true,
        product: action.payload.data.data
      };
    default:
      return state;
  }
};
