import React from "react";
import '../styles/CSS/main.css';

const TrackTitle = ({ album, albumHover }) => {



    const albumTitle = Object.keys(album)[0];
    const albumColor = 'color-' + albumTitle;


    return (
        <>
            <div>
                {albumHover ? (
                    <>
<p
                style={{ position: 'absolute', bottom: 10 }}
                className={`  ${albumColor}`}
            >{albumTitle}</p>
                    </>
                ) : (
                    <>
                    </>)}
            </div>
            

        </>
    );
};


export default TrackTitle;
