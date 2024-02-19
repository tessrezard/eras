import React, { useState } from "react";
import '../styles/CSS/main.css';
import { albumsTracksArr } from "../app/data/albums-tracks";
import VerticalAlbum from "./VerticalAlbum";
import { albumTracks } from "../app/data/album_tracks"
const VerticalChronology = () => {


console.log(albumTracks);


    return (
        <> 
        <div className="vertical-chronology-container">
        {albumsTracksArr.map((album, index) => (
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
