import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const base_url = process.env.REACT_APP_API_BASE_URL;

const initialState = {
  isLoading: false,
  post: {}
};

export const getPost = createAsyncThunk(
  '/post/getPost',
  async (id, thunkAPI) => {
    try {
      const resp = await axios.get(`${base_url}posts/${id}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('could not connect to server');
    }
  }
);

const postSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    clearPosts: () => {
      return { ...initialState };
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPost.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getPost.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.post = payload;
        state.isLoading = false;
      });
  }
});
export const { clearPosts } = postSlice.actions;
export default postSlice.reducer;
