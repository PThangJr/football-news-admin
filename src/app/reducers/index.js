import { combineReducers } from 'redux';
import authReducer from './authReducer';
import clubsReducer from './clubsReducer';
import newsReducer from './newsReducer';
import tournamentsReducer from './tournamentsReducer';
import videosReducer from './videosReducer';

const rootReducer = combineReducers({
  adminData: authReducer,
  tournamentsData: tournamentsReducer,
  newsData: newsReducer,
  videosData: videosReducer,
  clubsData: clubsReducer,
});
export default rootReducer;
