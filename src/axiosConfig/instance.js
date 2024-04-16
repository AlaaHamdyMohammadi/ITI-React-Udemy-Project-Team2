import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:4000/api/v1',
  baseURL: 'https://udemy-clone-uief.onrender.com/api/v1',
});

export default axiosInstance;