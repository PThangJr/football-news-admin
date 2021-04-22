import { combineReducers } from 'redux';
import authReducer from './authReducer';
import newsReducer from './newsReducer';
import tournamentsReducer from './tournamentsReducer';

const rootReducer = combineReducers({
  adminData: authReducer,
  tournamentsData: tournamentsReducer,
  newsData: newsReducer,
});
export default rootReducer;
