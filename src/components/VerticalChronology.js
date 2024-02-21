import React, { useState } from "react";
import '../styles/CSS/main.css';
import { albumsTracksArr } from "../app/data/albums-tracks";
import VerticalAlbum from "./VerticalAlbum";
import { albumTracks } from "../app/data/album_tracks";
import { sortedByEraAlbumTracks } from "../app/data/sorted_by_era_album_tracks";
import { sortTracksByDuration } from "../app/utilities/sortTracksByDuration";

const VerticalChronology = () => {

    const millisecondsToMinutes = (milliseconds) => {
        return (milliseconds / (1000 * 60)).toFixed(2).replace('.', ':');
    };


    const sorted = sortTracksByDuration();

    return (
        <>

            <div>
                {sorted.map((track, index) => (
                    <div key={index}>
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


export default VerticalChronology;










