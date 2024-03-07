import { getAudioFeatures } from "../API";
import { allTracks } from "../data/current_data/all_tracks";

export const prepForAudioFeatures = (tracks) => {

    const chunkSize = 40;
    const ids = tracks.map(track => {
        return track.id});

    const splitIds = [];
    for (let i = 0; i < ids.length; i += chunkSize) {
        splitIds.push(ids.slice(i, i + chunkSize));
    }
    return splitIds;
}

export const stringifyIds = idsArr => idsArr.join('%2C');

// const idChunks = prepForAudioFeatures(allTracks);
// const idsString = stringifyIds(idChunks[0]);

// export const getChunkForAudioFeatures = (tracks) => {

//     const idChunks = prepForAudioFeatures(tracks);

//     const chunk = idChunks[0];
//     console.log(`in chunk`);

//     for (let i = 0; i < 1; i++) {
//         const chunk = idChunks[i];
//         for (let j = 0; j < chunk.length; j++) {
//             const id = chunk[j];
//             try {
//                 // Assuming getAudioFeatures returns a Promise
//                 getAudioFeatures(id).then(audioFeatures => {
//                     // Do something with audioFeatures
//                     console.log(`Audio features for ID ${id}:`, audioFeatures);
//                 }).catch(error => {
//                     console.error(`Error fetching audio features for ID ${id}:`, error);
//                 });
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//     }

// }

// getChunkForAudioFeatures(allTracks);

// {
//     "acousticness": 0.00242,
//     "analysis_url": "https://api.spotify.com/v1/audio-analysis/2takcwOaAZWiXQijPHIx7B",
//     "danceability": 0.585,
//     "duration_ms": 237040,
//     "energy": 0.842,
//     "id": "2takcwOaAZWiXQijPHIx7B",
//     "instrumentalness": 0.00686,
//     "key": 9,
//     "liveness": 0.0866,
//     "loudness": -5.883,
//     "mode": 0,
//     "speechiness": 0.0556,
//     "tempo": 118.211,
//     "time_signature": 4,
//     "track_href": "https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B",
//     "type": "audio_features",
//     "uri": "spotify:track:2takcwOaAZWiXQijPHIx7B",
//     "valence": 0.428
//   }