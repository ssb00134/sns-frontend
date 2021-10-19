//페이지 정보를 받아온다.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userData: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction(state, action) {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logoutAction(state) {
      state.isLoggedIn = false;
      state.userData = null;
    },
  },
});

const { reducer, actions } = userSlice;
export const { loginAction, logoutAction } = actions;
export default reducer;
