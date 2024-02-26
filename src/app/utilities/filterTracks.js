
export const filterTracks = (tracks, filters) => {
    const options = [ "album", "extended", "remix", "live", "single", "acoustic" ]
    let filtered = [...tracks];

    console.log('filters', filters);

    if (Array.isArray(filters) && filters.every((filter) => options.includes(filter))) {
        console.log('in if ');

      filters.forEach((filter) => {
        switch (filter) {
          case "album":
          case "extended":
          case "remix":
          case "live":
          case "single":
            filtered = filtered.filter((track) => track.trackVariant !== filter);
            break;
          case "acoustic":
            filtered = filtered.filter((track) => !track.acoustic);
            break;
          // Handle other filters here if needed
          default:
            break;
        }
      });
    } else {
        return tracks;
    }
    return filtered;

}