import { combineReducers } from '@reduxjs/toolkit';
import subredditsReducer from './slices/subredditSlice';
import subredditPostsReducer from './slices/subredditPostsSlice';
import postCommentsReducer from './slices/postCommentsSlice';
import searchReducer from './slices/searchSlice';
import aboutSubredditReducer from './slices/aboutSubredditSlice';
import aboutPinnedSubredditsReducer from './slices/aboutPinnedSubredditsSlice';
import aboutMultipleSubredditsReducer from './slices/aboutMultipleSubredditsSlice';

const rootReducer = combineReducers({
  subreddits: subredditsReducer,
  subredditPosts: subredditPostsReducer,
  postComments: postCommentsReducer,
  search: searchReducer,
  aboutSubreddit: aboutSubredditReducer,
  aboutPinnedSubreddits: aboutPinnedSubredditsReducer,
  aboutMultipleSubreddits: aboutMultipleSubredditsReducer,
});

export default rootReducer;