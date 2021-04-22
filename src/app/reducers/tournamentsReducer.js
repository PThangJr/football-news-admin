import { tournaments } from '../constants/index';

const initialState = {
  loading: false,
  tournaments: [],
  errors: null,
};
const tournamentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case tournaments.FETCH_GET_TOURNAMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case tournaments.FETCH_GET_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        tournaments: action.payload.tournaments,
        loading: false,
      };
    case tournaments.FETCH_GET_TOURNAMENTS_FAILURE:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default tournamentsReducer;
