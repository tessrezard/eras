import { allTracks } from "../data/current_data/all_tracks";


export const filterTracks = (tracks, filter) => {
    const options = [ "album", "extended", "remix", "live", "single", "acoustic" ]

    if (options.includes(filter) ) {

        if (filter === 'album') {
            const filtered = tracks.filter(track => track.trackVariant !== filter);
            return filtered;
        } else if (filter === 'extended') {
            const filtered = tracks.filter(track => track.trackVariant !== filter);
            return filtered;
        } else if (filter === 'remix') {
            const filtered = tracks.filter(track => track.trackVariant !== filter);
            return filtered;
        } else if (filter === 'live') {
            const filtered = tracks.filter(track => track.trackVariant !== filter);
            return filtered;
        } else if (filter === 'single') {
            const filtered = tracks.filter(track => track.trackVariant !== filter);
            return filtered;
        } else if (filter === 'acoustic') {
            const filtered = tracks.filter(track => !track.acoustic);
            return filtered;
        } else{
            // Handle other filters here if needed
            return tracks;
        }

    } else {
        return null;
    }

}

