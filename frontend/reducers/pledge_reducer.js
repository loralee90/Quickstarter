import merge from 'lodash/merge';

import { RECEIVE_PLEDGE } from '../actions/pledge_actions';

const PledgeReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_PLEDGE:
      return action.pledge;
    default:
      return state;
  }
};

export default PledgeReducer;
