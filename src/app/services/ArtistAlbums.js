// This feels like there should be a better way for doing this, but at the moment, it works. 
// I use getSpotifyAlbums API, which returns array of 50 objects (albums, compilations, singles). 
// I copied that response here.  
// Here, we can call getSpotifyAlbums again to get updates, and merge the results into albums_and_singles if new. 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpotifyArtistAlbums } from '../../store/thunks';
import { artist_albums } from "../data/current_data/artist_albums";

const ArtistAlbums = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.spotifyArtistAlbums);
   
    useEffect(() => {
        dispatch(fetchSpotifyArtistAlbums());
    }, [dispatch]);


    const uniqueIdentifier = 'id';

    // Compare new response to old data set, find new albums  
    const new_albums = [ ...data.filter(newObj =>
        !artist_albums.find(oldObj => oldObj[uniqueIdentifier] === newObj[uniqueIdentifier])
        )];

        console.log('new_albums', new_albums);
        


    return null;
}

export default ArtistAlbums;