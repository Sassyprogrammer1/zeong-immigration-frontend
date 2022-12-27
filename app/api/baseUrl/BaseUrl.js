import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nt9uuakstj.execute-api.us-east-2.amazonaws.com/dev/api/v1',
});

export default api;
