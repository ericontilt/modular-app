import { combineReducers } from 'redux';
import modules from './modulesReducer';

const rootReducer = combineReducers({
  modules,
});

export default rootReducer;
