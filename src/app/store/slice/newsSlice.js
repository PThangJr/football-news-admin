import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import newsAPI from '../../../api/newsAPI';
export const fetchNews = createAsyncThunk('/news', async (payload, thunkAPI) => {
  try {
    const news = await newsAPI.getNews(payload);

    return news;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});

export const fetchNewBySlug = createAsyncThunk('/newBySlug', async (payload, thunkAPI) => {
  try {
    const news = await newsAPI.getNewBySlug(payload);

    return news;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});

export const fetchDeleteNew = createAsyncThunk('/delete-new', async (payload, thunkAPI) => {
  try {
    const news = await newsAPI.deleteNew(payload);
    const { dispatch } = thunkAPI;
    if (news) {
      dispatch(deleteNew(payload));
    }
    return news;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});

const initialState = {
  data: [],
  isLoading: null,
  errors: {},
};
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    deleteNew(state, action) {
      console.log(state);
      return state.data.filter((item) => item.slug !== action.payload);
    },
  },
  extraReducers: {
    [fetchNews.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchNews.fulfilled]: (state, action) => {
      // console.log(action);
      state.data = action.payload.data;
      state.isLoading = false;
    },
    [fetchNews.rejected]: (state, action) => {
      // console.log(action);
      state.errors = action.payload;
    },
    [fetchNewBySlug.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchNewBySlug.fulfilled]: (state, action) => {
      // console.log(action);
      state.data = action.payload.data;
      state.isLoading = false;
    },
    [fetchNewBySlug.rejected]: (state, action) => {
      console.log(action);
      state.errors = action.payload.data;
    },
    [fetchDeleteNew.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchDeleteNew.fulfilled]: (state, action) => {
      console.log(action);
      console.log(state);
      // state.data = action.payload.data;
      state.isLoading = false;
    },
    [fetchDeleteNew.rejected]: (state, action) => {
      console.log(action);
      state.errors = action.payload.data;
    },
  },
});

const { actions, reducer } = newsSlice;
const { deleteNew } = actions;
export default reducer;
