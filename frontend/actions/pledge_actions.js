import * as APIUtil from '../util/pledge_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_PLEDGE = "RECEIVE_PLEDGE";

export const receivePledge = pledge => {
  return { type: RECEIVE_PLEDGE, pledge };
};

export const createPledge = pledge => dispatch => {
  return APIUtil.createPledge(pledge).then(
    newPledge => {
      return dispatch(receivePledge(newPledge));
    },
    err => {
      return dispatch(receiveErrors(err.responseJSON));
    }
  );
};
