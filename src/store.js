import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './features/blogSlice';
import postSlice from './features/postSlice';

export const store = configureStore({
  reducer: { blog: blogSlice, post: postSlice }
});
