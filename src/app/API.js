import axios from 'axios';
import { CLIENT_SECRET, CLIENT_ID } from '../secrets';
import { artistDataTS } from './data/current_data/artist_data';
import { artist_albums } from './data/current_data/artist_albums';
import { prepForAudioFeatures } from './utilities/prepForAudioFeatures';
import { allTracks } from './data/current_data/all_tracks';
export const API_ROOT = 'https://www.reddit.com';
export const SUBREDDITS_ENDPOINT = `${API_ROOT}/subreddits.json`;


// ---------------------------------------------------------------------------------------------------------------------
//GET TOKEN

export const getSpotifyToken = async () => {


  // CHECK IF TOKEN IS EXPIRED. RETURNS TRUE IF EXPIRED, FALSE IF OK
  const tokenExpired = () => {
    if (window.localStorage.getItem('tokenTimestamp')) {
      const timeDiff = Date.now() - window.localStorage.getItem('tokenTimestamp');
      const hoursDiff = timeDiff / (1000 * 60 * 60)

      if (hoursDiff >= 1) {
        return true;
      } else {
        return false
      }
    } else {
      return true;
    }
  }

  if (tokenExpired()) {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('tokenTimestamp');
  }

  if (window.localStorage.getItem('token') && !tokenExpired()) {
    const token = window.localStorage.getItem('token');
    return token;
  }


  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (btoa(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
    },
  });

  const responseObj = await response.json();
  const token = responseObj.access_token;

  // -- SET LOCAL STORAGE TOKEN FROM STATE VARIABLE -- (if not yet set, if local deleted)
  if (token && !window.localStorage.getItem('token')) {
    window.localStorage.setItem('token', token);
    const tokenTimestamp = Date.now();
    window.localStorage.setItem('tokenTimestamp', tokenTimestamp);
  }


  return token;
};








// ---------------------------------------------------------------------------------------------------------------------
// GET ARTISTS'S ALBUMS (& SINGLES, COMPILATIONS ETC) 


export const getSpotifyArtistAlbums = async () => {

  const token = await getSpotifyToken();
  const search = artistDataTS.name;
  const typeKey = 'tracks';
  const typeOfSearch = 'artist';

  const response = await axios.get(`https://api.spotify.com/v1/artists/${artistDataTS.id}/albums`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      q: `${search}`,
      type: `${typeOfSearch}`,
      limit: 50,
    }
  });

  const keysToCopy = ['name', 'id', 'album_type', 'artists', 'id', 'release_date', 'total_tracks'];

  const filterData = response.data.items.map(item => {
    let newItem = {};
    keysToCopy.forEach((key) => {
      if (key === 'artists') {
        if (item.hasOwnProperty(key)) {
          const justArtistsNames = item[key].map(artist => artist['name']);
          newItem['artists'] = justArtistsNames;
        }
      } else {
        if (item.hasOwnProperty(key)) {
          newItem[key] = item[key];
        }
      }

    });
    return newItem;
  })
  return filterData;
};



// ---------------------------------------------------------------------------------------------------------------------
// GET ALBUM INFO

export const getSpotifyAlbum = async (id) => {

  const token = await getSpotifyToken();


  const response = await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      id: id,
    }
  });

  const albumData = {};

  const keysToCopy = ['name', 'id', 'album_type', 'artists', 'label', 'release_date', 'total_tracks'];

  const filterData = () => {
    for (let i = 0; i < keysToCopy.length; i++) {
      let newItem = {};
      let key = keysToCopy[i];
      let value = response.data[key];

      if (key === 'artists') {
        const justArtistsNames = response.data[key].map(artist => artist['name']);
        newItem['artists'] = justArtistsNames;
      } else {
        newItem[key] = value;
      }

      Object.assign(albumData, newItem);

    }
  };

  filterData();

  return albumData;
};


// ---------------------------------------------------------------------------------------------------------------------
// GET ALBUM Tracks

export const getSpotifyAlbumTracks = async (id) => {

  const token = await getSpotifyToken();


  const response = await axios.get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      id: id,
      limit: 50,
    }
  });

  const keysToCopy = ['name', 'id', 'disc_number', 'duration_ms', 'explicit', 'track_number', 'type', 'artists'];

  const filterData = response.data.items.map(item => {
    let newItem = {};
    keysToCopy.forEach((key) => {
      if (key === 'artists') {
        if (item.hasOwnProperty(key)) {
          const justArtistsNames = item[key].map(artist => artist['name']);
          newItem['artists'] = justArtistsNames;
        }
      } else {
        if (item.hasOwnProperty(key)) {
          newItem[key] = item[key];
        }
      }

    });
    return newItem;
  })
  return filterData;
};



// ---------------------------------------------------------------------------------------------------------------------
// GET Playlist
// I used this specifically to get the Lover live from Paris playlist as that is the only place those tracks appear. 
// to get the ID for this playlist i went directly to spotify, share, embed, show code, it is in the src URL


export const getPlaylist = async (id) => {

  const token = await getSpotifyToken();

  const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      id: { id },
    }
  });

  const playlistItems = response.data.items;

  console.log(playlistItems);

  try {

    const albumData = {};

    const keysToCopy = ['name', 'id', 'album_type', 'artists', 'label', 'release_date', 'total_tracks'];

    const filterData = () => {
      for (let i = 0; i < keysToCopy.length; i++) {
        let newItem = {};
        let key = keysToCopy[i];
        let value = response.data[key];

        if (key === 'artists') {
          const justArtistsNames = response.data[key].map(artist => artist['name']);
          newItem['artists'] = justArtistsNames;
        } else {
          newItem[key] = value;
        }

        Object.assign(albumData, newItem);

      }
    };

    filterData();

    return albumData;
  } catch (error) {
    console.log(error)
    return playlistItems;
  }
};

// getPlaylist('1Ew1IbrHjmNedkANLw1jdr')



//____________________________________________________________________________________________
// GET Audio Features
// can only inquire for 100 at a time

// export const getAudioFeatures = async (id) => {

//   let audioFeatures = {};
//   const token = await getSpotifyToken();
// try {

//     const response = await axios.get(`https://api.spotify.com/v1/audio-features/${id}`, {
//       headers: {
//         'Authorization': `Bearer ${token}`,
//       },
//       params: {
//         id: { id },
//       }
//     });
//     audioFeatures = response.data;
// } catch (error){
//   console.log(error);
//   return id;
// }
// return audioFeatures;

// };



// const idChunks = prepForAudioFeatures(allTracks);
 
// console.log(' idChunks.length', idChunks.length );
//   const chunk = idChunks[0];

//   for (let j = 0; j < chunk.length; j++) {
//       const id = chunk[j];
//       console.log('index j', j );

//       try {
//           // Assuming getAudioFeatures returns a Promise
//           getAudioFeatures(id).then(audioFeatures => {
//               // Do something with audioFeatures
//               console.log(`Audio features for ID ${id}:`, audioFeatures);
//               console.log('index j', j );
//           }).catch(error => {
//               console.error(`Error fetching audio features for ID ${id}:`, error);
//           });
//       } catch (error) {
//           console.log(error)
//       }
//   }




// console.log('idChunks 0', idChunks[0][6]);
// getAudioFeatures('1XjHRolIXL2M1EEOUsGGR4')
// getAudioFeatures(idChunks[0]);

// console.log("getAudioFeatures('1XjHRolIXL2M1EEOUsGGR4')", getAudioFeatures('1XjHRolIXL2M1EEOUsGGR4'));
