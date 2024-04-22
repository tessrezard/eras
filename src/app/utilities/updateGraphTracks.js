import React from "react";
import { allTracks } from "../data/current_data/all_tracks";

export const updateGraphTracks = (latestSortedTracks) => {

    // -- is this the final list? (length === 1)
    const tracks = latestSortedTracks.length === 1 ? latestSortedTracks[0] : latestSortedTracks;

    
    // -- assign points
    tracks.forEach((obj, index) => {
        // -- calculate points based on ranking (tracks index) and scale them to ensure a clean graph
        let points = scalePoint(index, tracks.length);
        obj.track.points = points;
    });


    let graphTracks = [...allTracks];

    // -- give the graph tracks a 'eraIndex' key-value pair
    graphTracks = graphTracks.map((graphTrack, index) => {
        graphTrack.eraIndex = index;
        return graphTrack;
    });

    // -- graphTracks = graphTracks.filter(graphTrack => tracks.some(track => track.eraIndex === graphTrack));
    graphTracks = graphTracks.filter((graphTrack, index) => tracks.some(track => track.eraIndex === index));


    // -- update points value of graphTracks based on tracks
    graphTracks.forEach((graphTrack, index) => {
        const i = graphTrack.eraIndex;
        let trackToUpdate;
        for (const track of tracks) {
            if (track.eraIndex === i) {
                trackToUpdate = track;
                break; 
            }
        }
        if (trackToUpdate) {
            graphTracks[index].points = trackToUpdate.track.points;
        }
    });

    return graphTracks;

}


// scale the points based on the index and total tracks
function scalePoint(index, totalTracks) {
    const scale = 300 / totalTracks; // Adjust as needed
    return Math.ceil((totalTracks - index) * scale);
}
