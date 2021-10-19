import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  twits: [],
  content: [],
};

const twitsSlice = createSlice({
  name: 'twits',
  initialState,
  reducers: {
    getTwits: (state) => {
      state.loading = true;
    },
    getTwitsSuccess: (state, { payload }) => {
      state.twits = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getTwitFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getTwits, getTwitsSuccess, getTwitFailure } = twitsSlice.actions;

export const twitsSelector = (state) => state.twits;
export const contentSelector = (state) => state.twits.content;

export default twitsSlice.reducer;

export function fetchTwits() {
  return async (dispatch) => {
    dispatch(getTwits());
    try {
      const response = await fetch('http://localhost:4000/');
      const data = await response.json();
      console.log('data', data);
      dispatch(getTwitsSuccess(data));
    } catch (error) {
      console.log('error', error);
      dispatch(getTwitFailure());
    }
  };
}
