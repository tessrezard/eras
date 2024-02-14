import React from "react";
import '../styles/CSS/main.css';
import { albumsTracksArr } from "../data/songsData";
import Album from "./Album";

const Chronology = () => {

    console.log(albumsTracksArr)


    return (
        <>
            <div className="chronology-container">
                {albumsTracksArr.map((album, index) => (
                    <Album album={album} key={index} />
                ))}
            </div>

        </>
    );
};


export default Chronology;
