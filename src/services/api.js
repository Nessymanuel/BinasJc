import axios from 'axios';

const  api = axios.create({
  baseURL: 'http://localhost:7276/api' 
});

export default api;
