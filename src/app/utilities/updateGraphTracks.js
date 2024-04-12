import React from "react";
import { allTracks } from "../data/current_data/all_tracks";

export const updateGraphTracks = (latestSortedTracks) => {

    // is this the final list? (length === 1)
    const tracks = latestSortedTracks.length === 1 ? latestSortedTracks[0] : latestSortedTracks;

    // const tracksInEraOrder = tracks.sort((a, b) => a.eraIndex - b.eraIndex);

    // assign points
    tracks.forEach((obj, index) => {
        // Calculate points based on ranking (index)
        let points = allTracks.length - index;
        obj.track.points = points;
    });

    console.log('tracks', tracks);
    let graphTracks = [...allTracks];

     // Update points value of graphTracks based on tracks
     graphTracks.forEach((graphTrack, index) => {
        const eraIndex = graphTrack.eraIndex;
        const trackToUpdate = tracks.find(track => track.eraIndex === eraIndex);
        if (trackToUpdate) {
            graphTracks[index].points = trackToUpdate.track.points;
        }
    });

    console.log('graphTracks', graphTracks);
    return graphTracks;

}