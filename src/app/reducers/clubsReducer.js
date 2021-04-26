const { videosType, clubsType } = require('../constants');

const initialState = {
  clubs: [],
  loading: false,
  errors: null,
  message: '',
};
const clubsReducer = (state = initialState, action) => {
  switch (action.type) {
    case clubsType.FETCH_CREATE_CLUB_REQUEST:
      return {
        ...state,
        loading: true,
        message: '',
        errors: null,
      };
    case clubsType.FETCH_CREATE_CLUB_SUCCESS:
      console.log(action);
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case clubsType.FETCH_CREATE_CLUB_FAILURE:
      console.log(action);
      return {
        ...state,
        loading: false,
        errors: action.payload.data.error,
        message: action.payload?.data?.error?.message,
      };
    case clubsType.FETCH_CLUBS_REQUEST:
      return {
        ...state,
        loading: true,
        message: '',
        errors: null,
      };
    case clubsType.FETCH_CLUBS_SUCCESS:
      console.log(action);
      return {
        ...state,
        loading: false,
        clubs: action.payload.clubs,
      };
    case clubsType.FETCH_CLUBS_FAILURE:
      console.log(action);
      return {
        ...state,
        loading: false,
        errors: action.payload.data.error,
        message: action.payload?.data?.error?.message,
      };

    default:
      return state;
  }
};
export default clubsReducer;
