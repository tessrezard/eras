import React from "react";
import '../styles/CSS/main.css';
import { albumsTracksArr } from "../data/songsData";
import Track from "./Track";

const Album = ({ album }) => {

    const albumTitle = Object.keys(album)[0];
    const tracks = Object.values(album)[0];

    const albumColor = 'color-' + albumTitle;
    
    console.log(tracks.length)
    return (
        <>
            <div className="album-container">
                <div>
                    <p className={`${albumColor}`}>{albumTitle}</p>
                </div>
                <div className="album-tracks">
                    {tracks.map((track, index) => (
                        <Track track={track} key={index} albumTitle={albumTitle} />
                    ))}
                </div>
            </div>

        </>
    );
};


export default Album;
