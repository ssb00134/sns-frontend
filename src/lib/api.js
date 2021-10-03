import axios from 'axios';

export const getPost = (id) => axios.get(`http://localhost:4000/api${id}`);

export const getUsers = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);
