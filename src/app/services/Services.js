import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToken  } from '../../store/thunks';

import ArtistAlbums from './ArtistAlbums';
import AlbumTracks from './AlbumTracks';

const Services = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch the async thunk action when the component mounts
        dispatch(fetchToken());

    }, [dispatch]);


    // <ArtistAlbums /> to find new albums to add to data set
    // <AlbumTracks /> to get albums & corresponding tracks. 


    return (
        <>
        </>
    );
}

export default Services;