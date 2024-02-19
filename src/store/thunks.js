
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSpotifyArtistAlbums, getSpotifyToken, getSubredditPosts, getSubreddits, getPostComments, getSearch, getAboutSubreddit} from '../app/API';


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



export const fetchSubreddits = createAsyncThunk('subreddits/fetchSubreddits', async () => {
  try {
    const subreddits = await getSubreddits();
    return subreddits;
  } catch (error) {
    throw error;
  }
});

export const fetchSubredditPosts = createAsyncThunk('subredditPosts/fetchSubredditPosts', async (subreddit) => {
  try {
    const posts = await getSubredditPosts(subreddit);
    return posts;
  } catch (error) {
    throw error;
  }
});

export const fetchPostComments = createAsyncThunk('postComments/fetchPostComments', async (permalink) => {
  try {
    const comments = await getPostComments(permalink);
    return comments;
  } catch (error) {
    throw error;
  }
});


export const fetchSearch = createAsyncThunk('search/fetchSearch', async (term) => {
  try {
    const results = await getSearch(term);
    return results;
  } catch (error) {
    throw error;
  }
});

export const fetchAboutSubreddit = createAsyncThunk('aboutSubreddit/fetchAboutSubreddit', async (subreddit) => {
  try {
    const elements = await getAboutSubreddit(subreddit);
    return elements;
  } catch (error) {
    throw error;
  }
});


export const fetchAboutPinnedSubreddits = createAsyncThunk('aboutPinnedSubreddits/fetchAboutPinnedSubreddits', async (subreddits) => {
  try {
    const promises = subreddits.map(subreddit => getAboutSubreddit(subreddit));
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    throw error;
  }
});


export const fetchAboutMultipleSubreddits = createAsyncThunk('aboutMultipleSubreddits/fetchAboutMultipleSubreddits', async (subreddits) => {
  try {
    const promises = subreddits.map(subreddit => getAboutSubreddit(subreddit));
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    throw error;
  }
});