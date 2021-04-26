import videosAPI from '../../api/videosAPI';
import { videosType } from '../constants';

export const createVideo = (payload) => {
  return async (dispatch) => {
    dispatch({ type: videosType.FETCH_CREATE_VIDEO_REQUEST });
    try {
      const response = await videosAPI.createVideo(payload);
      dispatch({ type: videosType.FETCH_CREATE_VIDEO_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: videosType.FETCH_CREATE_VIDEO_FAILURE, payload: error });
    }
  };
};
