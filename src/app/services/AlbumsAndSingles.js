// This feels like there should be a better way for doing this, but at the moment, it works. 
// I use getSpotifyAlbums API, which returns array of 50 objects (albums, compilations, singles). 
// I copied that response here.  
// Here, we can call getSpotifyAlbums again to get updates, and merge the results into albums_and_singles if new. 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpotifyArtistAlbums } from '../../store/thunks';
import { artist_albums } from "../data/artist_albums";

const AlbumsAndSingles = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.spotifyArtistAlbums);
   

  
    useEffect(() => {
        dispatch(fetchSpotifyArtistAlbums());

    }, [dispatch]);

  console.log('data in non visual', data);


    return null;
}

export default AlbumsAndSingles;