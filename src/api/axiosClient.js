import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_LINK_API,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default axiosClient;

axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log(config.headers);
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error.response);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data; //Dữ liệu
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error.response);
    return Promise.reject(error.response);
  }
);
