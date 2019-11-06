import {
  fulfilled,
  productsInitialState,
  productInitialState,
  cartInitialState
} from '../utils';
import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT } from '../actions/types';

const initialState = {
  ...productsInitialState,
  ...productInitialState,
  cartInitialState
};
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case fulfilled(GET_ALL_PRODUCTS):
      return {
        ...state,
        hasFetched: true,
        messsage: '',
        products: action.payload.data.data
      };
    case fulfilled(GET_ONE_PRODUCT):
      return {
        ...state,
        hasFetched: true,
        messsage: '',
        product: action.payload.data.data
      };
    default:
      return state;
  }
};
