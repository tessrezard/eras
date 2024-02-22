import React, { useState } from "react";
import '../styles/CSS/main.css';
import { albumsTracksArr } from "../app/data/albums-tracks";
import VerticalAlbum from "./VerticalAlbum";
import { albumTracks } from "../app/data/album_tracks";
import { sortedByEraAlbumTracks } from "../app/data/sorted_by_era_album_tracks";
import { sortTracksByDuration } from "../app/utilities/sortTracksByDuration";
import VerticalTrack from "./VerticalTrack";


const VerticalChronology = () => {

    const millisecondsToMinutes = (milliseconds) => {
        return (milliseconds / (1000 * 60)).toFixed(2).replace('.', ':');
    };



    const sorted = sortTracksByDuration();

    return (
        <>
            <div>
                <div className='testColors-album' style={{ height: 50, width: 50 }}>album</div>
                <div className='testColors-extended' style={{ height: 50, width: 50 }}>extended</div>
                <div className='testColors-single' style={{ height: 50, width: 50 }}>single</div>
{/* 
                <div className='testColors-remix' style={{ height: 50, width: 50 }}>remix</div>
                <div className='testColors-live' style={{ height: 50, width: 50 }}>live</div>
                <div className='testColors-acoustic' style={{ height: 50, width: 50 }}>acoustic</div> */}

            </div>

            <div className="vertical-chronology-container">
                {sorted.map((track, index) => (
                    <div key={index}>
                        <div className="vertical-album-container" >
                            <div className="vertical-album-tracks">
                                <VerticalTrack
                                    type='sortedOrder'
                                    track={track}
                                    key={index}
                                />
                            </div>
                        </div>
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










