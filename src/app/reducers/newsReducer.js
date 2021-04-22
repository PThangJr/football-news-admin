const { newsType } = require('../constants');

const initialState = {
  loading: false,
  news: [],
  errors: null,
  message: '',
  pagination: {},
};
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case newsType.FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case newsType.FETCH_NEWS_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        loading: false,
        news: action.payload.data,
        pagination: action.payload.pagination,
      };
    case newsType.FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case newsType.FETCH_CREATE_NEW_REQUEST:
      return {
        ...state,
        loading: true,
        message: '',
      };
    case newsType.FETCH_CREATE_NEW_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'Thêm bài viết thành công!',
      };
    case newsType.FETCH_CREATE_NEW_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case newsType.FETCH_DELETE_NEW_REQUEST:
      return {
        ...state,
        loading: true,
        message: '',
      };
    case newsType.FETCH_DELETE_NEW_SUCCESS:
      let newsNotDeleted = { ...state };
      return {
        ...newsNotDeleted,
        loading: false,
        news: newsNotDeleted.news.filter((item) => item._id !== action.payload),
      };
    case newsType.FETCH_DELETE_NEW_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};
export default newsReducer;
