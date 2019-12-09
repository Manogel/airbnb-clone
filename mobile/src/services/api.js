import axios from 'axios';

export const rota_base = '10.114.64.42';

const api = axios.create({
  baseURL: 'http://10.114.64.42:3333',
});

export default api;
