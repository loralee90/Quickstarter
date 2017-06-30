import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const receiveSearchResults = projects => {
  return { type: RECEIVE_SEARCH_RESULTS, projects };
};

export const fetchSearchResults = search => dispatch => {
  return APIUtil.fetchSearchResults(search).then(
    projects => dispatch(receiveSearchResults(projects))
  );
};
