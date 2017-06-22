import merge from 'lodash/merge';

import { RECEIVE_PROJECT, EDIT_PROJECT } from '../actions/project_actions';

const RewardReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge(newState, action.rewards);
    case EDIT_PROJECT:
      return merge(newState, action.rewards);
    default:
      return state;
  }
};

export default RewardReducer;
