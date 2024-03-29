import axiosClient from './axiosClient';
const authAPI = {
  login(data) {
    const url = '/auth/login';
    return axiosClient.post(url, data);
  },
  loginAdmin(data) {
    const url = '/auth/admin/login';
    return axiosClient.post(url, data);
  },
  register(data) {
    const url = '/auth/register';
    return axiosClient.post(url, data);
  },
  getInfoUser() {
    const url = '/auth/information';
    return axiosClient.get(url);
  },
  changePassword(data) {
    const url = '/auth/password';
    return axiosClient.put(url, data);
  },
  updateAvatar(data) {
    const url = `/auth/information`;
    console.log(data);
    return axiosClient.put(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    // const url = 'https://httpbin.org/anything';
    // return axios.put(url, data);
  },
  updateInfoUser(data) {
    const url = `/auth/information`;
    return axiosClient.put(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
export default authAPI;
