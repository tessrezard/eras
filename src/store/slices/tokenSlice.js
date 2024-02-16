// This slice will handle the state related to 
// fetching and managing a list of subreddits.

import { createSlice } from '@reduxjs/toolkit';
import { fetchToken } from '../thunks';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default tokenSlice.reducer;