import { createSlice } from '@reduxjs/toolkit';
import { fetchSpotifyArtistAlbums } from '../thunks';

const spotifyArtistAlbumsSlice = createSlice({
  name: 'spotifyArtistAlbums',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpotifyArtistAlbums.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpotifyArtistAlbums.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchSpotifyArtistAlbums.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default spotifyArtistAlbumsSlice.reducer;