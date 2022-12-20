import axios from 'axios';

const api = axios.create({
  baseURL: ' https://vt36i1ep1d.execute-api.us-east-2.amazonaws.com/dev/api/',

});

export default api;
