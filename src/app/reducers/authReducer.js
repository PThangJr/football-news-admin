import { auth } from '../constants';

const initialState = {
  loading: false,
  admin: '',
  access_token: '',
  errors: null,
  authenticate: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case auth.FETCH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        authenticate: false,
      };
    case auth.FETCH_LOGIN_SUCCESS:
      console.log(action);
      const { access_token, username } = action.payload;
      localStorage.setItem('access_token', access_token);
      return {
        ...state,
        loading: false,
        access_token,
        admin: username,
        authenticate: true,
      };
    case auth.FETCH_LOGIN_FAILURE:
      console.log(action);
      return {
        ...state,
        loading: false,
        errors: action.payload,
        authenticate: false,
      };
    default:
      return state;
  }
};

export default authReducer;
