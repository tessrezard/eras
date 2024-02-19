import { createSlice } from '@reduxjs/toolkit';
import { fetchToken } from '../thunks';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    tokenData: [],
    tokenLoading: false,
    tokenError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.tokenLoading = true;
        state.tokenError = null;
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.tokenData = action.payload;
        state.tokenLoading = false;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.tokenLoading = false;
        state.tokenError = action.error.message;
      });
  },
});

export default tokenSlice.reducer;