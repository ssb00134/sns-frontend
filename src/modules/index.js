import { combineReducers } from 'redux';

import sample from './sample';
import loading from './loading';
import counter from './counter';
import post from './post';

const rootReducer = combineReducers({
  sample,
  loading,
  counter,
  post,
});

export default rootReducer;
