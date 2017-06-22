import merge from 'lodash/merge';

import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../actions/project_actions';

const projectReducer = (state = {}, action)=> {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return merge({}, projects);
    case RECEIVE_PROJECT:
      newState[action.project.id] = action.project;
      return newState[action.project.id][rewards_attributes] = [action.project.rewards];
    case REMOVE_PROJECT:
      delete newState[action.project.id];
      return remState;
    default:
      return state;
  }
};

export default projectReducer;
