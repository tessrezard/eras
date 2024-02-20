import React, { useState } from "react";
import '../styles/CSS/main.css';
import { albumsTracksArr } from "../app/data/albums-tracks";
import VerticalAlbum from "./VerticalAlbum";
import { albumTracks } from "../app/data/album_tracks"
const VerticalChronology = () => {


console.log(albumTracks);

// try {
//     albumTracks.map((album, index) => {
//         // console.log(album, index);
//         // console.log(album.album.name);
    
//     }
//         )
//     }catch(error){
//         console.log(error)
// }

    return (
        <> 
        <div className="vertical-chronology-container">
        {albumTracks.map((album, index) => (
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
