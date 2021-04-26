import axiosClient from './axiosClient';

const tournamentsAPI = {
  getAll(payload) {
    let slugTournament = '';
    if (payload) {
      slugTournament = `/${payload.slugTournament}`;
    }
    const url = `/tournaments${slugTournament}`;
    return axiosClient.get(url);
  },
};
export default tournamentsAPI;
