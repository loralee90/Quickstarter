import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';
import RewardReducer from './reward_reducer';
import CategoryReducer from './category_reducer';
import ErrorReducer from './error_reducer';
import PledgeReducer from './pledge_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectReducer,
  rewards: RewardReducer,
  categories: CategoryReducer,
  errors: ErrorReducer,
  pledges: PledgeReducer,
  search: SearchReducer
});

export default RootReducer;
