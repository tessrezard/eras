import { createSlice } from '@reduxjs/toolkit';
import { filterTracks } from '../../app/utilities/filterTracks';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    tracks: [], // Your initial state
    filteredTracks: [], // State to store filtered tracks
  },
  reducers: {
    applyFilters: (state, action) => {
      const { tracks, filters } = action.payload;
      state.filteredTracks = filterTracks(tracks, filters);
    },
  },
});

export const { applyFilters } = filterSlice.actions;
export default filterSlice.reducer;