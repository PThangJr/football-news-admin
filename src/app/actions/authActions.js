import authAPI from '../../api/authAPI';
import { auth } from '../constants';

export const fetchLogin = (payload) => {
  return async (dispatch) => {
    dispatch({ type: auth.FETCH_LOGIN_REQUEST });
    try {
      const response = await authAPI.loginAdmin(payload);
      if (response) {
        dispatch({ type: auth.FETCH_LOGIN_SUCCESS, payload: response });
      }
    } catch (error) {
      dispatch({ type: auth.FETCH_LOGIN_FAILURE, payload: error });
    }
  };
};
