import newsAPI from '../../api/newsAPI';
import { newsType } from '../constants';

export const createNew = (payload) => {
  return async (dispatch) => {
    dispatch({ type: newsType.FETCH_CREATE_NEW_REQUEST });
    try {
      const response = await newsAPI.createNew(payload);
      if (response) {
        console.log(response);
        dispatch({ type: newsType.FETCH_CREATE_NEW_SUCCESS, payload: response });
      }
    } catch (error) {
      dispatch({ type: newsType.FETCH_CREATE_NEW_FAILURE, payload: error });
    }
  };
};
export const getNews = (payload) => {
  return async (dispatch) => {
    dispatch({ type: newsType.FETCH_NEWS_REQUEST });
    try {
      const response = await newsAPI.getAllNews(payload);
      dispatch({ type: newsType.FETCH_NEWS_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: newsType.FETCH_NEWS_FAILURE, payload: error });
    }
  };
};
export const deleteNew = (payload) => {
  return async (dispatch) => {
    dispatch({ type: newsType.FETCH_DELETE_NEW_REQUEST });
    try {
      const response = await newsAPI.deleteNew(payload);
      dispatch({ type: newsType.FETCH_DELETE_NEW_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: newsType.FETCH_DELETE_NEW_FAILURE, payload: error });
    }
  };
};
