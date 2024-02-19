import { combineReducers } from '@reduxjs/toolkit';
import tokenReducer from './slices/token_slice';
import spotifyArtistAlbumsReducer from './slices/spotify_artist_albums_slice';
import spotifyAlbumTracksReducer from './slices/spotify_album_tracks_slice';

const rootReducer = combineReducers({
  spotifyAlbumTracks: spotifyAlbumTracksReducer,
  spotifyArtistAlbums: spotifyArtistAlbumsReducer,
  token: tokenReducer,
});

export default rootReducer;