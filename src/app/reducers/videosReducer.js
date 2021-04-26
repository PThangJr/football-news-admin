const { videosType } = require('../constants');

const initialState = {
  videos: [],
  loading: false,
  errors: null,
  message: '',
};
const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case videosType.FETCH_CREATE_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
        errors: null,
        message: null,
      };
    case videosType.FETCH_CREATE_VIDEO_SUCCESS:
      // console.log(action);
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case videosType.FETCH_CREATE_VIDEO_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        errors: action.payload?.data?.error,
      };

    default:
      return state;
  }
};
export default videosReducer;
