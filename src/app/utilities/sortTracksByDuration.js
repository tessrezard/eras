import React, { useState } from "react";
import { albumTracks } from "../data/album_tracks";
import { sortedByEraAlbumTracks } from "../data/sorted_by_era_album_tracks";
export const sortTracksByDuration = () => {

    // --------------------------------------------------------------------------
    // BECAUSE WE ARE TAKING THE TRACKS OUT OF THE CONTEXT OF THEIR ALBUM 
    // TO DISPLAY THEM SORTED, ADD VALUE TO TRACK : ALBUMNAME
    const albumTracksWithAlbumName = sortedByEraAlbumTracks.map(albumData => {
        const { album, tracks } = albumData;
        const albumName = album.name;

        // Add albumName property to each track object
        const tracksWithAlbumName = tracks.map(track => ({ ...track, albumName }));

        return { album: { ...album, albumName }, tracks: tracksWithAlbumName };
    });


    // --------------------------------------------------------------------------
    // Combine all tracks into a single array
    const allTracks = albumTracksWithAlbumName.reduce((accumulator, album) => [...accumulator, ...album.tracks], []);

    // Function to sort tracks by duration_ms in descending order
    const sortTracksByDuration = (a, b) => b.duration_ms - a.duration_ms;


    // --------------------------------------------------------------------------
    // TO USE IN DISPLAY COMPONENT
    const millisecondsToMinutes = (milliseconds) => {
        return (milliseconds / (1000 * 60)).toFixed(2).replace('.', ':');
    };


    // --------------------------------------------------------------------------
    // RETURN STATEMENT
    const sorted = allTracks.sort(sortTracksByDuration);
    console.log(sorted);
    return (sorted);
}











