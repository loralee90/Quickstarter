import merge from 'lodash/merge';

import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT,
  EDIT_PROJECT
} from '../actions/project_actions';

import { RECEIVE_CATEGORY_PROJECTS } from '../actions/category_actions';

const ProjectReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return merge(newState, action.projects);
    case RECEIVE_PROJECT:
      newState[action.project.id] = action.project;
      return newState;
    case REMOVE_PROJECT:
      delete newState[action.project.id];
      return newState;
    case EDIT_PROJECT:
      newState[action.project.id] = action.project;
      return newState;
    case RECEIVE_CATEGORY_PROJECTS:
      merge(newState, action.projects);
      return newState;
    default:
      return state;
  }
};

export default ProjectReducer;
