import React, { useState } from "react";
import '../styles/CSS/main.css';
import { albumsTracksArr } from "../app/data/albums-tracks";
import Album from "./Album";
const Chronology = () => {


    const [albumHover, setAlbumHover] = useState(false);



    return (
        <>

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

        </>
    );
};


export default Chronology;
