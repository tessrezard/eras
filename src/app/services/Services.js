import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToken  } from '../../store/thunks';

import AlbumsAndSingles from './AlbumsAndSingles';

const Services = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch the async thunk action when the component mounts
        dispatch(fetchToken());

    }, [dispatch]);


    return (
        <>
            <AlbumsAndSingles />
        </>
    );
}

export default Services;