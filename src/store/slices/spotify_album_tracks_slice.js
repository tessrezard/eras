// This slice will handle the state related to 
// fetching and managing the about data for MULTIPLE subreddits, notably used in PopularHeader.

import { createSlice } from '@reduxjs/toolkit';
import { fetchSpotifyAlbumTracks } from '../thunks';


const spotifyAlbumTracks = createSlice({
  name: 'spotifyAlbumTracks',
  initialState: {
    albumTracksData: [],
    albumTracksLoading: false,
    albumTracksError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpotifyAlbumTracks.pending, (state) => {
        state.albumTracksData = true;
        state.albumTracksError = null;
      })
      .addCase(fetchSpotifyAlbumTracks.fulfilled, (state, action) => {
        state.albumTracksData = action.payload; 
        state.albumTracksLoading = false;
      })
      .addCase(fetchSpotifyAlbumTracks.rejected, (state, action) => {
        state.albumTracksLoading = false;
        state.albumTracksError = action.error.message;
      });
  },
});

export default spotifyAlbumTracks.reducer;
