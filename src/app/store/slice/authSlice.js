import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authAPI from '../../../api/authAPI';
export const fetchAuth = createAsyncThunk('/admin', async (payload, thunkAPI) => {
  try {
    const account = await authAPI.login(payload);
    console.log(account);
    localStorage.setItem('access_token', account.access_token);
    localStorage.setItem('username', account.username);
    return account;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error.data);
  }
});
const initialState = {
  access_token: '',
  account: {},
  errors: {},
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAuth.fulfilled]: (state, action) => {
      // console.log(action);
      const { access_token, username } = action.payload;
      // return (state.access_token = access_token);
      state.access_token = access_token;
      state.account = username;
    },
    [fetchAuth.rejected]: (state, action) => {
      // console.log(action);
      state.errors = action.payload;
    },
  },
});
const { reducer } = authSlice;
export default reducer;
