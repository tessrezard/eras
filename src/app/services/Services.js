import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchToken  } from '../../store/thunks';
import { newTracks } from '../data/current_data/new_tracks.js';
import ChronologicallySortAlbumTracks from './ChronologicallySortAlbumTracks.js';
import { addValues } from '../utilities/addValues.js';
const Services = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch the async thunk action when the component mounts
        dispatch(fetchToken());

    }, [dispatch]);

    // const prepTracks = addValues(newTracks);
    // console.log('prepTracks', prepTracks);

    // <ArtistAlbums /> to find new albums to add to data set
    // <AlbumTracks /> to get albums & corresponding tracks, and sort. 
    // <ChronologicallySortAlbumTracks/> to sort local albumTracks data

    return (
        <>
            <ChronologicallySortAlbumTracks /> 
        </>
    );
}

export default Services;