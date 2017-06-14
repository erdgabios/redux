import { combineReducers } from 'redux';
import EloadasokReducer from './reducer_eloadasok';
import ActiveEloadas from './reducer_active_eloadas';

const rootReducer = combineReducers({
  eloadasok: EloadasokReducer,
  activeEloadas: ActiveEloadas
});

export default rootReducer;
