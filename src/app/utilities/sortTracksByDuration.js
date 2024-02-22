import React, { useState } from "react";
import { albumTracks } from "../data/album_tracks";
import { sortedByEraAlbumTracks } from "../data/sorted_by_era_album_tracks";
import { addValues } from "./addValuesToTracks";

export const sortTracksByDuration = () => {

    
    const allTracks = addValues();

    // Function to sort tracks by duration_ms in descending order
    const sortTracksByDuration = (a, b) => b.duration_ms - a.duration_ms;


    // --------------------------------------------------------------------------
    // RETURN STATEMENT
    const sorted = allTracks.sort(sortTracksByDuration);
    return (sorted);
}











