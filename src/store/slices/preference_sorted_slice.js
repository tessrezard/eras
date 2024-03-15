// this slice holds the sorted tracks (sorted up to the point to which the user has done the quiz)

//tracks with points. 
//percentage of completed. 

import { createSlice } from '@reduxjs/toolkit';


const preferenceSortedSlice = createSlice({
    name: 'preferenceSorted',
    initialState: {
        tracks: [],
        progress: 0,
    },
    reducers: {
        setPreferenceSortedTracks(state, action) {
            return action.payload;
        },
        updatePreferencePoints(state, action) {
            const { trackId, points } = action.payload;
            // Find the index of the track with the matching ID
            const trackIndex = state.tracks.findIndex(track => track.id === trackId);
            if (trackIndex !== -1) { // Ensure track is found
                // Create a new array with the updated track
                const updatedTracks = [...state.tracks];
                updatedTracks[trackIndex] = {
                    ...updatedTracks[trackIndex],
                    points: points
                };
                // Return the updated state
                return {
                    ...state,
                    tracks: updatedTracks
                };
            }
            // Return the original state if track is not found
            return state;
        },
    },
});

export const { setPreferenceSortedTracks, updatePreferencePoints } = preferenceSortedSlice.actions
export default preferenceSortedSlice.reducer;