import merge from 'lodash/merge';

import {
  RECEIVE_CATEGORIES, RECEIVE_CATEGORY_PROJECTS
} from '../actions/category_actions';

const CategoryReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return merge({}, state, action.categories);
    case RECEIVE_CATEGORY_PROJECTS:
      return merge({}, state, action.category);
    default:
      return state;
  }
};

export default CategoryReducer;
