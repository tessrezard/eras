import React, { useState } from "react";
import '../styles/CSS/main.css';
import VerticalTrack from "./VerticalTrack";


const VerticalAlbum = ({ album }) => {



    const albumTitle = Object.keys(album)[0];
    const tracks = Object.values(album)[0];

    const albumColor = 'color-' + albumTitle;



    return (
        <>
            <div className="vertical-album-container" >
                <div className="vertical-album-title-container " >
                    <p className={`vertical-album-title ${albumColor}`}>{albumTitle}</p>
                </div>

                <div className="vertical-album-tracks">
                    {tracks.map((track, index) => (
                        <VerticalTrack
                            track={track}
                            key={index}
                            albumTitle={albumTitle}
                            
                        />
                    ))}
                </div>
                
            </div>

        </>
    );
};


export default VerticalAlbum;
