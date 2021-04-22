import axiosClient from './axiosClient';

const tournamentsAPI = {
  getAll(params) {
    const url = '/tournaments';
    return axiosClient.get(url, params);
  },
};
export default tournamentsAPI;
