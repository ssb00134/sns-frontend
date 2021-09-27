import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';

// 액션 타입들을 선언합니다.
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST });

  try {
    const response = await api.getPost(id);
    dispatch({ type: GET_POST_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_POST_SUCCESS, payload: e, error: true });
    throw e;
  }
};

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_POST });
//   try {
//     const response = await api.getUsers();
//     dispatch({ type: GET_USERS_SUCCESS, payload: response.data });
//   } catch (e) {
//     dispatch({ type: GET_USERS_FAILURE, payload: e, error: true });
//     throw e;
//   }
// };

const initialState = {
  loading: {
    get_post: false,
    GET_USERS: false,
  },
  post: null,
  use: null,
};

const sample = handleActions(
  {
    [GET_POST]: (state) => ({ ...state, GET_POST: true }),
    [GET_POST_SUCCESS]: (state) => ({
      ...state,
      loading: { ...state.loading, get_post: false },
    }),
    [GET_POST_FAILURE]: (state) => ({
      ...state,
      loading: { ...state.loading, get_post: false },
    }),
  },
  initialState,
);
export default sample;
