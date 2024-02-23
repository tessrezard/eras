import React, { useState } from "react";
import '../styles/CSS/main.css';
import { albumsTracksArr } from "../app/data/current_data/basic-albums-tracks";
import Album from "./Album";
const Condensed = () => {




    return (
        <>
            <div className="chronology-container">
                {albumsTracksArr.toReversed().map((album, index) => (
                    <div className="chronology-container" key={index}>
                        <Album
                            album={album}
                            key={index}
                            albumHover={albumHover}
                            setAlbumHover={setAlbumHover}
                        />
                    </div>
                ))}
            </div>


        </>
    );
};


export default Condensed;
