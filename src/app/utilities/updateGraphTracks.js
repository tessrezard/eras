import React from "react";
import { allTracks } from "../data/current_data/all_tracks";

export const updateGraphTracks = (latestSortedTracks) => {

    // is this the final list? (length === 1)
    const tracks = latestSortedTracks.length === 1 ? latestSortedTracks[0] : latestSortedTracks;

    // const tracksInEraOrder = tracks.sort((a, b) => a.eraIndex - b.eraIndex);

    // // assign points
    // tracks.forEach((obj, index) => {
    //     // Calculate points based on ranking (index)
    //     let points = tracks.length - index;
    //     // let points = tracks.length - index;
    //     if (tracks.length < 100){
    //         points = points + 100;
    //     }
    //     obj.track.points = points;

    // });


    // assign points
    tracks.forEach((obj, index) => {
        // Calculate points based on ranking (index) and scale them to ensure a clean graph
        let points = scalePoint(index, tracks.length);
        obj.track.points = points;
    });

    let graphTracks = [...allTracks];
    // graphTracks = graphTracks.filter(graphTrack => tracks.some(track => track.eraIndex === graphTrack));
    graphTracks = graphTracks.filter((graphTrack, index) => tracks.some(track => track.eraIndex === index));

     // Update points value of graphTracks based on tracks
     graphTracks.forEach((graphTrack, index) => {
        const eraIndex = graphTrack.eraIndex;
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