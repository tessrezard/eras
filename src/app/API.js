import axios from 'axios';
import { CLIENT_SECRET, CLIENT_ID } from '../secrets';
import {artistDataTS} from './data/artist_data';
import { artist_albums } from './data/artist_albums';
export const API_ROOT = 'https://www.reddit.com';
export const SUBREDDITS_ENDPOINT = `${API_ROOT}/subreddits.json`;

const REDIRECT_URI = 'http://localhost:3000/home';

// ---------------------------------------------------------------------------------------------------------------------
//GET TOKEN

export const getSpotifyToken = async () => {

  if (window.localStorage.getItem('token')) {
    const token = window.localStorage.getItem('token');
    return token;
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (btoa(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
    },
  });

  const responseObj = await response.json();
  const token = responseObj.access_token;

  // -- SET LOCAL STORAGE TOKEN FROM STATE VARIABLE -- (if not yet set, if local deleted)
  if (token && !window.localStorage.getItem('token')) {
    window.localStorage.setItem('token', token);
  }

  return token;
};



const token = window.localStorage.getItem('token');







// ---------------------------------------------------------------------------------------------------------------------
// GET ARTISTS'S ALBUMS (& SINGLES, COMPILATIONS ETC) 


export const getSpotifyArtistAlbums = async () => {
  const search = artistDataTS.name;
  const typeKey ='tracks';
  const typeOfSearch = 'artist';
  
  const response = await axios.get(`https://api.spotify.com/v1/artists/${artistDataTS.id}/albums` , {
      headers: {
          Authorization: `Bearer ${token}`,
      },
      params: {
          q: `${search}`,
          type: `${typeOfSearch}`,
          limit: 50,
      }
  });

  const keysToCopy = ['name', 'id', 'album_type', 'artists', 'id', 'release_date', 'total_tracks'];

const filterData = response.data.items.map(item => {
  const newItem = {}; 
  keysToCopy.forEach((key) => {
      if (key === 'artists'){
          if (item.hasOwnProperty(key)) {
              const justArtistsNames = item[key].map(artist => artist['name']);
              newItem['artists'] = justArtistsNames;
          }
      } else {
          if (item.hasOwnProperty(key)) {
              newItem[key] = item[key];
          }
       }
      
  });
  return newItem;
})
  return filterData;
};





// ---------------------------------------------------------------------------------------------------------------------
// GET ALBUM Tracks

export const getSpotifyAlbumTracks = async (id) => {

  const response = await axios.get(`https://api.spotify.com/v1/albums/${id}/tracks` , {
      headers: {
          Authorization: `Bearer ${token}`,
      },
      params: {
          id: id,
          limit: 50,
      }
  });
console.log(response.data.items)
  const keysToCopy = ['name', 'id', 'album_type', 'artists', 'id', 'release_date', 'total_tracks'];

const filterData = response.data.items.map(item => {
  const newItem = {}; 
  keysToCopy.forEach((key) => {
      if (key === 'artists'){
          if (item.hasOwnProperty(key)) {
              const justArtistsNames = item[key].map(artist => artist['name']);
              newItem['artists'] = justArtistsNames;
          }
      } else {
          if (item.hasOwnProperty(key)) {
              newItem[key] = item[key];
          }
       }
      
  });
  return newItem;
})
  return filterData;
};

