import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';
import RewardReducer from './reward_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectReducer,
  rewards: RewardReducer
});

export default RootReducer;
