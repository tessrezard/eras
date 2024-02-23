// import React, { useState } from "react";
// import { albumTracks } from "../data/old_data/spotify_order_album_tracks";
// import { sortedByEraAlbumTracks } from "../data/current_data/album_tracks";
import { albumTracks } from "../data/current_data/album_tracks";

import { addValues } from "./addValues";
import { allTracks } from "../data/current_data/all_tracks";


export const sortTracksByDuration = (tracks) => {

    // console.log(addValues(albumTracks))
    
    // Function to sort tracks by duration_ms in descending order
    const sortTracksByDuration = (a, b) => b.duration_ms - a.duration_ms;


    // --------------------------------------------------------------------------
    // RETURN STATEMENT
    // using spread operator to make sorted COPY, not modify original data 
    const sorted = [...tracks].sort(sortTracksByDuration);

    return (sorted);
}











