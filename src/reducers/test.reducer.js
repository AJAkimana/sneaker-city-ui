import { fulfilled, testInitialState } from '../utils';
import { TEST_ACTION_TYPE } from '../actions';

export const testReducer = (state = testInitialState, action) => {
  switch (action.type) {
    case fulfilled(TEST_ACTION_TYPE):
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};
