import axiosClient from './axiosClient';
const videosAPI = {
  createVideo(data) {
    const url = `/videos`;
    return axiosClient.post(url, data);
  },
};
export default videosAPI;
