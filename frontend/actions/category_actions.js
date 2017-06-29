import * as APIUtil from '../util/category_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY_PROJECTS = "RECEIVE_CATEGORY_PROJECTS";

export const receiveCategories = categories => {
  return { type: RECEIVE_CATEGORIES, categories };
};

export const receiveCategoryProjects = ({category, projects}) => {
  return { type: RECEIVE_CATEGORY_PROJECTS, category, projects };
};

export const fetchCategories = () => dispatch => {
  return APIUtil.fetchCategories().then(
    categories => dispatch(receiveCategories(categories)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const fetchCategoryProjects = id => dispatch => {
  return APIUtil.fetchCategoryProjects(id).then(
    payload => dispatch(receiveCategoryProjects(payload)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};
