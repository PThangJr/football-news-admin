import clubsAPI from '../../api/clubsAPI';
import { clubsType } from '../constants';

export const createClub = (payload) => {
  return async (dispatch) => {
    dispatch({ type: clubsType.FETCH_CREATE_CLUB_REQUEST });
    try {
      const response = await clubsAPI.createClub(payload);
      dispatch({ type: clubsType.FETCH_CREATE_CLUB_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: clubsType.FETCH_CREATE_CLUB_FAILURE, payload: error });
    }
  };
};
export const getClubs = (payload) => {
  return async (dispatch) => {
    dispatch({ type: clubsType.FETCH_CLUBS_REQUEST });
    try {
      const response = await clubsAPI.getClubs(payload);
      dispatch({ type: clubsType.FETCH_CLUBS_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: clubsType.FETCH_CLUBS_FAILURE, payload: error });
    }
  };
};
