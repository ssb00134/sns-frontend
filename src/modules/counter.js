import { createReducer, createAction } from '@reduxjs/toolkit';

const increment = createAction('INCREASEMENT');
const decrement = createAction('DECREASEMENT');

const counter = createReducer(0, {
  [increment]: (state) => state + 1,
  [decrement]: (state) => state + 1,
});

export default counter;
