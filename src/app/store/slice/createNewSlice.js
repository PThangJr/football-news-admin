import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import newsAPI from '../../../api/newsAPI';
export const fetchCreateNew = createAsyncThunk('/create-new', async (payload, thunkAPI) => {
  try {
    const news = await newsAPI.createNew(payload);

    return news;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});

const initialState = {
  newCreated: [],
  isLoading: null,
  errors: {},
};
const newsSlice = createSlice({
  name: 'create-new',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCreateNew.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCreateNew.fulfilled]: (state, action) => {
      // console.log(action);
      state.newCreated = action.payload.data;
      state.isLoading = false;
    },
    [fetchCreateNew.rejected]: (state, action) => {
      // console.log(action);
      state.errors = action.payload;
    },
  },
});

const { reducer } = newsSlice;

export default reducer;
