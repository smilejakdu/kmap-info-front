import axios from 'axios';

// base url 를 따로 설정을 해둠 
const request = axios.create({
  baseURL: 'http://localhost:8000',
});

export default request;
