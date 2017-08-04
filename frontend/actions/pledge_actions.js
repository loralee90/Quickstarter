import * as APIUtil from '../util/pledge_api_util';
import { receiveErrors } from './error_actions';
import { receiveProject } from './project_actions';

export const RECEIVE_PLEDGE = "RECEIVE_PLEDGE";

export const receivePledge = pledge => {
  return { type: RECEIVE_PLEDGE, pledge };
};

export const createPledge = pledge => dispatch => {
  return APIUtil.createPledge(pledge).then(
    project => {
      return dispatch(receiveProject(project));
    }
  );
};
