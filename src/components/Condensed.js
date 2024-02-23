import React, { useState } from "react";
import '../styles/CSS/main.css';
import { albumsTracksArr } from "../app/data/current_data/basic-albums-tracks";
import CondensedAlbum from "./CondensedAlbum";
import CondensedTrack from "./CondensedTrack";
import { allTracks } from "../app/data/current_data/all_tracks";
import { reverseEraOrder } from "../app/utilities/reverseEraOrder";

const Condensed = ({tracks}) => {

    const reverseTracks = reverseEraOrder(allTracks);

    return (
        <>
            <div className="condensed-container">
            {reverseTracks.map((track, index) => (
                    <div key={index}>
                                <CondensedTrack
                                    track={track}
                                    type='sortedOrder'
                                />
                    </div>
                ))}
{/*                 
                
                {albumsTracksArr.toReversed().map((album, index) => (
                    <div className="chronology-container" key={index}>
                        <Album
                            album={album}
                            key={index}
                        />
                    </div>
                ))} */}
            </div>


        </>
    );
};


export default Condensed;
