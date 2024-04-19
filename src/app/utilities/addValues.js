import { newTracks } from "../data/current_data/new_tracks";
// THERE ARE A COUPLE OF KEY VALUE PAIRS THAT I NEED TO ADD TO THE MAIN DATASET, WHICH SPOTIFY CANNOT PROVIDE
// THESE INCLUDE :
//      
//      "era": "ERA_TO_REPLACE"; (manually so far)
//      "albumName" : "ALBUM_NAME_TO_REPLACE";
//      "trackVariant": "VARIANT_TO_REPLACE";



// HOW TO ADD VALUES: 
//      addValues receives 
export const addValues = (tracks) => {

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
    const dataWithAlbumName = addAlbumName(tracks);


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
            if (album.name.toLowerCase().includes('deluxe') || album.name.toLowerCase().includes('edition')|| album.name.toLowerCase().includes('anthology') ) {
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
        const tracksWithTrackVariant = tracks.map(track => ({ ...track, trackVariant, era:'' }));

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


    // justTracks puts first at top
    let justTracks = addTrackVariantFromAlbum.reduce((accumulator, album) => [...accumulator, ...album.tracks], []);
 



    // MANUALLY COPY JUSTTRACKS TO all_tracks 

    // console.log(justTracks, 'TRACKS TO ADD TO DATABASE')
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
            if (track.name.toLowerCase().includes('live ') || track.name.toLowerCase().includes('session')) {
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


    // IF YOU ADDED A NEW ALBUM YOU SHOULD FIGURE OUT HOW TO IDENTIFY THE ALBUM TO GET THE ERA
    const determineEra = (track) => {

        let era = track.era;
        // I AM ONLY ADDING TTPD TRACKS SO THIS IS OKAY
        era = 'theTorturedPoetsDepartment';

        try {
            if (track.albumName.toLowerCase().includes('POETS')) {
                console.log(track);
                era = 'theTorturedPoetsDepartment';
            }
        } catch (error) {
            console.log(error);
        }
        return era;
    };


    //          |  |
    //          |  |
    //         \    /
    //          \  /
    //           \/

    // ADD VALUE TO TRACK : trackVariant (from track) && acoustic (t/f)

    const addValuesFromTrack = justTracks.map(track => {
        const trackVariant = determineTrackVariantFromTrack(track);
        const acoustic = determineIfAcoustic(track);
        const era = determineEra(track);
        const points = 1;
        return { ...track, trackVariant, acoustic, points, era };
    });

    console.log('TRACKS TO ADD TO DATABASE:', addValuesFromTrack)

    return addValuesFromTrack;
}



console.log(addValues(newTracks));








