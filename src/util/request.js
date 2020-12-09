import axios from 'axios';

const request = axios.create({
  // baseURL: 'https://apps.kaipharm.com/kmapinfo/api',
  baseURL: 'http://localhost:8000/',
});

export default request;
