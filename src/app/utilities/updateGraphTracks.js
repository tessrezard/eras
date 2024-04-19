import React from "react";
import { allTracks } from "../data/current_data/all_tracks";


export const updateGraphTracks = (latestSortedTracks) => {

    // is this the final list? (length === 1)
    const tracks = latestSortedTracks.length === 1 ? latestSortedTracks[0] : latestSortedTracks;

    // assign points
    tracks.forEach((obj, index) => {
        // Calculate points based on ranking (index) and scale them to ensure a clean graph
        let points = scalePoint(index, tracks.length);
        obj.track.points = points;
        console.log('points', obj, points)

    });

    let graphTracks = [...allTracks];
    console.log('graphTracks', graphTracks)

    // graphTracks = graphTracks.filter(graphTrack => tracks.some(track => track.eraIndex === graphTrack));
    graphTracks = graphTracks.filter((graphTrack, index) => tracks.some(track => track.eraIndex === index));
    console.log('filtered graphTracks', graphTracks)

    // // Update points value of graphTracks based on tracks
    // tracks.forEach((track, index) => {
    //     const eraIndex = track.eraIndex;
    //     console.log('THIS IS THE ISSUE eraIndex', eraIndex)

    //     const trackToUpdate = tracks.find(track => track.eraIndex === eraIndex);
    //     if (trackToUpdate) {
    //         graphTracks[index].points = trackToUpdate.track.points;
    //     }
    // });

    // Update points value of graphTracks based on tracks
    graphTracks.forEach((graphTrack, index) => {
        // GRAPHTRACK DOES NOT HAVE A ERA INDEX PROPERTY
        const eraIndex = graphTrack.eraIndex;

        console.log('THIS IS THE ISSUE eraIndex', eraIndex)

        const trackToUpdate = tracks.find(track => track.eraIndex === eraIndex);
        if (trackToUpdate) {
            graphTracks[index].points = trackToUpdate.track.points;
        }
    });

    return graphTracks;

}


// Scale the points based on the index and total tracks
function scalePoint(index, totalTracks) {
    const scale = 300 / totalTracks; // Adjust as needed
    return Math.ceil((totalTracks - index) * scale);
}