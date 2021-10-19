import axios from 'axios';

const client = (port) => {
  const request = axios
    .get(`http://localhost:4000${port}`)
    .then((response) => response.data)
    .catch((error) => console.log(error.response.data));
};

export default client;
