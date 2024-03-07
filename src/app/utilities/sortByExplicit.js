export const sortbyExplicit = (tracks) => {
    const explicitTracks = [];
    const nonExplicitTracks = [];
  
    tracks.forEach(track => {
      if (track.explicit !== undefined) {
        if (track.explicit === true) {
          explicitTracks.push(track);
        } else {
          nonExplicitTracks.push(track);
        }
      } else {
        nonExplicitTracks.push(track);
      }
    });
  
    const allTracks = [...explicitTracks, ...nonExplicitTracks];
    return allTracks;
  }
