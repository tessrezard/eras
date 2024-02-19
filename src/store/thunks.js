
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSpotifyArtistAlbums, getSpotifyToken, getSpotifyAlbumTracks} from '../app/API';


export const fetchSpotifyArtistAlbums= createAsyncThunk('spotifyArtistAlbums/fetchSpotifyArtistAlbums', async () => {
  try {
    const search = await getSpotifyArtistAlbums();
    return search;
  } catch (error) {
    throw error;
  }
});


export const fetchToken = createAsyncThunk('token/fetchToken', async () => {
  try {
    const token = await getSpotifyToken();
    return token;
  } catch (error) {
    throw error;
  }
});

export const  fetchSpotifyAlbumTracks = createAsyncThunk('spotifyAlbumTracks/fetchSpotifyAlbumTracks', async (albumIds) => {
  try {
    const promises = albumIds.map(id => getSpotifyAlbumTracks(id));
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    throw error;
  }
});