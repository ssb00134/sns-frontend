import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import twitsReducer from './twits';
const rootReducer = combineReducers({
  recipes: recipesReducer,
  twits: twitsReducer,
});

export default rootReducer;
