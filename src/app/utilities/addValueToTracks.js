import { albumTracks } from "../data/album_tracks";
import { sortedByEraAlbumTracks } from "../data/sorted_by_era_album_tracks";


// TO TRACK 

// THERE ARE A COUPLE OF KEY VALUE PAIRS THAT I NEED TO ADD TO THE MAIN DATASET, WHICH SPOTIFY CANNOT PROVIDE
// THESE INCLUDE :
//      
//      "era": "ERA_TO_REPLACE";
//      "trackVariant": "VARIANT_TO_REPLACE";
//      "albumName" : "ALBUM_NAME_TO_REPLACE";


export const addValues = () => {
    // --------------------------------------------------------------------------
    // BECAUSE WE TAKE THE TRACKS OUT OF THE CONTEXT OF THEIR ALBUM (TO DISPLAY THEM SORTED) 
    // ADD VALUE TO TRACK : albumName

//      trackVariant include : ["album", "extended", "remix", "live", "demo", "single", "acoustic" ]


    const addAlbumName = sortedByEraAlbumTracks.map(albumData => {
        const { album, tracks } = albumData;
        const albumName = album.name;

        // Add albumName property to each track object
        const tracksWithAlbumName = tracks.map(track => ({ ...track, albumName }));

        return { album: { ...album }, tracks: tracksWithAlbumName };
    });

    console.log(addAlbumName);








    const addTrackVariant = addAlbumName.map(albumData => {
        const { album, tracks } = albumData;


        // THE BASE TRACK VARIANT IS ALBUM
        let trackVariant = 'album';

        const findVariant = () => {

            try {

                // IF POSSIBLE SET TRACK VARIANT FROM ALBUM LEVEL

                if (album.album_type === 'single') {
                    trackVariant = 'single';
                }
                if (tracks.name.toLowerCase().includes('live')) {
                    console.log(tracks.name)
                }

                // acoustic

                // IF STILL BASE (ALBUM OR SINGLE), SET FROM TRACK LEVEL
                
                // FROM THE VAULT = EXTENDED 
                // REMIX = REMIX
                // DEMO = DEMO
                // ACOUSTIC = ACOUSTIC


            } catch (error) {
                console.log(error);
            }

        }


        // Add albumName property to each track object
        const tracksWithTrackVariant = tracks.map(track => ({ ...track, trackVariant }));

        return { album: { ...album }, tracks: tracksWithTrackVariant };
    });


    console.log('addTrackVariant', addTrackVariant);



    // --------------------------------------------------------------------------
    // Combine all tracks into a single array
    const allTracks = addAlbumName.reduce((accumulator, album) => [...accumulator, ...album.tracks], []);

    return allTracks;
}



console.log(addValues());








