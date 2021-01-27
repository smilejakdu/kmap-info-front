import axios from 'axios';

// base url 를 따로 설정을 해둠 
const request = axios.create({
  baseURL: 'https://apps.kaipharm.com/kmapinfo/api',
});

export default request;
