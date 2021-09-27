import axios from 'axios';

export const getPost = (id) => axios.get(`localhost:4000${id}`);
