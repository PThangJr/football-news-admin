import axiosClient from './axiosClient';
const newsAPI = {
  getNews(config) {
    const { tournament, pagination } = config;
    const url = `/news/${tournament}` || `/`;
    return axiosClient.get(url, pagination);
  },
  getNewById(config) {
    const { tournament, _id } = config;
    const url = `/news/${tournament}/${_id}`;
    return axiosClient.get(url);
  },
  getNewBySlug(config) {
    let { tournament, slug } = config;
    tournament = tournament || '';
    const url = `/news${tournament}/${slug}`;
    return axiosClient.get(url);
  },
  createNew(data) {
    const url = `/news`;
    return axiosClient.post(url, data);
  },
  deleteNew(slug) {
    const url = `/news/${slug}`;
    return axiosClient.delete(url);
  },
};
export default newsAPI;
