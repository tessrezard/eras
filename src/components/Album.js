import React, { useState } from "react";
import '../styles/CSS/main.css';
import Track from "./Track";


const Album = ({ album, albumHover, setAlbumHover }) => {

    const [trackHover, setTrackHover] = useState(false);


    const albumTitle = Object.keys(album)[0];
    const tracks = Object.values(album)[0];

    const albumColor = 'color-' + albumTitle;



    return (
        <>
            <div className="album-container" >
                <div className="album-title-container " >
                    <p className={`album-title ${albumColor}`}>{albumTitle}</p>
                </div>

                <div className="album-tracks">
                    {tracks.map((track, index) => (
                        <Track
                            track={track}
                            key={index}
                            albumTitle={albumTitle}
                            trackHover={trackHover}
                            setTrackHover={setTrackHover}
                        />
                    ))}
                </div>
                
            </div>

        </>
    );
};


export default Album;
