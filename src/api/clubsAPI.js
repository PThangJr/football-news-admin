import axiosClient from './axiosClient';
const clubsAPI = {
  createClub(data) {
    const url = `/clubs`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  getClubs(payload) {
    let tournamentId = '';
    if (payload) {
      tournamentId = `/${payload.tournamentId}`;
    }
    const url = `/clubs${tournamentId}`;
    return axiosClient.get(url);
  },
};
export default clubsAPI;
