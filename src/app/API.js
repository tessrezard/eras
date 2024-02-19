import axios from 'axios';
import { CLIENT_SECRET, CLIENT_ID } from '../secrets';
import {artistDataTS} from './data/artist-data';

export const API_ROOT = 'https://www.reddit.com';
export const SUBREDDITS_ENDPOINT = `${API_ROOT}/subreddits.json`;

const REDIRECT_URI = 'http://localhost:3000/home';


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



// GET ALBUMS & SINGLES SEARCH 


export const getSpotifyArtistAlbums = async () => {
  const search = artistDataTS.name;
  const token = window.localStorage.getItem('token');
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




// GET ALBUMS & SINGLES SEARCH 


export const getSpotifyAlbums = async () => {
  const search = artistDataTS.name;
  const token = window.localStorage.getItem('token');
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
console.log('filterData', filterData);


  return filterData;
};




//GET LIST OF SUBREDDITS / (TOPICS)

export const getSubreddits = async () => {
  try {
    const response = await fetch(SUBREDDITS_ENDPOINT);
    if (!response.ok) {
      throw new Error(`Error fetching subreddits: ${response.statusText}`);
    }
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
  } catch (error) {
    console.error('Error fetching subreddits:', error);
    throw error;
  }
};




//GET POSTS for subreddit/topic

export const getSubredditPosts = async (subreddit) => {
  try {
    const response = await fetch(`${API_ROOT}/r/${subreddit}.json`);
    if (!response.ok) {
      console.log('tell me why');

      throw new Error(`Error fetching data for ${subreddit}: ${response.statusText}`);
    }
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  } catch (error) {
    console.error(`Error fetching data for ${subreddit}:`, error);
    throw error;
  }
};


//GET COMMENTS for post 

export const getPostComments = async (permalink) => {
  try {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    if (!response.ok) {
      throw new Error(`Error fetching comments for ${permalink}: ${response.statusText}`);
    }
    const json = await response.json();
    return json[1].data.children.map((comment) => comment.data);
  } catch (error) {
    console.error(`Error fetching comments for ${permalink}:`, error);
    throw error;
  }
};




//SEARCH FROM SEARCH TERM

export const getSearch = async (term) => {
  try {
    const response = await fetch(`${API_ROOT}/search.json?q=${term}`);
    if (!response.ok) {
      throw new Error(`Error fetching data for ${term}: ${response.statusText}`);
    }
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  } catch (error) {
    console.error(`Error fetching data for ${term}:`, error);
    throw error;
  }

};



//GET ABOUT SUBREDDIT

export const getAboutSubreddit = async (subreddit) => {
  try {

    // Check if data is already in local storage
    const cachedData = localStorage.getItem(`aboutSubreddit_${subreddit}`);
    if (cachedData) {
      // If data is in the cache, return it
      const parsedData = JSON.parse(cachedData);
      // console.log(`Using cached 'about' data for ${subreddit}:`, parsedData);
      return parsedData;
    }

    // If data is not in the cache, fetch from the API
    const response = await fetch(`${API_ROOT}/r/${subreddit}/about.json`);

    if (!response.ok) {
      throw new Error(`Error fetching data for ${subreddit}: ${response.statusText}`);
    }

    const json = await response.json();

    // Try to Store data in local storage
    try {
      localStorage.setItem(`aboutSubreddit_${subreddit}`, JSON.stringify(json.data));
    } catch (error) {
      localStorage.clear();
    }
    // console.log(`Fetched and cached 'about' data for ${subreddit}:`, json.data);
    return json.data;
  } catch (error) {
    console.error(`Error fetching the 'about' data for ${subreddit}:`, error);
    throw error;
  }
};


// so as not to exceed local storage, clear it when it's full.
