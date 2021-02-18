import axiosClient from './axiosClient';

const authAPI = {
  login(data) {
    const url = '/admin';
    return axiosClient.post(url, data);
  },
};
export default authAPI;
