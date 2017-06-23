import merge from 'lodash/merge';

import { RECEIVE_CATEGORIES } from '../actions/category_actions';

const CategoryReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return merge({}, state, action.categories);
    default:
      return state;
  }
};

export default CategoryReducer;
