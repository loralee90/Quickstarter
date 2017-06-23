import * as APIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const receiveCategories = categories => {
  return { type: RECEIVE_CATEGORIES, categories };
};

export const fetchCategories = () => dispatch => {
  return APIUtil.fetchCategories().then(
    categories => dispatch(receiveCategories(categories))
  );
};
