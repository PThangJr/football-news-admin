import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import newsReducer from './slice/newsSlice';
import createNewReducer from './slice/createNewSlice';
import deleteNewReducer from './slice/deleteNewSlice';
const rootReducer = {
  account: authReducer,
  news: newsReducer,
  newCreated: createNewReducer,
  // newDeleted: deleteNewReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
