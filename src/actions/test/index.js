import { TEST_ACTION_TYPE } from '../types';

export const checkReducer = () => dispatch => {
  dispatch({
    type: TEST_ACTION_TYPE,
    payload: 'It must work'
  });
};
