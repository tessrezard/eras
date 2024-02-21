import React, { useState } from "react";
import '../styles/CSS/main.css';
import { albumTracks } from "../app/data/album_tracks";
import { sortedByEraAlbumTracks } from "../app/data/sorted_by_era_album_tracks";

const SortTracksByDuration = () => {

// --------------------------------------------------------------------------
    // BECAUSE WE ARE TAKING THE TRACKS OUT OF THE CONTEXT OF THEIR ALBUM 
    // TO DISPLAY THEM SORTED, ADD VALUE TO TRACK : ALBUMNAME
        const albumTracksWithAlbumName = albumTracks.map(albumData => {
            const { album, tracks } = albumData;
            const albumName = album.name;
          
            // Add albumName property to each track object
            const tracksWithAlbumName = tracks.map(track => ({ ...track, albumName }));
          
            return { album: { ...album, albumName }, tracks: tracksWithAlbumName };
        });
    
    console.log(albumTracksWithAlbumName)

// --------------------------------------------------------------------------

        // Combine all tracks into a single array
        const allTracks = albumTracksWithAlbumName.reduce((accumulator, album) => [...accumulator, ...album.tracks], []);

        // Function to sort tracks by duration_ms in descending order
        const sortTracksByDuration = (a, b) => b.duration_ms - a.duration_ms;

        const millisecondsToMinutes = (milliseconds) => {
            return (milliseconds / (1000 * 60)).toFixed(2).replace('.', ':');
          };

    return (
        <>

<div>
      {/* Sort all tracks by duration_ms in descending order */}
      {allTracks.sort(sortTracksByDuration).map((track, index) => (
        <div key={index}>
          {/* Display track information */}
          <p>{track.name} - {millisecondsToMinutes(track.duration_ms)}</p>

        </div>
      ))}
    </div>

            <div className="vertical-chronology-container">
                {sortedByEraAlbumTracks.map((album, index) => (
                    <div key={index}>
                        <VerticalAlbum
                            album={album}
                            key={index}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};


export default SortTracksByDuration;










