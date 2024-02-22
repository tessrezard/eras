import React, { useState } from "react";
import { albumTracks } from "../data/album_tracks";
import { sortedByEraAlbumTracks } from "../data/sorted_by_era_album_tracks";
import { addValues } from "./addValuesToTracks";
import { all } from "axios";

export const sortTracksByDuration = () => {

    
    const allTracks = addValues();

    console.log(allTracks);
    // Function to sort tracks by duration_ms in descending order
    const sortTracksByDuration = (a, b) => b.duration_ms - a.duration_ms;


    // --------------------------------------------------------------------------
    // RETURN STATEMENT
    const sorted = allTracks.sort(sortTracksByDuration);
    return (sorted);
}











