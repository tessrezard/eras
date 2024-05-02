// export const filterOptions = ["album", "extended", "remix", "live", "single", "acoustic"]
export const filterOptions = ["album", "extended", "remix", "live", "single"]

export const filterByType = (tracks, filters) => {
  let filtered = [...tracks];


  if (Array.isArray(filters) && filters.every((filter) => filterOptions.includes(filter))) {

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