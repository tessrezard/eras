
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSpotifyAlbum, getSpotifyArtistAlbums, getSpotifyToken, getSpotifyAlbumTracks} from '../app/API';


export const fetchToken = createAsyncThunk('token/fetchToken', async () => {
  try {
    const token = await getSpotifyToken();
    return token;
  } catch (error) {
    throw error;
  }
});




export const fetchSpotifyArtistAlbums= createAsyncThunk('spotifyArtistAlbums/fetchSpotifyArtistAlbums', async () => {
  try {
    const search = await getSpotifyArtistAlbums();
    return search;
  } catch (error) {
    throw error;
  }
});


export const  fetchSpotifyAlbumTracksxx = createAsyncThunk('spotifyAlbumTracks/fetchSpotifyAlbumTracks', async (albumIds) => {
  try {
    const promises = albumIds.map(id => getSpotifyAlbumTracks(id));
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    throw error;
  }
});


export const  fetchSpotifyAlbumTracks = createAsyncThunk('spotifyAlbumTracks/fetchSpotifyAlbumTracks', async (albumIds) => {
  try {
    // Create an array of promises to fetch both album and tracks for each album ID
    const promises = albumIds.map(async (id) => {
      const album = await getSpotifyAlbum(id);  
      const tracks = await getSpotifyAlbumTracks(id);  // Assuming getSpotifyAlbumTracks fetches tracks data
      return { album, tracks };
    });

    // Wait for all promises to resolve
    const results = await Promise.all(promises);

    return results;
  } catch (error) {
    throw error;
  }
});