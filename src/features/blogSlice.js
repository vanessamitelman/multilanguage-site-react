import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  getLangFromLocalStorage,
  getLangDirFromLocalStorage
} from '../utils/localStorage';

const base_url = process.env.REACT_APP_API_BASE_URL;

const initialState = {
  language: getLangFromLocalStorage() || 'en',
  lang_Direction: getLangDirFromLocalStorage(),
  isLoading: false,
  blog: []
};

export const getBlog = createAsyncThunk(
  '/blog/getBlog',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(`${base_url}posts`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    updateLanguage: (state) => {
      state.language = getLangFromLocalStorage();
    },
    updateLangDirection: (state) => {
      state.lang_Direction = getLangDirFromLocalStorage();
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlog.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getBlog.fulfilled, (state, { payload }) => {
        state.blog = payload;
        // state.isLoading = false;
      });
  }
});

export const { updateLanguage, updateLangDirection } = blogSlice.actions;

export default blogSlice.reducer;
