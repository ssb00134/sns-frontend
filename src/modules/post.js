import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  post: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPost: (state) => {
      state.loading = true;
    },
    getPostSuccess: (state, { payload }) => {
      state.post = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPostFailure: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const postSelector = (state) => state.Post;
export default postSlice.reducer;
