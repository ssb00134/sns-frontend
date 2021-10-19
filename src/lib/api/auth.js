import client from './client';

//로그인
export const login = ({ username, password }) => {
  client.post('./auth/login', { username, password });
};

//회원가입
export const register = ({ username, password }) => {
  client.post('./auth/join', { username, password });
};
