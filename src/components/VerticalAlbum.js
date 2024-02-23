import React, { useState } from "react";
import '../styles/CSS/main.css';
import VerticalTrack from "./VerticalTrack";


const VerticalAlbum = ({ album, index }) => {

    const albumEra = album.album.era
    const albumColor = 'color-' + albumEra;
    const albumName = album.album.name;



    return (
        <>
            <div className="vertical-album-container" >


                <div className="vertical-album-tracks">
                    {album.tracks.map((track, index) => (
                        <VerticalTrack
                            type='eraOrder'
                            track={track}
                            key={index}
                            
                        />
                    ))}
                </div>

                <div className="vertical-album-title-container " >
                    <p className={`vertical-album-title ${albumColor}`}>{albumName}</p>
                </div>
                
                
            </div>

        </>
    );
};


export default VerticalAlbum;
