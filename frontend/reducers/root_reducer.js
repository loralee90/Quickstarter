import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';
import RewardReducer from './reward_reducer';
import CategoryReducer from './category_reducer';
import ErrorReducer from './error_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectReducer,
  rewards: RewardReducer,
  categories: CategoryReducer,
  errors: ErrorReducer
});

export default RootReducer;
