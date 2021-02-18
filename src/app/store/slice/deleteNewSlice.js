import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import newsAPI from '../../../api/newsAPI';
import { deleteNew } from './newsSlice';
export const fetchDeleteNew = createAsyncThunk('/delete-new', async (payload, thunkAPI) => {
  try {
    const news = await newsAPI.deleteNew(payload);
    const { dispatch } = thunkAPI;
    if (news) {
      // dispatch(deleteNew(payload));
    }
    return news;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});

const initialState = {
  newDeleted: [],
  isLoading: null,
  errors: {},
};
const newsSlice = createSlice({
  name: 'delete-new',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDeleteNew.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchDeleteNew.fulfilled]: (state, action) => {
      console.log(action);
      state.newCreated = action.payload.data;
      state.isLoading = false;
    },
    [fetchDeleteNew.rejected]: (state, action) => {
      // console.log(action);
      state.errors = action.payload;
    },
  },
});

const { reducer } = newsSlice;

export default reducer;
