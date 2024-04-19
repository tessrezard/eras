import { allTracks } from "../data/current_data/all_tracks";
import { isOdd } from "./isEven";
// ---------------------------------------GET ONE PAIR ---------------------------------------

export const getPair = (remainingTracks, filteredTracks) => {
    // check there are enough remaining tracks to form a pair
    if (remainingTracks.length < 2) {
        throw new Error('Insufficient tracks remaining to form a pair');
    }

    // get two random indices
    const randomIndex1 = Math.floor(Math.random() * remainingTracks.length);
    let randomIndex2 = Math.floor(Math.random() * remainingTracks.length);

    // check randomIndex2 is different from randomIndex1
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * remainingTracks.length);
    }

    // get the chosen tracks
    const track1 = remainingTracks[randomIndex1];
    const track2 = remainingTracks[randomIndex2];



    // find the index of tracks 1 and 2 in filteredTracks
    const id1 = track1.id;
    const id2 = track2.id;
    const eraIndex1 = allTracks.findIndex((trackObj) => trackObj.id == id1);
    const eraIndex2 = allTracks.findIndex((trackObj) => trackObj.id == id2);


    // remove chosen tracks from remainingTracks
    const updatedRemainingTracks = remainingTracks.filter((_, index) => index !== randomIndex1 && index !== randomIndex2);

    // Return the pair of tracks along with their indices
    return [
        updatedRemainingTracks,
        { track: track1, eraIndex: eraIndex1 },
        { track: track2, eraIndex: eraIndex2 },
    ];
}

// explained: 
// here we create the pairs to be sorted.
// a pair is an ARRAY. It has two items, each an object.
// the items are objects, with the values 'track' and 'index'
// track is self explanatory.
// index is the original index of the track in ERA ORDER. 
// ------------------------------------------------------------------------------




// ---------------------------------------ITERATE OVER GET PAIR TO GET ALL PAIRS ---------------------------------------

export const splitIntoPairs = (filteredTracks, remainingTracks) => {

    let numTracks = filteredTracks.length;

    if (isOdd(filteredTracks)){
        numTracks++;
    }
    let pairs = [];
    let remaining = remainingTracks;

    for (let i = 0; i < (filteredTracks.length / 2); i++) {
        if (remaining.length < 2) {
            // pairs.push([remaining])
            // console.log('remaining', remaining[0])
            const eraIndex1 = allTracks.findIndex((trackObj) => trackObj.id == remaining[0].id);
            // console.log('eraIndex', eraIndex1)
            const lastTrack = {track: remaining[0], eraIndex: eraIndex1};
            pairs.push([lastTrack])

        } else {
            // console.log('filteredTracks[i]', filteredTracks[i]);
            const newPair = getPair(remaining, filteredTracks);
            const [updatedRemainingTracks, track1, track2] = newPair;
            remaining = updatedRemainingTracks;
            const trackPair = [track1, track2]
            pairs.push(trackPair);
        }
    }

    return pairs;
}
// --------------------------------------------------------------------------------------------








// ---------------------------------------GET ONE TRACK ---------------------------------------
export const getRandomTrack = (remainingTracks, filteredTracks, randomPivotIndex, pivot) => {
    // check there are enough remaining tracks to form a pair
    if (remainingTracks.length < 2) {
        throw new Error('Insufficient tracks remaining to form a pair');
    }

    // get two random indices
    let randomIndex = Math.floor(Math.random() * remainingTracks.length);

    // check randomIndex2 is different from randomIndex1
    while (randomIndex === randomPivotIndex) {
        randomIndex = Math.floor(Math.random() * remainingTracks.length);
    }

    // get the chosen tracks
    const randomTrack = remainingTracks[randomIndex];

    // find the index of tracks 1 and 2 in filteredTracks
    const randomTrackId = randomTrack.id;
    const pivotId = pivot.id;

    const eraIndex = filteredTracks.findIndex((trackObj) => trackObj.id == randomTrackId);
    const pivotEraIndex = filteredTracks.findIndex((trackObj) => trackObj.id == pivotId);

    // remove chosen tracks from remainingTracks
    const updatedRemainingTracks = remainingTracks.filter((_, index) => index !== randomIndex);

    // Return the pair of tracks along with their indices
    return [
        updatedRemainingTracks,
        { track: pivot, eraIndex: pivotEraIndex },
        { track: randomTrack, eraIndex: eraIndex },

    ];
}


