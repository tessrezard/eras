// This feels like there should be a better way for doing this, but at the moment, it works. 
// I use getSpotifyAlbums API, which returns array of 50 objects (albums, compilations, singles). 
// I copied that response here.  
// Here, we can call getSpotifyAlbums again to get updates, and merge the results into albums_and_singles if new. 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { artist_albums } from "../data/artist_albums";
import { albumTracks } from '../data/album_tracks';

const ChronologicallySortAlbumTracks = () => {
    const dispatch = useDispatch();


    //I have added a "era" value to each track to sort them by era
    // the following code is to MAKE A SORTED COPY OF LOCAL COPIED albumTracks in album_tracks.js DATA 

    // sort chronologically and take out duplicate songs
    const eraOrder = 
    [
        "torturedPoetsDepartment",
        "midnights",
        "carolina",
        "renegade",
        "evermore",
        "folklore",
        "christmas",
        "lover",
        "reputation",
        "nineteenEightyNine",
        "red",
        "speakNow",
        "fearless",
        "taylorSwift"
    ]

    const sortByEra = albumTracks.sort((a,b) => eraOrder.indexOf(a.album.era) - eraOrder.indexOf(b.album.era));
    return (null);
}

export default ChronologicallySortAlbumTracks;