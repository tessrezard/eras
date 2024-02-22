import { albumTracks } from "../data/album_tracks";
import { sortedByEraAlbumTracks } from "../data/sorted_by_era_album_tracks";

// THERE ARE A COUPLE OF KEY VALUE PAIRS THAT I NEED TO ADD TO THE MAIN DATASET, WHICH SPOTIFY CANNOT PROVIDE
// THESE INCLUDE :
//      
//      "era": "ERA_TO_REPLACE"; (manually so far)
//      "albumName" : "ALBUM_NAME_TO_REPLACE";
//      "trackVariant": "VARIANT_TO_REPLACE";


export const addValues = () => {


    // --------------------------------------------------------------------------
    // BECAUSE WE TAKE THE TRACKS OUT OF THE CONTEXT OF THEIR ALBUM (TO DISPLAY THEM SORTED) 


    const addAlbumName = (albumsTrackList) => {
        const dataWithValue = albumsTrackList.map(albumObj => {
            const { album, tracks } = albumObj;
            const albumName = album.name;

            // Add albumName property to each track object
            const tracksWithAlbumName = tracks.map(track => ({ ...track, albumName }));

            return { album: { ...album }, tracks: tracksWithAlbumName };
        });
        return dataWithValue;
    }

    //          |  |
    //          |  |
    //         \    /
    //          \  /
    //           \/

    // ADD VALUE TO TRACK : albumName
    const dataWithAlbumName = addAlbumName(sortedByEraAlbumTracks);


    //          |        |
    //          |        |
    //          |        |
    //          |        |
    //          |        |
    //          |        |
    //       \              /
    //        \            /
    //         \          /
    //          \        /
    //           \      /
    //            \    /
    //             \  /
    //              \/


    //  trackVariant options :  ["album", "extended", "remix", "live", "single" ]
    // FROM ALBUM

    const determineTrackVariantFromAlbum = (albumObj) => {
        const { album } = albumObj;
        // THE BASE TRACK VARIANT IS ALBUM
        let trackVariant = 'album';
        try {
            // IF POSSIBLE SET TRACK VARIANT FROM ALBUM LEVEL
            if (album.album_type === 'single') {
                trackVariant = 'single';
            }
            if (album.name.toLowerCase().includes('deluxe') || album.name.toLowerCase().includes('edition')) {
                trackVariant = 'extended';
            }
            if (album.name.toLowerCase().includes('live')) {
                trackVariant = 'live';
            }
            if (album.name.toLowerCase().includes('remix')) {
                trackVariant = 'remix';
            }
        } catch (error) {
            console.log(error);
        }
        return trackVariant;
    };

    //          |  |
    //          |  |
    //         \    /
    //          \  /
    //           \/

    // ADD VALUE TO TRACK : trackVariant (from album)

    const addTrackVariantFromAlbum = dataWithAlbumName.map(albumObj => {
        const { album, tracks } = albumObj;
        const trackVariant = determineTrackVariantFromAlbum(albumObj);

        // Add trackName property to each track object
        const tracksWithTrackVariant = tracks.map(track => ({ ...track, trackVariant }));

        return { album: { ...album }, tracks: tracksWithTrackVariant };
    });



    //          |        |
    //          |        |
    //          |        |
    //          |        |
    //          |        |
    //          |        |
    //       \              /
    //        \            /
    //         \          /
    //          \        /
    //           \      /
    //            \    /
    //             \  /
    //              \/

    // --------------------------------------------------------------------------
    // Combine all tracks into a single array

    let justTracks = addTrackVariantFromAlbum.reduce((accumulator, album) => [...accumulator, ...album.tracks], []);



    //  WE NOW TRANSITION FROM WORKING WITH THE ALBUM DATA, TO JUST TRACKS DATA

    //          |        |
    //          |        |
    //          |        |
    //          |        |
    //          |        |
    //          |        |
    //       \              /
    //        \            /
    //         \          /
    //          \        /
    //           \      /
    //            \    /
    //             \  /
    //              \/


    const determineTrackVariantFromTrack = (track) => {
        let trackVariant = track.trackVariant;
        try {
            if (track.name.toLowerCase().includes('from the vault')) {
                trackVariant = 'extended';
            }
            if (track.name.toLowerCase().includes('live')) {
                trackVariant = 'live';
            }
            if (track.name.toLowerCase().includes('remix')) {
                trackVariant = 'remix';
            }
        } catch (error) {
            console.log(error);
        }
        return trackVariant;
    };


    const determineIfAcoustic = (track) => {
        let acoustic = false;
        try {
            if (track.name.toLowerCase().includes('acoustic') || track.name.toLowerCase().includes('session')) {
                acoustic = true;
            }
        } catch (error) {
            console.log(error);
        }
        return acoustic;
    };


    //          |  |
    //          |  |
    //         \    /
    //          \  /
    //           \/

    // ADD VALUE TO TRACK : trackVariant (from track) && acoustic (t/f)

    const addTrackVariantFromTrack = justTracks.map(track => {
        const trackVariant = determineTrackVariantFromTrack(track);
        const acoustic = determineIfAcoustic(track);
        const points = 0;
        return { ...track, trackVariant, acoustic, points };
    });

    // const tracksDataWithTrackVariant = justTracks.map(track => determineTrackVariantFromTrack(track))

    // console.log(addTrackVariantFromTrack);



    return addTrackVariantFromTrack;
}



// console.log(addValues());








