import tournamentsAPI from '../../api/tournamentsAPI';
import { tournaments } from '../constants';

export const fetchGetTournaments = (payload) => {
  return async (dispatch) => {
    dispatch({ type: tournaments.FETCH_GET_TOURNAMENTS_REQUEST });
    try {
      const response = await tournamentsAPI.getAll(payload);
      if (response) {
        dispatch({ type: tournaments.FETCH_GET_TOURNAMENTS_SUCCESS, payload: response });
      }
    } catch (error) {
      dispatch({ type: tournaments.FETCH_GET_TOURNAMENTS_FAILURE, payload: error });
    }
  };
};
