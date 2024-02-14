import React, { useState } from "react";
import '../styles/CSS/main.css';
import { albumsTracksArr } from "../data/albums-tracks";
import Album from "./Album";
import AlbumTitle from "./AlbumTitle";
const Chronology = () => {


    const [albumHover, setAlbumHover] = useState(false);



    return (
        <>

            {albumsTracksArr.toReversed().map((album, index) => (
                <>
                    <AlbumTitle album={album} albumHover={albumHover} />
                    <div className="chronology-container">
                        <Album
                            album={album}
                            key={index}
                            albumHover={albumHover}
                            setAlbumHover={setAlbumHover}
                        />
                    </div>

                </>
            ))}

        </>
    );
};


export default Chronology;
