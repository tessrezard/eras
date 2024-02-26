import React, { useState } from "react";
import '../styles/CSS/main.css';
import { albumsTracksArr } from "../app/data/current_data/basic-albums-tracks";
import VerticalAlbum from "./VerticalAlbum";
import { albumTracks } from "../app/data/current_data/album_tracks";
import { sortTracksByDuration } from "../app/utilities/sortTracksByDuration";
import VerticalTrack from "./VerticalTrack";

import { filterTracks } from "../app/utilities/filterTracks";
import { allTracks } from "../app/data/current_data/all_tracks";
import { addValues } from "../app/utilities/addValues";
import { reverseEraOrder } from "../app/utilities/reverseEraOrder";

const VerticalChronology = () => {

    // const albumFiltered = filterTracks(allTracks, 'album');
    // const extendedFiltered = filterTracks(allTracks, 'extended');
    // const acousticFiltered = filterTracks(allTracks, 'acoustic');
    // const remixFiltered = filterTracks(acousticFiltered, 'remix');
    // const liveFiltered = filterTracks(remixFiltered, 'live');
    // const singleFiltered = filterTracks(liveFiltered, 'single');

    

    reverseEraOrder(allTracks);    


    const sortedDuration = sortTracksByDuration(allTracks);
    // const sortedDuration = sortTracksByDuration(singleFiltered);

    return (
        <>

            <div className="vertical-chronology-container" style={{ marginBottom: 40}}>
                {sortedDuration.map((track, index) => (
                    <div key={index}>
                        <div className="vertical-album-container" >
                            <div className="vertical-album-tracks">
                                <VerticalTrack
                                    type='sortedOrder'
                                    track={track}
                                    key={index}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="vertical-chronology-container">
                {albumTracks.map((album, index) => (
                    <div key={index}>
                        <VerticalAlbum
                            album={album}
                            key={index}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};


export default VerticalChronology;










