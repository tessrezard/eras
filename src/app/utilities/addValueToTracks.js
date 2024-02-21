import { albumTracks } from "../data/album_tracks";
import { sortedByEraAlbumTracks } from "../data/sorted_by_era_album_tracks";


    // TO TRACK 

    // THERE ARE A COUPLE OF KEY VALUE PAIRS THAT I NEED TO ADD TO THE MAIN DATASET, WHICH SPOTIFY CANNOT PROVIDE
    // THESE INCLUDE :
    //      
    //      "era": "ERA_TO_REPLACE";
    //      "trackVariant": "VARIANT_TO_REPLACE";
    //      "albumName" : "ALBUM_NAME_TO_REPLACE";



    export const addAlbumName = () => {
    // --------------------------------------------------------------------------
    // BECAUSE WE TAKE THE TRACKS OUT OF THE CONTEXT OF THEIR ALBUM (TO DISPLAY THEM SORTED) 
    // ADD VALUE TO TRACK : albumName
    
    const albumTracksWithAlbumName = sortedByEraAlbumTracks.map(albumData => {
        const { album, tracks } = albumData;
        const albumName = album.name;

        // Add albumName property to each track object
        const tracksWithAlbumName = tracks.map(track => ({ ...track, albumName }));

        return { album: { ...album, albumName }, tracks: tracksWithAlbumName };
    });

    return albumTracksWithAlbumName;
}

console.log(addAlbumName);










